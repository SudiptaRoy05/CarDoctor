import Link from "next/link";
import RegisterForm from "./components/RegisterForm";

export default function Register() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-12">
            <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 space-y-6">
                <h2 className="text-3xl font-extrabold text-center text-gray-900">Create your account</h2>
                <p className="text-center text-gray-500 text-sm">Join us! It takes only a few steps.</p>
                <RegisterForm />
                <p className="mt-6 text-center text-sm text-gray-600">
                    Already have an account?{' '}
                    <Link href="/Login" className="font-medium text-purple-600 hover:text-purple-500">
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    );
}
