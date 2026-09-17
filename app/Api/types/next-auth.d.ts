import NextAuth ,{User} from "next-auth"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface User{
    token:string
  }

  interface Session {
    user: {
      /** The user's postal address. */
      name:string,
      email:string,
      id:string,
      address: string
    }
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT extends User {
    /** OpenID ID Token */
    
      
  }
}