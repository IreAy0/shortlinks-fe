import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full py-16 px-6">
      {/* Footer content */}
      <div className="z-10 max-w-4xl mx-auto">
        {/* Main Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mb-6">
          <Link
            to="/product"
            className="text-gray-900 hover:text-gray-600 transition-colors font-medium"
          >
            Product
          </Link>
          <Link
            to="/about"
            className="text-gray-900 hover:text-gray-600 transition-colors font-medium"
          >
            About Us
          </Link>
          <Link
            to="/pricing"
            className="text-gray-900 hover:text-gray-600 transition-colors font-medium"
          >
            Pricing
          </Link>
          <Link
            to="/faq"
            className="text-gray-900 hover:text-gray-600 transition-colors font-medium"
          >
            FAQ
          </Link>
          <Link
            to="/contact"
            className="text-gray-900 hover:text-gray-600 transition-colors font-medium"
          >
            Contact
          </Link>
          <Link
            to="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 hover:text-gray-600 transition-colors font-medium inline-flex items-center gap-1"
          >
            Xwitter
            <ExternalLink className="w-3 h-3" />
          </Link>
          <Link
            to="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 hover:text-gray-600 transition-colors font-medium inline-flex items-center gap-1"
          >
            LinkedIn
            <ExternalLink className="w-3 h-3" />
          </Link>
        </div>
      </div>

      {/* Large background text */}
      {/* <div className="flex items-center justify-center overflow-hidden">
        <div className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-bold select-none pointer-events-none leading-none bg-gradient-to-br from-primary/30 to-primary/5 bg-clip-text text-transparent opacity-60 tracking-tighter">
          COMPANY
        </div>
      </div> */}
    </footer>
  );
}
