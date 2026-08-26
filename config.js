window.FV_CONFIG = {
  // GitHub Pages-safe public configuration. Never put private API secrets here.
  brand: 'FreshVeggies',
  city: 'Buldhana',
  state: 'Maharashtra',
  country: 'India',
  adminEmail: 'YOUR_ADMIN_GMAIL@gmail.com',
  adminWhatsApp: '91XXXXXXXXXX',
  deliveryFee: 30,
  freeDeliveryMin: 500,
  codLimit: 499.99,
  morningSlots: ['Early Morning · 6:00 AM–9:00 AM', 'Morning · 9:00 AM–12:00 PM'],

  // Optional Firebase Web App config. Add these values for cross-device orders/admin sync.
  firebase: {
    apiKey: '',
    authDomain: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: ''
  },

  // Optional EmailJS. Create a template that accepts order_id, customer_name,
  // phone, address, items, total and payment_status.
  emailjs: {
    publicKey: '',
    serviceId: '',
    templateId: ''
  },

  // Optional Razorpay test key. For real payments, use the Firebase Functions
  // integration described in README.md so secrets stay server-side.
  razorpayKeyId: '',
  razorpayTestMode: true,

  // Demo-only manager PIN. Replace with Firebase Authentication before production.
  managerDemoPin: '2580'
};
