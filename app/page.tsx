import Image from "next/image";

export default function Home() {
  return (
    <div className=" items-center justify-center flex min-h-screen">
      <Image
        src="/ConnectPhone-row_color.png"
        alt="Logo"
        width={250}
        height={150}
      />

      {/* In Development Indicator */}
      <div className="fixed bottom-4 right-4 flex items-center gap-2 bg-gray-900/70 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg border border-gray-700/50">
        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
        <span className="text-xs text-gray-400 font-medium">
          In development
        </span>
      </div>
    </div>
  );
}
