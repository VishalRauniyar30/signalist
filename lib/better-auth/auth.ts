// import { betterAuth } from "better-auth"
// import { mongodbAdapter } from "better-auth/adapters/mongodb"
// import { nextCookies } from "better-auth/next-js"

// import { connectDB } from "@/database/mongoose"

// let authInstance: ReturnType<typeof betterAuth> | null = null

// const better_auth_secret = process.env.BETTER_AUTH_SECRET
// const better_auth_url = process.env.BETTER_AUTH_URL

// if(!better_auth_secret || !better_auth_url) {
//     throw new Error('better auth secret and URL both required')
// }

// export const getAuth = async () => {
//     if(authInstance) return authInstance

//     const mongoose = await connectDB()
//     const db = mongoose.connection.db

//     if(!db) throw new Error('MongoDB connection not found')

//     authInstance = betterAuth({
//         database: mongodbAdapter(db as any),
//         secret: better_auth_secret,
//         baseURL: better_auth_url,
//         emailAndPassword: {
//             enabled: true,
//             disableSignUp: false,
//             requireEmailVerification: false,
//             minPasswordLength: 8,
//             maxPasswordLength: 128,
//             autoSignIn: true
//         },
//         plugins: [nextCookies()]
//     })

//     return authInstance
// }

// export const auth = await getAuth()
import { dash } from "@better-auth/infra";
import { betterAuth } from "better-auth";

export const auth = betterAuth({
    // ... your existing config
    plugins: [
        // ... other plugins
        dash()
    ]
})