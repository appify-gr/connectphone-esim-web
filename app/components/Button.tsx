import { ArrowRight } from "lucide-react";
import Link from "next/link";

//---------------------------------------------------------------

const Button = ({ href, title }: { href: string; title: string }) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="relative inline-flex items-center gap-2 px-4 py-2 border border-gray-700 hover:border-blue-400 text-gray-50 hover:text-blue-400 transition-colors text-sm group overflow-hidden"
    >
      {title}
      <ArrowRight
        size={14}
        className="text-gray-400 group-hover:text-blue-400 group-hover:translate-x-4 group-hover:opacity-0 group-hover:scale-125 transition-all duration-600"
      />
      <ArrowRight
        size={14}
        className="absolute right-3 text-blue-400 -translate-x-4 opacity-0 scale-75 group-hover:translate-x-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-600"
      />
    </Link>
  );
};

export default Button;
