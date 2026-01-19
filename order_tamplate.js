context: {
  name: name || "User",
  BRAND_NAME,
  BRAND_ADDRESS,
  year: new Date().getFullYear(),
  order: {
    id: orderId,
    date: orderDateText,              // e.g. "19 Jan 2026, 4:45 PM"
    status: orderStatusText,          // e.g. "Pending"
    payment_method: paymentMethodText,// e.g. "Cash on Delivery"
    shipping_address: shippingAddressText,
    track_url: `${SHOP_URL}/orders/${orderId}`, // or tracking URL
    subtotal: "BDT 1,200",
    shipping_fee: "BDT 60",
    discount: "BDT 100",              // optional
    total: "BDT 1,160",
    items: [
      { name: "Combo-1", variant: "Red Bag + Lip Oil", sku: "CB-001", qty: 1, price: "BDT 540", subtotal: "BDT 540" },
      { name: "Hijab", variant: "Black", sku: "HJ-9", qty: 2, price: "BDT 250", subtotal: "BDT 500" }
    ]
  }
}
