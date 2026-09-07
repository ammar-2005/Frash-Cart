'use server'
import { LoginFormValues } from "@/app/Schema/loginSchema"
import { RegisterFormValues } from "@/app/Schema/registerSchema"

 export async function submitForm(data: RegisterFormValues) {
  try {
    const res = await fetch('https://ecommerce.routemisr.com/api/v1/auth/signup', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const payload = await res.json()
    console.log('API response:', payload)
    return res.ok
  } catch (error) {
    console.error('Error submitting form:', error)
    return false
  }
}

 export async function LoginSubmitForm(data: LoginFormValues) {
    try{
       const res = await fetch('https://ecommerce.routemisr.com/api/v1/auth/login', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
     const payload = await res.json()
     console.log('API response:', payload)
     return res.ok
    }catch(error){
      console.error('Error submitting form:', error)
      return false
    }
   

  }
  
