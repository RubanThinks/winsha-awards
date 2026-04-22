"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Trophy, Mail, Lock, ArrowRight } from "lucide-react";
import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/admin/dashboard");
    } catch (err: any) {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#030303] px-6">
      <div className="absolute inset-0 overflow-hidden">
        <div className="premium-blur top-[-20%] right-[-10%] w-[60%] h-[60%] bg-gold/5" />
        <div className="premium-blur bottom-[-20%] left-[-10%] w-[60%] h-[60%] bg-purple-glow/10" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card w-full max-w-md p-10 relative z-10"
      >
        <div className="flex flex-col items-center mb-10">
          <div className="w-16 h-16 bg-gold rounded-2xl flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(212,175,55,0.4)]">
            <Trophy className="text-[#030303] w-8 h-8" />
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Portal Entry</h1>
          <p className="text-white/60 text-sm mt-2">Winsha Awards Administration</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-gold/80 ml-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-gold/50 transition-colors"
                placeholder="admin@winsha.com"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-gold/80 ml-1">Secret Key</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-gold/50 transition-colors"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          {error && <p className="text-red-400 text-sm text-center">{error}</p>}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-4 bg-gold text-[#030303] font-bold rounded-xl flex items-center justify-center space-x-2 shadow-[0_0_20px_rgba(212,175,55,0.2)]"
          >
            <span>Authenticate</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </form>

        <p className="mt-8 text-center text-white/40 text-xs">
          Authorized personnel only. All access attempts are logged.
        </p>
      </motion.div>
    </div>
  );
};

export default LoginPage;
