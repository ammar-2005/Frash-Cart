'use client';

import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import OrdersComp from '../-commponent/OrdersComp/OrdersComp';
import { getUserOrders } from '../api/action/OrderAction/getUserOrders';
import { Order } from '../api/types/OrderType';

export default function OrdersPage() {
  const { data: session, status } = useSession();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchOrders() {
      if (status !== 'authenticated' || !session?.user?.id) {
        setLoading(false);
        return;
      }

      try {
        const data = await getUserOrders(session.user.id);
        setOrders(data);
      } catch (err) {
        console.error('Error loading orders page:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchOrders();
  }, [session?.user?.id, status]);

  if (status === 'loading' || loading) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading your orders...</p>
      </div>
    );
  }

  if (status !== 'authenticated') {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Please sign in</h1>
        <p className="text-gray-600">You need to log in to view your orders.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-10xl px-4 py-6">
      <div className="relative h-40 overflow-hidden rounded-2xl sm:h-48">
        <div className="absolute inset-0 bg-linear-to-r from-emerald-600/90 via-emerald-500/70 to-emerald-400/40" />

        <div className="relative z-10 mx-auto flex h-full max-w-8xl flex-col justify-center px-6">
          <div className="mb-5 flex items-center gap-2 text-sm text-white/80">
            <a href="/" className="hover:text-white">Home</a>
            <span className="text-white/70">/</span>
            <span className="text-white">Orders</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white/20">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-6 text-white">
                <path d="M7 7h10v10H7z" />
                <path d="M9 7V5h6v2" />
                <path d="M8 12h8" />
              </svg>
            </div>

            <div className="flex flex-col">
              <h1 className="text-2xl font-extrabold text-white sm:text-3xl">My Orders</h1>
              <p className="text-sm text-white/85">Track and review all your recent purchases</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <OrdersComp orders={orders} />
      </div>
    </div>
  );
}