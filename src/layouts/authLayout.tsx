import { Label } from '@/components/ui/label'
import { Rocket } from 'lucide-react'
import React, { Suspense, useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

function AuthLayout() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

   useEffect(() => {
    if (token) {
      navigate("/dashboard", { replace: true });
    }
  }, [token, navigate]);

  return (
     <div className="relative flex min-h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <Link to="/" className="flex items-center gap-1">
            <Rocket size={32} strokeWidth={2.7} />
            <span className="text-xl font-bold">ACME</span>
          </Link>
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
               &ldquo;This URL shortener has completely changed the way I share and manage links. Creating short links and QR codes is effortless, and the analytics help me understand my audience better. The platform is intuitive, reliable, and has become an essential tool for my daily workflow.&rdquo;

            </p>
            <footer className="text-sm">Hasan Afzal</footer>
          </blockquote>
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default AuthLayout