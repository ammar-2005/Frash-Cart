import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { email } from 'zod';
import { jwtDecode } from "jwt-decode";

export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: 'Login',
      credentials: {
        // input info
        email: { label: 'Email', type: 'email', placeholder: 'Enter Your Email' },
        password: { label: 'password', type: 'password', placeholder: 'Enter Your password' },
      },
    //   call api login and navigate to home if login (success) else to errorpage 
     async authorize(credentials) {
  try {
    const res = await fetch('https://ecommerce.routemisr.com/api/v1/auth/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: credentials?.email,
        password: credentials?.password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const payload = await res.json()

    if (res.ok && payload.user) {
      const userData: { id: string } = jwtDecode(payload.token)
      return {
        id: userData.id,
        email: payload.user.email,
        name: payload.user.name,
        token: payload.token,
      }
    }

    return null
  } catch (error) {
    console.error('authorize error:', error)
    return null
  }
},
    }),
  ],
  // after success login
  callbacks:{
    jwt({token , user}){
      if(user){
        token.id=user.id
      token.token=user.token
      }
      return token
    },
    session({session , token}){
      if(token){
        session.user.id=token.id

      }

    return session
    }

  },
  pages:{
    signIn:'/login'
  }
};