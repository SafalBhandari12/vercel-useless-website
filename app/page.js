import InteractiveSection from "@/components/InteractiveSection";
import Link from "next/link";

export const metadata = {
  title: "Bored Web - Discover Quirky Digital Experiences",
  description:
    "Explore curated quirky web experiments that spark smiles and distract you from the ordinary. Embrace the wonderfully useless!",
  openGraph: {
    title: "Bored Web - Discover Quirky Digital Experiences",
    description:
      "Explore curated quirky web experiments that spark smiles and distract you from the ordinary. Embrace the wonderfully useless!",
    url: "https://feeling-bored.vercel.app",
    siteName: "Bored Web",
    images: [
      {
        url: "https://feeling-bored.vercel.app/og-image.jpg", // Replace with your actual OG image if available
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bored Web - Discover Quirky Digital Experiences",
    description:
      "Explore curated quirky web experiments that spark smiles and distract you from the ordinary. Embrace the wonderfully useless!",
    images: ["https://feeling-bored.vercel.app/twitter-image.jpg"], // Replace with your actual Twitter image if available
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://feeling-bored.vercel.app",
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center justify-center text-center px-4 overflow-hidden relative">
      {/* Static Content */}
      <div className="relative z-10 space-y-8">
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          <span className="block mb-2">Useless</span>
          <span className="block text-7xl font-extrabold">Websites</span>
        </h1>
        <h2 className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          Explore our curated collection of quirky digital experiences. Each
          click unveils a unique, whimsical web creation – perfect for sparking
          joy or satisfying curiosity.
        </h2>
        {/* New H2 tag with internal link */}
        <h2 className="text-3xl font-semibold mt-8">Discover More</h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Learn more about our mission on our{" "}
          <Link href="/about" className="underline text-blue-400">
            About page
          </Link>.
        </p>
      </div>

      {/* Interactive Section */}
      <InteractiveSection />

      {/* Footer */}
      <div className="absolute bottom-8 text-gray-400 text-sm">
        Curated with ❤️ | {` ${100 /* or sitesList.length */} `} experiences and
        counting
      </div>
    </div>
  );
}
