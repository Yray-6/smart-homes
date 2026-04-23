import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = "Info@trustedhandsdigitalhomes.com";
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL ?? "Trusted Hands <onboarding@resend.dev>";

type ContactPayload = {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  propertyType: string;
  requirements: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function validate(payload: Partial<ContactPayload>) {
  const fields: Array<keyof ContactPayload> = [
    "fullName",
    "email",
    "phone",
    "location",
    "propertyType",
    "requirements",
  ];

  for (const field of fields) {
    if (!payload[field] || !String(payload[field]).trim()) {
      return `${field} is required`;
    }
  }

  if (!isValidEmail(String(payload.email).trim())) {
    return "email is invalid";
  }

  return null;
}

function buildEmailHtml(payload: ContactPayload) {
  const safe = {
    fullName: escapeHtml(payload.fullName),
    email: escapeHtml(payload.email),
    phone: escapeHtml(payload.phone),
    location: escapeHtml(payload.location),
    propertyType: escapeHtml(payload.propertyType),
    requirements: escapeHtml(payload.requirements),
  };

  return `
  <div style="font-family: Arial, sans-serif; background:#f4f7fb; padding:24px; color:#0b1220;">
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width:720px; margin:0 auto; background:#ffffff; border-radius:14px; overflow:hidden; border:1px solid #e5e7eb;">
      <tr>
        <td style="background:#13d1c3; color:#ffffff; padding:20px 24px;">
          <h2 style="margin:0; font-size:22px; line-height:1.2;">New Contact Form Submission</h2>
          <p style="margin:8px 0 0; font-size:14px; opacity:0.95;">Trusted Hands Digital Homes Website</p>
        </td>
      </tr>
      <tr>
        <td style="padding:24px;">
          <h3 style="margin:0 0 12px; font-size:16px; color:#0f172a;">Client Details</h3>
          <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px; border-collapse:collapse;">
            <tr>
              <td style="padding:8px 0; color:#64748b; width:170px;">Full Name</td>
              <td style="padding:8px 0; color:#0f172a;"><strong>${safe.fullName}</strong></td>
            </tr>
            <tr>
              <td style="padding:8px 0; color:#64748b;">Email Address</td>
              <td style="padding:8px 0; color:#0f172a;">${safe.email}</td>
            </tr>
            <tr>
              <td style="padding:8px 0; color:#64748b;">Phone Number</td>
              <td style="padding:8px 0; color:#0f172a;">${safe.phone}</td>
            </tr>
            <tr>
              <td style="padding:8px 0; color:#64748b;">Location</td>
              <td style="padding:8px 0; color:#0f172a;">${safe.location}</td>
            </tr>
            <tr>
              <td style="padding:8px 0; color:#64748b;">Property Type</td>
              <td style="padding:8px 0; color:#0f172a;">${safe.propertyType}</td>
            </tr>
          </table>

          <div style="margin-top:20px; padding:16px; border-radius:10px; background:#f8fafc; border:1px solid #e2e8f0;">
            <h3 style="margin:0 0 10px; font-size:16px; color:#0f172a;">Specific Requirements</h3>
            <p style="margin:0; font-size:14px; line-height:1.6; color:#334155; white-space:pre-wrap;">${safe.requirements}</p>
          </div>
        </td>
      </tr>
    </table>
  </div>
  `;
}

function buildEmailText(payload: ContactPayload) {
  return `New Contact Form Submission

Client Details
- Full Name: ${payload.fullName}
- Email Address: ${payload.email}
- Phone Number: ${payload.phone}
- Location: ${payload.location}
- Property Type: ${payload.propertyType}

Specific Requirements
${payload.requirements}
`;
}

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Email service is not configured. Add RESEND_API_KEY." },
      { status: 500 },
    );
  }

  try {
    const data = (await request.json()) as Partial<ContactPayload>;
    const payload: ContactPayload = {
      fullName: String(data.fullName ?? "").trim(),
      email: String(data.email ?? "").trim(),
      phone: String(data.phone ?? "").trim(),
      location: String(data.location ?? "").trim(),
      propertyType: String(data.propertyType ?? "").trim(),
      requirements: String(data.requirements ?? "").trim(),
    };

    const validationError = validate(payload);
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: `New Contact Form Submission - ${payload.fullName}`,
      replyTo: payload.email,
      html: buildEmailHtml(payload),
      text: buildEmailText(payload),
    });

    if (error) {
      return NextResponse.json(
        { error: error.message ?? "Email provider rejected the request." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Unable to send your message at the moment. Please try again." },
      { status: 500 },
    );
  }
}
