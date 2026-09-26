'use server'

import { getTokenFun } from "@/app/ulilities/getTokenData";
import { 
  ForgotPasswordReq, 
  VerifyResetCodeReq, 
  ResetPasswordReq, 
  UpdateUserDataReq, 
  ChangePasswordReq 
} from "@/app/api/types/AuthType";

const BASE_URL = "https://ecommerce.routemisr.com/api/v1";

// 1. Forgot Password
export async function forgotPassword(data: ForgotPasswordReq) {
  const res = await fetch(`${BASE_URL}/auth/forgotPasswords`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || "Failed to send reset code");
  }
  return await res.json();
}

// 2. Verify Reset Code
export async function verifyResetCode(data: VerifyResetCodeReq) {
  const res = await fetch(`${BASE_URL}/auth/verifyResetCode`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || "Invalid or expired code");
  }
  return await res.json();
}

// 3. Reset Password
export async function resetPassword(data: ResetPasswordReq) {
  const res = await fetch(`${BASE_URL}/auth/resetPassword`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || "Failed to reset password");
  }
  return await res.json();
}

// 4. Update Logged User Data
export async function updateUserData(data: UpdateUserDataReq) {
  const token = await getTokenFun();
  if (!token) throw new Error("Unauthorized");

  const res = await fetch(`${BASE_URL}/users/updateMe/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || "Failed to update profile");
  }
  return await res.json();
}

// 5. Change My Password (Profile)
export async function changeMyPassword(data: ChangePasswordReq) {
  const token = await getTokenFun();
  if (!token) throw new Error("Unauthorized");

  const res = await fetch(`${BASE_URL}/users/changeMyPassword`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || "Failed to change password");
  }
  return await res.json();
}