import { LoginForm } from "@/components/login-form";

export default function LoginPage() {
  // Substitua esses arquivos em frontend/public/login sem precisar alterar JSX.
  const brandLogoPath = "/login/logo.svg";
  const heroImagePath = "/login/hero.svg";

  return (
    <main className="min-h-screen bg-skybrand-50 p-4 md:p-8">
      <section className="mx-auto flex min-h-[82vh] max-w-[1060px] items-center justify-center">
        <div className="w-full max-w-[860px] rounded border border-skybrand-200 bg-white shadow-card">
          <div className="grid min-h-[490px] grid-cols-1 lg:grid-cols-2">
            <div className="p-6 md:p-10">
              <img
                src={brandLogoPath}
                alt="Logo"
                className="mx-auto h-auto w-full max-w-[240px] object-contain"
              />

              <h1 className="mt-7 max-w-[310px] text-3xl font-semibold leading-tight text-skybrand-600">
                Emissão inteligente de NFS-e.
              </h1>

              <LoginForm />
            </div>

            <div className="hidden border-l border-skybrand-200 bg-skybrand-50/40 p-5 lg:flex lg:items-center lg:justify-center">
              <img
                src={heroImagePath}
                alt="Ilustracao login"
                className="h-auto w-full max-w-[370px] object-contain"
              />
            </div>
          </div>

          <footer className="pb-5 text-center text-xl font-medium text-skybrand-800">
            Growth Solucoes Digitais
          </footer>
        </div>
      </section>
    </main>
  );
}
