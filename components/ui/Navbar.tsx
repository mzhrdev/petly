import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2">
            <span className="text-2xl font-extrabold text-blue-600 tracking-tight">PETLY</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition">Home</Link>
            <Link href="/?filter=pet" className="text-gray-700 hover:text-blue-600 font-medium transition">Pets</Link>
            <Link href="/?filter=accessory" className="text-gray-700 hover:text-blue-600 font-medium transition">Accessories</Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            <Link 
              href="/login" 
              className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2 transition"
            >
              Log in
            </Link>
            <Link 
              href="/signup" 
              className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition shadow-sm"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}