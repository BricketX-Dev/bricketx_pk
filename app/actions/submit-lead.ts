"use server";

import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

// Initialize Supabase using the service role key to bypass RLS for server-side operations
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitLeadAction(formData: {
  name: string;
  email: string;
  contact: string;
  message: string;
}) {
  try {
    // 1. Insert data into Supabase
    const { error: dbError } = await supabase.from("leads").insert([
      {
        name: formData.name,
        email: formData.email,
        phone: formData.contact, // Mapping your form's 'contact' to DB 'phone'
        message: formData.message,
        site_origin: "bricket.pk", // Required by your DB schema
        form_type: "contact_form", // Required by your DB schema
      },
    ]);

    if (dbError) throw new Error(`Supabase Error: ${dbError.message}`);

    // 2. Send Notification Email to Admin (info@bricket.pk)
    await resend.emails.send({
      from: "Bricket Leads <info@bricket.pk>", // Must be a verified domain in Resend
      to: "info@bricket.pk",
      subject: `New Lead: ${formData.name}`,
      html: `
        <h2>New Lead Details</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.contact}</p>
        <p><strong>Message:</strong> ${formData.message || "N/A"}</p>
      `,
    });

    // 3. Send Confirmation Email to the User
    await resend.emails.send({
      from: "Bricket <info@bricket.pk>",
      to: formData.email,
      subject: "We received your message",
      html: `
        <h3>Hi ${formData.name},</h3>
        <p>Thank you for reaching out to Bricket. We have received your message and our team will get back to you shortly.</p>
        <br/>
        <p>Best regards,<br/>The Bricket Team</p>
      `,
    });

    return { success: true };
  } catch (error: any) {
    console.error("Submission error:", error);
    return { success: false, error: error.message };
  }
}