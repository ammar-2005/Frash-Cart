'use client'

import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { updateUserData, changeMyPassword } from '@/app/api/action/AuthAction/authAction';
import { toast } from '@/components/ui/toast';
import { UserIcon, Cog6ToothIcon, LockClosedIcon } from '@heroicons/react/24/outline';

export default function ProfileComp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [currentPassword, setCurrentPassword] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  // Mutation: Update Profile Info
  const { mutate: handleUpdateUser, isPending: isUpdatingUser } = useMutation({
    mutationFn: updateUserData,
    onSuccess: () => {
      toast.add({ type: 'success', description: 'Profile information updated successfully' });
    },
    onError: (err: Error) => {
      toast.add({ type: 'error', description: err.message });
    },
  });

  // Mutation: Change Password
  const { mutate: handleChangePass, isPending: isChangingPass } = useMutation({
    mutationFn: changeMyPassword,
    onSuccess: () => {
      toast.add({ type: 'success', description: 'Password changed successfully' });
      setCurrentPassword('');
      setPassword('');
      setRePassword('');
    },
    onError: (err: Error) => {
      toast.add({ type: 'error', description: err.message });
    },
  });

  const onUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      return toast.add({ type: 'error', description: 'Please fill in all profile fields' });
    }
    handleUpdateUser({ name, email, phone });
  };

  const onChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentPassword || !password || !rePassword) {
      return toast.add({ type: 'error', description: 'Please fill in all password fields' });
    }
    if (password !== rePassword) {
      return toast.add({ type: 'error', description: 'Passwords do not match' });
    }
    handleChangePass({ currentPassword, password, rePassword });
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
    

      <div className="grid grid-cols-1 gap-8 md:grid-cols-[220px_1fr]">
        {/* Sidebar Nav */}
        <div className="flex flex-col gap-2">
          <button className="flex items-center gap-3 rounded-lg bg-emerald-50 px-4 py-2.5 text-sm font-semibold text-emerald-700">
            <Cog6ToothIcon className="size-5" />
            Settings
          </button>
        </div>

        {/* Content Area */}
        <div className="space-y-8">
          
          {/* Form 1: Profile Information */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="rounded-lg bg-emerald-100 p-2 text-emerald-600">
                <UserIcon className="size-5" />
              </div>
              <div>
                <h2 className="text-base font-bold text-slate-800">Profile Information</h2>
                <p className="text-xs text-slate-500">Update your personal details</p>
              </div>
            </div>

            <form onSubmit={onUpdateProfile} className="space-y-4">
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-700">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-medium text-slate-700">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-medium text-slate-700">Phone Number</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="01xxxxxxxxx"
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-emerald-500"
                />
              </div>

              <button
                type="submit"
                disabled={isUpdatingUser}
                className="rounded-lg bg-emerald-600 px-6 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-60"
              >
                {isUpdatingUser ? 'Saving...' : 'Save Changes'}
              </button>
            </form>
          </div>

          {/* Form 2: Change Password */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="rounded-lg bg-amber-100 p-2 text-amber-600">
                <LockClosedIcon className="size-5" />
              </div>
              <div>
                <h2 className="text-base font-bold text-slate-800">Change Password</h2>
                <p className="text-xs text-slate-500">Update your account password</p>
              </div>
            </div>

            <form onSubmit={onChangePassword} className="space-y-4">
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-700">Current Password</label>
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="Enter your current password"
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-medium text-slate-700">New Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your new password"
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-emerald-500"
                />
                <span className="mt-1 block text-[10px] text-slate-400">Must be at least 6 characters</span>
              </div>

              <div>
                <label className="mb-1 block text-xs font-medium text-slate-700">Confirm New Password</label>
                <input
                  type="password"
                  value={rePassword}
                  onChange={(e) => setRePassword(e.target.value)}
                  placeholder="Confirm your new password"
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-emerald-500"
                />
              </div>

              <button
                type="submit"
                disabled={isChangingPass}
                className="rounded-lg bg-amber-600 px-6 py-2 text-sm font-semibold text-white transition hover:bg-amber-700 disabled:opacity-60"
              >
                {isChangingPass ? 'Changing...' : 'Change Password'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}