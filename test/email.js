import { handler } from '../netlify/functions/payment-success.js';

// Create a test event
const testEvent = {
  httpMethod: 'POST',
  body: JSON.stringify({
    email: 'developerdeyy@gmail.com',
    items: [
      {
        id: 'test-item',
        name: 'Test Product',
        price: 29.99,
        description: 'This is a test product'
      }
    ]
  })
};

// Call the handler function
handler(testEvent)
  .then(response => {
    console.log('Response:', response);
    if (response.statusCode === 200) {
      console.log('✅ Test email sent successfully!');
    } else {
      console.error('❌ Failed to send test email:', response.body);
    }
  })
  .catch(error => {
    console.error('❌ Error:', error);
  });