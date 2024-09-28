"use client";

import React, { useState } from "react";
import { TransitionPanel } from "@/components/effects/transition-panel";

const faqData = [
  {
    title: "Basics",
    faqs: [
      {
        title: "What is web hosting?",
        content:
          "Web hosting is a service that allows organizations and individuals to post a website or web page onto the Internet. A web host, or web hosting service provider, is a business that provides the technologies and services needed for the website or webpage to be viewed on the Internet.",
      },
      {
        title: "How do I choose the right hosting plan?",
        content:
          "Choosing the right hosting plan depends on your specific needs. Consider factors such as the type of website you're building, expected traffic, required resources, and your budget. Our support team can help you select the best plan for your needs.",
      },
      {
        title: "Do you offer a money-back guarantee?",
        content:
          "Yes, we offer a 30-day money-back guarantee on all our hosting plans. If you're not satisfied with our services within the first 30 days, you can request a full refund.",
      },
    ],
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(0);

  const ITEMS = faqData;

  return (
    <div className="relative mx-auto max-w-6xl px-4 pb-20">
      <h2 className="py-12 text-center text-4xl font-bold">FAQs</h2>

      <div className="overflow-hidden">
        <TransitionPanel
          activeIndex={activeIndex}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          variants={{
            enter: { opacity: 0, y: -50, filter: "blur(4px)" },
            center: { opacity: 1, y: 0, filter: "blur(0px)" },
            exit: { opacity: 0, y: 50, filter: "blur(4px)" },
          }}
          className={"backdrop-blur-sm"}
        >
          {ITEMS.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border-2 border-dashed border-teal-950/40 bg-teal-950/20 py-2"
            >
              {item.faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`px-6 py-4 ${
                    index === item.faqs.length - 1
                      ? ""
                      : "border-b-2 border-dashed border-teal-950/40"
                  }`}
                >
                  <h3 className="bg-gradient-to-t from-sky-200 to-sky-800/90 bg-clip-text text-lg font-semibold leading-none text-transparent sm:text-xl">
                    {faq.title}
                  </h3>
                  <p className="text-zinc-500 dark:text-zinc-300">
                    {faq.content}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </TransitionPanel>
      </div>
    </div>
  );
}
