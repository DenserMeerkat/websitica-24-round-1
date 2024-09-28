"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { ThemeProvider } from "next-themes";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  );
}
