'use server'
import { LoginFormValues } from "@/app/Schema/loginSchema"
import { RegisterFormValues } from "@/app/Schema/registerSchema"

export async function submitForm(data: RegisterFormValues) {
  try {
    const { name, email, password, rePassword, phone } = data
    const res = await fetch('https://ecommerce.routemisr.com/api/v1/auth/signup', {
      method: 'POST',
      body: JSON.stringify({ name, email, password, rePassword, phone }),
      headers: { 'Content-Type': 'application/json' },
    })
    const payload = await res.json()
    if (!res.ok) {
      console.error('API error:', payload)
    }
    return res.ok
  } catch (error) {
    console.error('Error submitting form:', error)
    return false
  }
}

// Login
// export async function LoginSubmitForm(data: LoginFormValues) {
//   try {
//     const { email, password } = data
//     const res = await fetch('https://ecommerce.routemisr.com/api/v1/auth/signin', {
//       method: 'POST',
//       body: JSON.stringify({ email, password }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//     const payload = await res.json()
//     if (!res.ok) {
//       console.error('API error:', payload)
//     } else {
//       console.log('API response:', payload)
//     }
//     return res.ok
//   } catch (error) {
//     console.error('Error submitting form:', error)
//     return false
//   }
// }