import { Handler } from '@netlify/functions';
import * as nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtpout.secureserver.net', // GoDaddy SMTP server
  port: 465,
  secure: true, // use SSL
  auth: {
    user: 'contact@strive2perfection.org',
    pass: process.env.EMAIL_PASSWORD
  }
});

const handler: Handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed'
    };
  }

  try {
    const { email, items } = JSON.parse(event.body || '{}');

    if (!email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Email is required' })
      };
    }

    // Send confirmation email
    await transporter.sendMail({
      from: 'contact@strive2perfection.org',
      to: email,
      subject: 'Order Confirmation - Stunnas Tweaks',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #333; text-align: center;">Thank You for Your Purchase!</h1>
          
          <p style="color: #666; font-size: 16px; line-height: 1.5;">
            Your order has been confirmed and is being processed. To receive your purchase:
          </p>

          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; font-size: 16px;">
              1. Join our Discord server: 
              <a href="https://discord.gg/PCDJ2Sc98D" style="color: #0066cc; text-decoration: none;">
                Click here to join
              </a>
            </p>
            <p style="margin: 10px 0 0 0; font-size: 16px;">
              2. Create a support ticket
            </p>
            <p style="margin: 10px 0 0 0; font-size: 16px;">
              3. Our team will assist you with your purchase
            </p>
          </div>

          <p style="color: #666; font-size: 16px; line-height: 1.5;">
            If you have any questions, please don't hesitate to contact us through Discord or email us at contact@strive2perfection.org
          </p>

          <div style="text-align: center; margin-top: 30px; color: #999; font-size: 14px;">
            <p>Stunnas Tweaks</p>
            <p>Thank you for choosing us!</p>
          </div>
        </div>
      `
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' })
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email' })
    };
  }
};

export { handler };