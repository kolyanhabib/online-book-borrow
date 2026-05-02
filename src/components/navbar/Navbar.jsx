"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX, FiLogOut, FiUser } from "react-icons/fi";

const Navbar = () => {
  const { data } = authClient.useSession();
  const user = data?.user;

  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleSignOut = async () => {
    await authClient.signOut();
    router.push("/signin");
  };

  const isActive = (path) =>
    pathname === path
      ? "text-purple-600 font-semibold"
      : "text-gray-600 hover:text-purple-600 transition";

  return (
    <header className="border-b bg-white sticky top-0 z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        
        <Link href="/" className="text-2xl font-bold">
          <span className="text-slate-800">Book</span>
          <span className="text-purple-600">ify</span>
        </Link>

      
        <ul className="hidden md:flex items-center gap-6 text-base font-medium">
          <li>
            <Link href="/" className={isActive("/")}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/all-books" className={isActive("/all-books")}>
              All Books
            </Link>
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-4">
          {!user ? (
            <>
              <Button variant="outline">
                <Link
                  href="/signin"
                  className="text-base text-gray-600 hover:text-purple-600"
                >
                  Sign In
                </Link>
              </Button>
              <Button>
                <Link
                  href="/signup"
                  className="text-base  text-white rounded-lg"
                >
                  Sign Up
                </Link>
              </Button>
            </>
          ) : (
            <>
              <Link
                href="/profile"
                className="flex items-center gap-1 text-base font-medium text-gray-600 hover:text-purple-600"
              >
                <FiUser />
                Profile
              </Link>

              <span className="text-base font-medium text-gray-700">
                {user?.name}
              </span>

              <Button
                onClick={handleSignOut}
                size="sm"
                className="flex items-center gap-1 text-red-500 border border-red-200 hover:bg-red-500 hover:text-white"
                variant="bordered"
              >
                <FiLogOut />
                Logout
              </Button>
            </>
          )}
        </div>

        <button
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <FiMenu />
        </button>
      </nav>

      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-xl transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2 className="text-xl font-bold">
            <span className="text-slate-800">Book</span>
            <span className="text-purple-600">ify</span>
          </h2>
          <button onClick={() => setOpen(false)}>
            <FiX className="text-2xl cursor-pointer" />
          </button>
        </div>

        <div className="flex flex-col h-[calc(100%-64px)] px-6 py-6">
          <div className="flex flex-col gap-5 text-base font-medium">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className={isActive("/")}
            >
              Home
            </Link>

            <Link
              href="/all-books"
              onClick={() => setOpen(false)}
              className={isActive("/all-books")}
            >
              All Books
            </Link>

            {user && (
              <Link
                href="/profile"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 text-gray-600  hover:text-purple-600"
              >
                <FiUser />
                My Profile
              </Link>
            )}
          </div>

          <div className="mt-auto pt-6 border-t space-y-4">
            {!user ? (
              <>
                <Link
                  href="/signin"
                  onClick={() => setOpen(false)}
                  className="block text-center border py-2.5 rounded-lg hover:bg-purple-600 hover:text-white transition"
                >
                  Sign In
                </Link>

                <Link
                  href="/signup"
                  onClick={() => setOpen(false)}
                  className="block text-center bg-purple-600 text-white py-2.5 rounded-lg"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center font-semibold text-purple-600">
                    {user?.name?.charAt(0)}
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      {user?.name}
                    </p>
                    <p className="text-xs text-gray-500">Logged in</p>
                  </div>
                </div>

                <Button
                  onClick={handleSignOut}
                  className="w-full flex items-center justify-center gap-2 rounded-full py-2.5 text-red-500 border border-red-200 hover:bg-red-50"
                  variant="bordered"
                >
                  <FiLogOut />
                  Logout
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
