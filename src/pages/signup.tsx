import { useState } from "react";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { useRegister } from "@/store/api/auth";
import { toast } from "sonner";
import axios from "axios";

const Google = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path
      fill="#EA4335"
      d="M5.27 9.76A7.08 7.08 0 0 1 16.42 6.5L19.9 3A11.97 11.97 0 0 0 1.24 6.65z"
    ></path>
    <path
      fill="#34A853"
      d="M16.04 18.01A7.4 7.4 0 0 1 12 19.1a7.08 7.08 0 0 1-6.72-4.82l-4.04 3.06A11.96 11.96 0 0 0 12 24a11.4 11.4 0 0 0 7.83-3z"
    ></path>
    <path
      fill="#4A90E2"
      d="M19.83 21c2.2-2.05 3.62-5.1 3.62-9 0-.7-.1-1.47-.27-2.18H12v4.63h6.44a5.4 5.4 0 0 1-2.4 3.56l3.8 2.99Z"
    ></path>
    <path
      fill="#FBBC05"
      d="M5.28 14.27a7.12 7.12 0 0 1-.01-4.5L1.24 6.64A11.9 11.9 0 0 0 0 12c0 1.92.44 3.73 1.24 5.33z"
    ></path>
  </svg>
);

function validatePassword(password: string) {
  if (!password) return "Password is required.";
  if (password.length < 6) return "Password must be at least 6 characters.";
  if (!/[A-Z]/.test(password)) return "Password must contain an uppercase letter.";
  if (!/[a-z]/.test(password)) return "Password must contain a lowercase letter.";
  if (!/[0-9]/.test(password)) return "Password must contain a number.";
  return "";
}

export default function Signup() {
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [passwordError, setPasswordError] = useState("");
  const [confirmError, setConfirmError] = useState("");
  const { mutate: submitRequest } = useRegister();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (e.target.name === "password") {
      setPasswordError(validatePassword(e.target.value));
    }
    if (e.target.name === "confirm") {
      setConfirmError(
        e.target.value !== form.password ? "Passwords do not match." : ""
      );
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const pwdError = validatePassword(form.password);
    setPasswordError(pwdError);
    setConfirmError(
      form.confirm !== form.password ? "Passwords do not match." : ""
    );
    if (pwdError || form.confirm !== form.password) return;
    const body = {
      name: form.name,
      email: form.email,
      password: form.password,
    }
     submitRequest(body, {
      onSuccess: (data) => {
        if (data?.status == 201) {
         console.log('data', data)
        }
      },
      onError: (error) => {
        // console.log(error);
        //  if (error?.status == 401) {
        //    toast.error(error?.response?.data?.message || ' Invalid credentials', {position: 'top-center'})
        // }
         if (axios.isAxiosError(error)) {
            if (error.response?.status === 401) {
              toast.error(error.response.data?.message || "Invalid credentials", {
                position: "top-center",
              });
            }
          } else {
            toast.error("Something went wrong", { position: "top-center" });
          }
      },
    });
  };



  return (
    <div className="p-6 lg:p-8">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[450px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Create your account
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your details to sign up for a new account
          </p>
        </div>
        <Suspense>
          <div className="grid gap-6">
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid gap-4">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <Label htmlFor="email">Email address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="johndoe@mail.com"
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    autoComplete="new-password"
                    value={form.password}
                    onChange={handleChange}
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground"
                    tabIndex={-1}
                    onClick={() => setShowPassword((v) => !v)}
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
                {passwordError && (
                  <span className="text-xs text-red-600">{passwordError}</span>
                )}
                <Label htmlFor="confirm">Confirm Password</Label>
                <div className="relative">
                  <Input
                    id="confirm"
                    name="confirm"
                    type={showConfirm ? "text" : "password"}
                    placeholder="Confirm your password"
                    autoComplete="new-password"
                    value={form.confirm}
                    onChange={handleChange}
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground"
                    tabIndex={-1}
                    onClick={() => setShowConfirm((v) => !v)}
                  >
                    {showConfirm ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
                {confirmError && (
                  <span className="text-xs text-red-600">{confirmError}</span>
                )}
                <Button type="submit" className="w-full">
                  Sign Up
                </Button>
              </div>
            </form>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            <Button variant="outline" className="w-full">
              <Google className="mr-2 size-5" />
              Sign Up with Google
            </Button>
          </div>
        </Suspense>
        <p className="px-8 text-center text-sm text-muted-foreground">
          By clicking continue, you agree to our{" "}
          <Link
            to="/terms"
            className="underline underline-offset-4 hover:text-primary"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            to="/privacy"
            className="underline underline-offset-4 hover:text-primary"
          >
            Privacy Policy
          </Link>
          .
        </p>
        <p className="px-8 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link
            to="/login"
            className="underline underline-offset-4 hover:text-primary"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}