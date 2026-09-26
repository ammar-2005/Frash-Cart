'use client';

import React from 'react';
import Image from 'next/image';
import type { Order } from '../../api/types/OrderType';

interface OrdersCompProps {
  orders: Order[];
}

export default function OrdersComp({ orders }: OrdersCompProps) {
  if (!orders || orders.length === 0) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold text-gray-700">No orders found</h2>
        <p className="text-gray-500 mt-2">You haven't placed any orders yet.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {orders.map((order) => (
        <div key={order._id} className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
          {/* Header info */}
          <div className="flex flex-wrap justify-between items-center border-b pb-4 mb-4 gap-4">
            <div>
              <p className="text-sm text-gray-500">Order ID: <span className="font-semibold text-gray-800">#{order.id}</span></p>
              <p className="text-xs text-gray-400">{new Date(order.createdAt).toLocaleDateString()}</p>
            </div>
            <div className="flex gap-2">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${order.isPaid ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                {order.isPaid ? 'Paid' : 'Unpaid'}
              </span>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${order.isDelivered ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'}`}>
                {order.isDelivered ? 'Delivered' : 'Processing'}
              </span>
            </div>
          </div>

          {/* Cart Items */}
          <div className="divide-y">
            {order.cartItems.map((item) => (
              <div key={item._id} className="py-3 flex items-center gap-4">
                <div className="relative w-16 h-16 shrink-0">
                  <Image
                    src={item.product.imageCover}
                    alt={item.product.title}
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-gray-800 line-clamp-1">{item.product.title}</h4>
                  <p className="text-xs text-gray-500">Qty: {item.count} × {item.price} EGP</p>
                </div>
                <div className="text-sm font-bold text-gray-800">
                  {item.count * item.price} EGP
                </div>
              </div>
            ))}
          </div>

          {/* Footer info */}
          <div className="border-t pt-4 mt-4 flex justify-between items-center text-sm">
            <div>
              <p className="text-gray-600">Payment: <span className="font-semibold uppercase">{order.paymentMethodType}</span></p>
            </div>
            <div className="text-right">
              <p className="text-gray-500 text-xs">Total Amount</p>
              <p className="text-lg font-bold text-emerald-600">{order.totalOrderPrice} EGP</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}