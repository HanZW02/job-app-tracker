import { Briefcase } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="container mx-auto flex h-16 items-center px-4 justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-semibold text-primary"
        >
          <Briefcase />
          InpoLoker
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/sign-in">
            <Button variant="ghost" className="text-gray-700 hover:text-black">
              Masuk
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button
              variant="outline"
              className="bg-primary hover:bg-primary/90 text-white ml-4"
            >
              Daftar Gratis
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
