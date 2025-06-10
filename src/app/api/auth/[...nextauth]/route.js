import { loginUser } from "@/app/actions/auth/loginUser";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",

            credentials: {
                email: { label: "email", type: "text", placeholder: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                console.log(credentials)

                const user = await loginUser(credentials)
                console.log(user)

                if (user) {
                    // Any object returned will be saved in `user` property of the JWT
                    return user
                } else {
                    // If you return null then an error will be displayed advising the user to check their details.
                    return null

                    // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                }
            }
        })
    ],
    pages: {
        signIn: '/Login',
    }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }