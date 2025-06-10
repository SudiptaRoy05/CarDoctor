import LoginForm from "./components/LoginForm";

export default function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-12">
            <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 space-y-6">
                <h2 className="text-3xl font-extrabold text-center text-gray-900">Sign in to your account</h2>
                <p className="text-center text-gray-500 text-sm">Welcome back! Please enter your credentials.</p>

                <LoginForm />

                <p className="mt-6 text-center text-sm text-gray-600">
                    Don’t have an account?{' '}
                    <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                        Sign Up
                    </a>
                </p>
            </div>
        </div>
    );
}
