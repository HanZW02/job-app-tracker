"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";

export default function ImageHeroTabs() {
  const [activeTab, setActiveTab] = useState("Kelola Lamaran");

  return (
    <>
      {/* HERO IMAGES SECTION */}
      <section className="border-t bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl text-center">
            {/* Tabs */}
            <div className="flex gap-2 justify-center mb-8">
              <Button
                onClick={() => setActiveTab("Kelola Lamaran")}
                className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors duration-300 ${activeTab === "Kelola Lamaran" ? "bg-primary" : "bg-gray-100 text-gray-700 hover:bg-gray-200"} `}
              >
                Kelola Lamaran
              </Button>
              <Button
                onClick={() => setActiveTab("Dapatkan Lamaran")}
                className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors duration-300 ${activeTab === "Dapatkan Lamaran" ? "bg-primary" : "bg-gray-100 text-gray-700 hover:bg-gray-200"} `}
              >
                Dapatkan Lamaran
              </Button>
              <Button
                onClick={() => setActiveTab("Papan Kelola")}
                className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors duration-300 ${activeTab === "Papan Kelola" ? "bg-primary" : "bg-gray-100 text-gray-700 hover:bg-gray-200"} `}
              >
                Papan Kelola
              </Button>
            </div>

            <div className="relative mx-auto max-w-5xl overflow-hidden rounded-lg border border-gray-200 shadow-xl">
              {activeTab === "Kelola Lamaran" && (
                <Image
                  src="/hero-images/hero1.png"
                  alt="Kelola Lamaran"
                  width={1200}
                  height={800}
                />
              )}
              {activeTab === "Dapatkan Lamaran" && (
                <Image
                  src="/hero-images/hero2.png"
                  alt="Dapatkan Lamaran"
                  width={1200}
                  height={800}
                />
              )}
              {activeTab === "Papan Kelola" && (
                <Image
                  src="/hero-images/hero3.png"
                  alt="Papan Kelola"
                  width={1200}
                  height={800}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
