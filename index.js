const { createInvoice } = require('./invoice.js')

const invoice = {
  shipping: {
    name: 'pratik bhagat',
    address: 'Santacruz east, Mumbai, Maharashtra',
    city: 'Mumbai',
    state: 'Maharashtra',
    country: 'India',
    postal_code: 400029,
  },
  items: [
    {
      item: 'Kisan Ghee',
      description: 'hand made cow ghee',
      quantity: 1,
      amount: 1399,
    },
    {
      item: 'kisan  Ghee',
      description: 'hand made cow ghee',
      quantity: 2,
      amount: 2798,
    },
  ],
  subtotal: 4197,
  paid: 0,
  invoice_nr: 4562,
}

createInvoice(invoice, 'invoice.pdf')
