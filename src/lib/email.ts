import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init("1MhTwOKQFm4_5iJjU");

const DISCORD_INVITE = 'https://discord.gg/PCDJ2Sc98D';

interface SendEmailParams {
  orderId: string;
  productName: string;
  customerEmail: string;
  totalAmount: string;
  discordInvite?: string;
}

export const sendPurchaseConfirmation = async ({
  orderId,
  productName,
  customerEmail,
  totalAmount,
  discordInvite = DISCORD_INVITE
}: SendEmailParams) => {
  try {
    const response = await emailjs.send(
      "service_2v7bg1l",
      "template_m7g1vos",
      {
        order_id: orderId,
        product_name: productName,
        total_amount: totalAmount,
        to_name: customerEmail.split('@')[0], // Use part before @ as name
        to_email: customerEmail, // This is the recipient's email
        reply_to: 'support@stunnastweaks.com',
        discord_invite: discordInvite,
        // Additional template variables for styling
        company_name: 'Stunnas Tweaks',
        company_logo: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=200&h=200&fit=crop',
        accent_color: '#000000',
        background_color: '#ffffff',
        text_color: '#1a1a1a',
        footer_text: '© 2025 Stunnas Tweaks. All rights reserved.',
        support_email: 'support@stunnastweaks.com'
      }
    );
    
    return response;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};