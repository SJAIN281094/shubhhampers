import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Email configuration
const createTransporter = () => {
  const port = parseInt(process.env.SMTP_PORT || "587");
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: port,
    secure: port === 465, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    },
    // Additional options for better compatibility
    tls: {
      rejectUnauthorized: false, // Accept self-signed certificates
      ciphers: "SSLv3"
    },
    connectionTimeout: 60000, // 60 seconds
    greetingTimeout: 30000, // 30 seconds
    socketTimeout: 60000 // 60 seconds
  });
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message, contactMethod } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields" },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = createTransporter();
    // Email content for the business
    const businessEmailContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
      <div style="background: linear-gradient(135deg, #f1dea8 0%, #e9c579 50%, #daa755 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
        <h1 style="color: #462506; margin: 0; font-size: 28px;">🎁 New Contact Form Submission</h1>
        <p style="color: #9f6920; margin: 10px 0 0 0; font-size: 16px;">Shubhhampers - New Lead Alert</p>
      </div>
      
      <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
        <h2 style="color: #9f6920; border-bottom: 2px solid #e9c579; padding-bottom: 10px;">Contact Details</h2>
        
        <div style="margin: 20px 0;">
          <p style="margin: 10px 0;"><strong style="color: #462506;">Name:</strong> ${name}</p>
          <p style="margin: 10px 0;"><strong style="color: #462506;">Email:</strong> <a href="mailto:${email}" style="color: #9f6920;">${email}</a></p>
          <p style="margin: 10px 0;"><strong style="color: #462506;">Phone:</strong> ${phone || "Not provided"}</p>
          <p style="margin: 10px 0;"><strong style="color: #462506;">Company:</strong> ${company || "Not provided"}</p>
          <p style="margin: 10px 0;"><strong style="color: #462506;">Preferred Contact Method:</strong> ${contactMethod}</p>
        </div>

        <h3 style="color: #9f6920; border-bottom: 2px solid #e9c579; padding-bottom: 10px;">Message</h3>
        <div style="background: #f1dea8; padding: 15px; border-radius: 8px; margin: 15px 0;">
          <p style="color: #462506; line-height: 1.6; margin: 0;">${message.replace(/\n/g, "<br>")}</p>
        </div>

        <div style="margin-top: 30px; padding: 20px; background: linear-gradient(135deg, #e9c579 0%, #daa755 100%); border-radius: 8px; text-align: center;">
          <h3 style="color: #462506; margin: 0 0 15px 0;">Quick Actions</h3>
          <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
            <a href="mailto:${email}" style="background: #462506; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 5px;">📧 Reply via Email</a>
            ${phone ? `<a href="tel:${phone}" style="background: #9f6920; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 5px;">📞 Call Now</a>` : ""}
            <a href="https://wa.me/919685847274?text=Hi%20${encodeURIComponent(name)},%20Thank%20you%20for%20contacting%20Shubhhampers!" style="background: #25D366; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 5px;">💬 WhatsApp</a>
          </div>
        </div>

        <div style="margin-top: 20px; text-align: center; color: #666; font-size: 12px;">
          <p>This inquiry was submitted through the Shubhhampers contact form on ${new Date().toLocaleString("en-US")}</p>
        </div>
      </div>
    </div>
    `;

    // Auto-reply email content for the customer
    const customerEmailContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
      <div style="background: linear-gradient(135deg, #f1dea8 0%, #e9c579 50%, #daa755 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
        <h1 style="color: #462506; margin: 0; font-size: 28px;">🎁 Thank You for Contacting Shubhhampers!</h1>
        <p style="color: #9f6920; margin: 10px 0 0 0; font-size: 16px;">We've received your message and we're excited to help!</p>
      </div>
      
      <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
        <p style="color: #462506; font-size: 16px; line-height: 1.6;">Dear ${name},</p>
        
        <p style="color: #462506; font-size: 16px; line-height: 1.6;">
          Thank you for reaching out to Shubhhampers! We're thrilled that you're interested in our thoughtfully curated hampers that build meaningful relationships.
        </p>

        <div style="background: #f1dea8; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #9f6920; margin: 0 0 15px 0;">📝 Your Message Summary:</h3>
          <p style="color: #462506; margin: 0; font-style: italic;">"${message.substring(0, 150)}${message.length > 150 ? "..." : ""}"</p>
        </div>

        <p style="color: #462506; font-size: 16px; line-height: 1.6;">
          <strong>What happens next?</strong><br>
          Our team will review your inquiry and get back to you within 24 hours via your preferred contact method (${contactMethod}). We'll discuss your specific needs and help you create hamper experiences that truly make a difference.
        </p>

        <div style="background: linear-gradient(135deg, #e9c579 0%, #daa755 100%); padding: 20px; border-radius: 8px; margin: 25px 0; text-align: center;">
          <h3 style="color: #462506; margin: 0 0 15px 0;">🚀 While You Wait</h3>
                      <p style="color: #462506; margin: 0 0 15px 0;">Explore our hampers or connect with us directly:</p>
          <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
            <a href="https://www.shubhhampers.com/hampers" style="background: #462506; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 5px;">🎁 View Hampers</a>
            <a href="https://wa.me/919685847274?text=Hi!%20I%20just%20submitted%20a%20contact%20form%20and%20wanted%20to%20connect%20directly." style="background: #25D366; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 5px;">💬 WhatsApp Us</a>
          </div>
        </div>

        <p style="color: #462506; font-size: 16px; line-height: 1.6;">
          We're passionate about creating hamper experiences that strengthen relationships and create lasting memories. Whether you're looking for business solutions, wedding hampers, or personal celebrations, we're here to make it special.
        </p>

        <div style="margin-top: 30px; padding: 20px; background: #f8f8f8; border-radius: 8px; border-left: 4px solid #e9c579;">
          <h4 style="color: #9f6920; margin: 0 0 10px 0;">📞 Need Immediate Assistance?</h4>
          <p style="color: #462506; margin: 0;">
            <strong>Phone:</strong> +91 96858 47274<br>
            <strong>Email:</strong> connect@shubhhampers.com<br>
            <strong>Hours:</strong> Monday - Friday, 9 AM - 6 PM
          </p>
        </div>

        <p style="color: #462506; font-size: 16px; line-height: 1.6; margin-top: 25px;">
          Warm regards,<br>
          <strong style="color: #9f6920;">The Shubhhampers Team</strong><br>
          <em style="color: #666;">gifting the joy of every tyohaar</em>
        </p>
      </div>
    </div>
    `;

    // Send email to business
    await transporter.sendMail({
      from: `"Shubhhampers Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.BUSINESS_EMAIL || "connect@shubhhampers.com",
      subject: `🎁 New Contact Form Submission from ${name}`,
      html: businessEmailContent
    });

    // Send auto-reply to customer
    await transporter.sendMail({
      from: `"Shubhhampers" <${process.env.BUSINESS_EMAIL}>`,
      to: email,
      subject: "Thank you for contacting Shubhhampers! We'll be in touch soon 🎁",
      html: customerEmailContent
    });

    return NextResponse.json(
      {
        message: "Emails sent successfully",
        success: true
      },
      { status: 200 }
    );
  } catch (error) {
    // Log error in production environment
    if (process.env.NODE_ENV === "production") {
      // In production, you might want to use a proper logging service
      // console.error("Error sending email:", error);
    }
    return NextResponse.json(
      {
        error: "Failed to send email",
        details: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}
