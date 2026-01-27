"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import Logo from "../../public/favicons/logo-transparent.png";

function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Register attempt with:", { fullName, email, password });
  };

  return (
    <main className="min-h-svh dark bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex-center">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-hover opacity-10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary opacity-10 rounded-full blur-3xl" />
      </div>

      <div className="w-full h-full flex-col flex-center gap-4 !layout-standard">
        <Image
          src={Logo}
          alt="Neural Rank"
          className="md:w-[180px] w-[140px] h-auto"
        />

        <div className="relative z-10 w-full md:max-w-md">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                  <User size={20} />
                </div>
                <input
                  type="text"
                  placeholder="Full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg pl-12 pr-4 py-3 text-slate-100 placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition"
                  required
                />
              </div>

              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                  <Mail size={20} />
                </div>
                <input
                  type="email"
                  placeholder="Business Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg pl-12 pr-4 py-3 text-slate-100 placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition"
                  required
                />
              </div>

              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                  <Lock size={20} />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg pl-12 pr-12 py-3 text-slate-100 placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-300 transition"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              <button
                type="submit"
                className="w-full bg-black hover:bg-black/80 text-white font-semibold py-3 px-4 rounded-lg transition transform hover:scale-105 active:scale-95 shadow-lg"
              >
                Continue with email
              </button>
            </form>

            <div className="mt-6 text-center text-slate-400">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-slate-100 underline hover:text-primary-hover transition"
              >
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default RegisterPage;
