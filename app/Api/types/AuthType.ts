export interface ForgotPasswordReq {
  email: string;
}

export interface VerifyResetCodeReq {
  resetCode: string;
}

export interface ResetPasswordReq {
  email: string;
  newPassword: string;
}

export interface UpdateUserDataReq {
  name: string;
  email: string;
  phone: string;
}

export interface ChangePasswordReq {
  currentPassword: string;
  password: string;
  rePassword: string;
}

export interface AuthResponse {
  statusMsg?: string;
  message?: string;
  token?: string;
}