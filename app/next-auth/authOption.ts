import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { email } from 'zod';

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
        const res = await fetch('https://ecommerce.routemisr.com/api/v1/auth/signin', {
          method: 'POST',
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const payload = await res.json();

        if (res.ok && payload.user) {
          return payload.user;
        }
        return{
            id:'',
            email:payload.user.email,
            name:payload.user.name,
            token:payload.token,
        }
      },
    }),
  ],
  pages:{
    signIn:'/login'
  }
};