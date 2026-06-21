"use client";
import { signIn, signUp } from "@/lib/auth-client";

export default function AuthForm() {
  const handleSignUp = async () => {
    await signUp.email({
      email: "user@example.com",
      password: "password123",
      name: "Jan Kowalski",
    });
  };

  const handleSignIn = async () => {
    await signIn.email({
      email: "user@example.com",
      password: "password123",
    });
  };

  return (
    <div>
      <button onClick={handleSignUp}>Zarejestruj się</button>
      <button onClick={handleSignIn}>Zaloguj się</button>
    </div>
  );
}
