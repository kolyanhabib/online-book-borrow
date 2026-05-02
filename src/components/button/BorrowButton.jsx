"use client";

import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const BorrowButton = ({ available }) => {
  const router = useRouter();

  const handleBorrow = async () => {
    try {
      const session = await authClient.getSession();

    
      if (!session?.data) {
        toast.error("Please sign in first");

        router.push(`/signin?redirect=${window.location.pathname}`);
        return;
      }

    
      if (available === 0) {
        toast.error("Book is out of stock");
        return;
      }

      
      toast.success("Book borrowed successfully");
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  return (
    <button
      onClick={handleBorrow}
      disabled={available === 0}
      className={`w-full md:w-auto px-6 py-2 rounded-lg transition cursor-pointer ${
        available > 0
          ? "bg-purple-600 text-white hover:bg-purple-700"
          : "bg-gray-400 text-white cursor-not-allowed"
      }`}
    >
      {available > 0 ? "Borrow This Book" : "Out of Stock"}
    </button>
  );
};

export default BorrowButton;
