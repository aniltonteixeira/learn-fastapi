import { NextRequest, NextResponse } from "next/server";

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:8000";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as { email?: string; password?: string };

    if (!body.email || !body.password) {
      return NextResponse.json(
        { message: "Campos obrigatorios ausentes." },
        { status: 400 }
      );
    }

    const response = await fetch(`${BACKEND_URL}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body),
      cache: "no-store"
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { message: "Falha na autenticacao." },
        { status: response.status }
      );
    }

    return NextResponse.json(data, {
      status: 200,
      headers: {
        "Cache-Control": "no-store"
      }
    });
  } catch {
    return NextResponse.json(
      { message: "Erro interno ao processar login." },
      { status: 500 }
    );
  }
}
