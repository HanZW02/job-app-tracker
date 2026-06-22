import Link from "next/link";
import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";
import ImageHeroTabs from "../components/ImageHeroTabs";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col bg-white">
        {/* MAIN */}
        <main className="flex-1">
          {/* HERO SECTION */}
          <section className="container mx-auto px-4 py-32">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-black mb-6 text-6xl font-bold">
                Langkah terbaik untuk melacak lamaran pekerjaan mu{" "}
              </h1>
              <p className="text-muted-foreground mb-10 text-xl">
                Melacak, Mengorganisir, dan Mengelola pencarian pekerjaan mu
                pada satu tempat
              </p>
              <div className="flex flex-col items-center gap-4">
                <Link href="/sign-up">
                  <Button size="lg" className="h-12 px-8 tex-lg font-medium">
                    Mulai Gratis <ArrowRight className="ml-2" />
                  </Button>
                </Link>
                <p className="text-sm text-muted-foreground">
                  Gratis! Tanpa dipungut biaya
                </p>
              </div>
            </div>
          </section>
          {/* HERO IMAGES SECTION */}
          <ImageHeroTabs />
        </main>
      </div>
    </>
  );
}
