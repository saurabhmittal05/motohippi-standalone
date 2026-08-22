import React from 'react';
import { LegalLayout } from '@/components/layout/LegalLayout';

export default function ShippingPolicy() {
  return (
    <LegalLayout
      title="Shipping Policy"
      subtitle="Information regarding order dispatch, shipping timelines, courier partners, and delivery fees."
    >
      <div className="space-y-4">
        <p>
          The orders for the user are shipped through registered domestic courier companies and/or speed post only. Orders are shipped within 10 days from the date of the order and/or payment or as per the delivery date agreed at the time of order confirmation and delivering of the shipment, subject to courier company / post office norms. Platform Owner shall not be liable for any delay in delivery by the courier company / postal authority. Delivery of all orders will be made to the address provided by the buyer at the time of purchase. Delivery of our services will be confirmed on your email ID as specified at the time of registration. If there are any shipping cost(s) levied by the seller or the Platform Owner (as the case be), the same is not refundable.
        </p>
      </div>
    </LegalLayout>
  );
}
