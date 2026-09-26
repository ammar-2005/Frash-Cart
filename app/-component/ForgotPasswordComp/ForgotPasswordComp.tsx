'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { forgotPassword, verifyResetCode, resetPassword } from '@/app/api/action/AuthAction/authAction';
import { toast } from '@/components/ui/toast';
import { EnvelopeIcon, KeyIcon, LockClosedIcon, CheckCircleIcon } from '@heroicons/react/24/solid';

export default function ForgotPasswordComp() {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2 | 3>(1);

  const [email, setEmail] = useState('');
  const [resetCode, setResetCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Step 1: Send Code Mutation
  const { mutate: handleForgotPassword, isPending: isSending } = useMutation({
    mutationFn: forgotPassword,
    onSuccess: () => {
      toast.add({ type: 'success', description: 'Reset code sent to your email' });
      setStep(2);
    },
    onError: (error: Error) => {
      toast.add({ type: 'error', description: error.message });
    },
  });

  // Step 2: Verify Code Mutation
  const { mutate: handleVerifyCode, isPending: isVerifying } = useMutation({
    mutationFn: verifyResetCode,
    onSuccess: () => {
      toast.add({ type: 'success', description: 'Code verified successfully' });
      setStep(3);
    },
    onError: (error: Error) => {
      toast.add({ type: 'error', description: error.message });
    },
  });

  // Step 3: Reset Password Mutation
  const { mutate: handleResetPassword, isPending: isResetting } = useMutation({
    mutationFn: resetPassword,
    onSuccess: () => {
      toast.add({ type: 'success', description: 'Password reset successfully. Please login.' });
      router.push('/login');
    },
    onError: (error: Error) => {
      toast.add({ type: 'error', description: error.message });
    },
  });

  const onSubmitStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return toast.add({ type: 'error', description: 'Please enter your email' });
    handleForgotPassword({ email });
  };

  const onSubmitStep2 = (e: React.FormEvent) => {
    e.preventDefault();
    if (!resetCode) return toast.add({ type: 'error', description: 'Please enter the reset code' });
    handleVerifyCode({ resetCode });
  };

  const onSubmitStep3 = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPassword || newPassword.length < 6) {
      return toast.add({ type: 'error', description: 'Password must be at least 6 characters' });
    }
    if (newPassword !== confirmPassword) {
      return toast.add({ type: 'error', description: 'Passwords do not match' });
    }
    handleResetPassword({ email, newPassword });
  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4 py-12">
      <div className="grid w-full max-w-4xl grid-cols-1 items-center gap-8 rounded-2xl bg-white p-6 shadow-xl md:grid-cols-2 md:p-10">
        
        {/* Left Side (Illustration Section) */}
        <div className="flex flex-col items-center justify-center rounded-xl bg-emerald-50/60 p-8 text-center">
          <div className="relative mb-6 flex items-center justify-center gap-2">
            <div className="rounded-full bg-white p-3 shadow-md">
              <EnvelopeIcon className="size-6 text-emerald-500" />
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-lg">
              <LockClosedIcon className="size-10 text-emerald-600" />
            </div>
            <div className="rounded-full bg-white p-3 shadow-md">
              <KeyIcon className="size-6 text-emerald-500" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Reset Your Password</h2>
          <p className="mt-2 text-xs text-slate-500">
            Don&apos;t worry, it happens to the best of us. We&apos;ll help you get back into your account in no time.
          </p>
          <div className="mt-6 flex items-center gap-4 text-xs text-slate-500">
            <span>• Email Verification</span>
            <span>• Secure Reset</span>
            <span>• Encrypted</span>
          </div>
        </div>

        {/* Right Side (Form Stepper) */}
        <div className="flex flex-col">
          <div className="mb-6 text-center">
            <span className="text-xl font-bold text-emerald-600">FreshCart</span>
            <h3 className="mt-2 text-xl font-bold text-slate-900">
              {step === 1 && 'Forgot Password?'}
              {step === 2 && 'Check Your Email'}
              {step === 3 && 'Create New Password'}
            </h3>
            <p className="mt-1 text-xs text-slate-500">
              {step === 1 && 'No worries, we will send you a reset code'}
              {step === 2 && `Enter the code sent to ${email}`}
              {step === 3 && 'Your new password must be different from previous passwords'}
            </p>

            {/* Stepper Indicator */}
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className={`flex size-7 items-center justify-center rounded-full text-xs font-semibold ${step >= 1 ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-600'}`}>
                {step > 1 ? <CheckCircleIcon className="size-5" /> : '1'}
              </div>
              <div className={`h-0.5 w-8 ${step >= 2 ? 'bg-emerald-600' : 'bg-slate-200'}`} />
              <div className={`flex size-7 items-center justify-center rounded-full text-xs font-semibold ${step >= 2 ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-600'}`}>
                {step > 2 ? <CheckCircleIcon className="size-5" /> : '2'}
              </div>
              <div className={`h-0.5 w-8 ${step >= 3 ? 'bg-emerald-600' : 'bg-slate-200'}`} />
              <div className={`flex size-7 items-center justify-center rounded-full text-xs font-semibold ${step === 3 ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-600'}`}>
                3
              </div>
            </div>
          </div>

          {/* STEP 1 FORM */}
          {step === 1 && (
            <form onSubmit={onSubmitStep1} className="space-y-4">
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-700">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-emerald-500"
                />
              </div>
              <button
                type="submit"
                disabled={isSending}
                className="w-full rounded-lg bg-emerald-600 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-60"
              >
                {isSending ? 'Sending...' : 'Send Reset Code'}
              </button>
            </form>
          )}

          {/* STEP 2 FORM */}
          {step === 2 && (
            <form onSubmit={onSubmitStep2} className="space-y-4">
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-700">Verification Code</label>
                <input
                  type="text"
                  value={resetCode}
                  onChange={(e) => setResetCode(e.target.value)}
                  placeholder="Enter reset code"
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-center text-sm font-semibold tracking-widest outline-none focus:border-emerald-500"
                />
              </div>
              <button
                type="submit"
                disabled={isVerifying}
                className="w-full rounded-lg bg-emerald-600 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-60"
              >
                {isVerifying ? 'Verifying...' : 'Verify Code'}
              </button>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-full text-center text-xs text-emerald-600 hover:underline"
              >
                Change email address
              </button>
            </form>
          )}

          {/* STEP 3 FORM */}
          {step === 3 && (
            <form onSubmit={onSubmitStep3} className="space-y-4">
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-700">New Password</label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new password"
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-emerald-500"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-700">Confirm Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm new password"
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-emerald-500"
                />
              </div>
              <button
                type="submit"
                disabled={isResetting}
                className="w-full rounded-lg bg-emerald-600 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-60"
              >
                {isResetting ? 'Resetting...' : 'Reset Password'}
              </button>
            </form>
          )}

          <div className="mt-6 text-center text-xs text-slate-500">
            Remember your password?{' '}
            <Link href="/login" className="font-semibold text-emerald-600 hover:underline">
              Sign In
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}