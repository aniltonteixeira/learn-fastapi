type HealthResponse = {
  status: string;
  service: string;
};

async function getBackendHealth(): Promise<HealthResponse | null> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

  try {
    const response = await fetch(`${apiUrl}/api/health`, {
      cache: "no-store"
    });

    if (!response.ok) {
      return null;
    }

    return (await response.json()) as HealthResponse;
  } catch {
    return null;
  }
}

export default async function Home() {
  const health = await getBackendHealth();

  return (
    <main>
      <h1>Next.js + FastAPI</h1>
      <p>Frontend: Next.js (App Router, TypeScript)</p>
      <p>Backend: FastAPI</p>
      <p>
        Endpoint testado: <code>GET /api/health</code>
      </p>
      <hr />
      <h2>Status do backend</h2>
      {health ? (
        <pre>{JSON.stringify(health, null, 2)}</pre>
      ) : (
        <p>Não foi possível conectar ao backend em <code>{process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"}</code>.</p>
      )}
    </main>
  );
}
