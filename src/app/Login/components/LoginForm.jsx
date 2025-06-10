'use client';
import { signIn } from "next-auth/react"
import { useRouter } from "next/router";

export default function LoginForm() {
    const router = useRouter();
    const handleSubmit = async(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        const { email, password } = data;
        // console.log(data);
        try{
            await signIn('credentials', { email, password })
            router.push('/'); // Redirect to home page after successful login
        }catch (error) {
            console.error("Login failed:", error);
            // Handle login failure (e.g., show an error message)
        }
        

    }
    return (
        <div>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email address
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="input input-bordered w-full"
                        placeholder="you@example.com"
                    />
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                        Password
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="input input-bordered w-full"
                        placeholder="********"
                    />
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <input
                            id="remember_me"
                            name="remember_me"
                            type="checkbox"
                            className="checkbox"
                        />
                        <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                            Remember me
                        </label>
                    </div>

                    <div className="text-sm">
                        <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                            Forgot your password?
                        </a>
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        className="btn btn-primary w-full"
                    >
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    )
}
