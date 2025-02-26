import nodemailer from 'nodemailer';
import { google } from 'googleapis';

// Configure OAuth2
const oauth2Client = new google.auth.OAuth2(
  process.env.GMAIL_CLIENT_ID,
  process.env.GMAIL_CLIENT_SECRET,
  'https://developers.google.com/oauthplayground'
);

oauth2Client.setCredentials({
  refresh_token: process.env.GMAIL_REFRESH_TOKEN
});

const createTransporter = async () => {
  try {
    const accessToken = await oauth2Client.getAccessToken();

    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'developerdeyy@gmail.com',
        clientId: process.env.GMAIL_CLIENT_ID,
        clientSecret: process.env.GMAIL_CLIENT_SECRET,
        refreshToken: process.env.GMAIL_REFRESH_TOKEN,
        accessToken: accessToken.token
      }
    });
  } catch (error) {
    console.error('Error creating transporter:', error);
    throw error;
  }
};

export const handler = async (event) => {
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

    // Create transporter with OAuth2
    const transporter = await createTransporter();

    // Send confirmation email
    await transporter.sendMail({
      from: '"Stunnas Tweaks" <developerdeyy@gmail.com>',
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
            If you have any questions, please don't hesitate to contact us through Discord or email us at developerdeyy@gmail.com
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