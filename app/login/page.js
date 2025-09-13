import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] bg-surface-light dark:bg-surface-dark">
      <LoginForm />
    </div>
  );
}
