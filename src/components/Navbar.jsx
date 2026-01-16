import { RefreshCcw,UserCircle2 } from "lucide-react";

export function Navbar(){

    return (
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg p-1">
                <RefreshCcw className="w-6 h-6 text-white" />
              </div>

              <span className="text-xl font-semibold text-gray-900">
                SkillSwap
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-1">
              <a
                href="#"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                Profile
              </a>
              <a
                href="#"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                Swap Requests
              </a>
              <button className="w-8 h-8 hover:bg-blue-200 rounded-full flex items-center justify-center  "><UserCircle2 className="w-5 h-5 text-black items-center "/></button>
            </nav>
            <button className="md:hidden px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
    );
}