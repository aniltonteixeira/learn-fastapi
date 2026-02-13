"use client";

import { FormEvent, useState } from "react";

type LoginResponse = {
  message: string;
  email: string;
  password_length: string;
};

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus(null);

    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

    try {
      const response = await fetch(`${apiUrl}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
        throw new Error(`Falha no login (${response.status})`);
      }

      const data = (await response.json()) as LoginResponse;
      setStatus(`Login enviado: ${data.email}`);
    } catch (submitError) {
      setStatus(submitError instanceof Error ? submitError.message : "Erro inesperado");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="mt-6 space-y-4" onSubmit={onSubmit}>
      <div className="space-y-1">
        <label htmlFor="email" className="block text-base font-medium leading-none text-skybrand-900 md:text-[28px]">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="email@email.com"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="h-11 w-full rounded-md border border-skybrand-200 bg-white px-3 text-base text-skybrand-900 placeholder:text-skybrand-600/70 outline-none focus:border-skybrand-400 focus:ring-2 focus:ring-skybrand-300"
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="password" className="block text-base font-medium leading-none text-skybrand-900 md:text-[28px]">
          Senha
        </label>
        <input
          id="password"
          type="password"
          placeholder="****"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="h-11 w-full rounded-md border border-skybrand-200 bg-white px-3 text-base text-skybrand-900 placeholder:text-skybrand-600/70 outline-none focus:border-skybrand-400 focus:ring-2 focus:ring-skybrand-300"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="h-11 w-full rounded-md bg-skybrand-800 text-base font-semibold text-white transition hover:bg-skybrand-900 disabled:cursor-not-allowed disabled:opacity-75"
      >
        {loading ? "Entrando..." : "Login"}
      </button>

      <button type="button" className="mx-auto block text-base text-skybrand-800 hover:text-skybrand-900">
        Esqueci minha senha?
      </button>

      {status ? <p className="text-center text-sm text-skybrand-700">{status}</p> : null}
    </form>
  );
}
