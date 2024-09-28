import React from "react";
import ThemeButtons from "../header/theme-switcher";

const Footer = () => {
  return (
    <footer className="border-t bg-gradient-to-b from-primary/10 dark:border-muted dark:from-muted/30">
      <div className="max-w-8xl mx-auto flex items-end justify-between px-4 pb-6 pt-4">
        <div className="flex flex-col gap-2 dark:opacity-60 md:gap-3">
          <span className="text-xs font-medium tracking-wider dark:font-normal sm:text-sm">
            &copy; 2024&nbsp;&nbsp;<span className="text-primary">Host</span>
            Pro
          </span>
        </div>
        {/* <ThemeButtons /> */}
      </div>
    </footer>
  );
};

export default Footer;
