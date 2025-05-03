"use client";
import { useContext } from "react";
import { Context } from "@/Context/Context";
import Link from "next/link";

const UserMenu = () => {
  const { user, handleLogout } = useContext(Context);
  const name = user?.data?.name?.replace(/ .*/, "");

  return (
    <div className="flex items-center gap-4">
      {user ? (
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-700">Hi, {name || "User"}</span>
          <button
            onClick={handleLogout}
            className="text-sm text-gray-700 hover:text-gray-900"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <Link
            href="/loginpage"
            className="text-sm text-gray-700 hover:text-gray-900"
          >
            Login
          </Link>
          <Link
            href="/signupPage"
            className="text-sm text-gray-700 hover:text-gray-900"
          >
            Signup
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
