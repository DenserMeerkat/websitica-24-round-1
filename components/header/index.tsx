import React, { Suspense } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LoadingSpinner } from "../ui/loading-spinner";
import ThemeButtons from "./theme-switcher";
import AnimatedBackground from "@/components/effects/animated-bg";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-gradient-to-b from-primary/20 to-primary/10 backdrop-blur-md dark:border-muted dark:from-muted/50 dark:to-muted/30">
      <div className="max-w-8xl mx-auto flex items-center justify-between gap-4 px-4 pb-3 pt-3">
        <Link
          href="/?auth=signin"
          className="text-2xl font-semibold tracking-widest"
        >
          <span className="text-primary">Host</span>Pro
        </Link>
        <MainNav />
        <Suspense
          fallback={
            <Button variant={"secondary"}>
              <LoadingSpinner />
            </Button>
          }
        >
          <ThemeButtons />
        </Suspense>
      </div>
    </header>
  );
};

export default Header;

const MainNav = () => {
  const TABS = [
    "About",
    "Sponsors",
    "Prizes",
    "Tracks",
    "Timeline",
    "FAQs",
    "Contact",
  ];
  return (
    <nav className="flex items-center gap-0.5 lg:gap-1">
      <AnimatedBackground
        className="/10 rounded-lg bg-primary/10 dark:bg-primary"
        transition={{
          type: "spring",
          bounce: 0.2,
          duration: 0.3,
        }}
        enableHover
        defaultValue={undefined}
        onValueChange={undefined}
      >
        {TABS.map((tab, index) => (
          <Link
            key={index}
            data-id={tab}
            href={`/#${tab.toLowerCase()}`}
            className="px-2 py-1"
          >
            {tab}
          </Link>
        ))}
      </AnimatedBackground>
    </nav>
  );
};
