import { ReactNode } from "react";
import { Navbar, Footer } from "@/components/common";
import { $ } from "@/libs/utils";

export default function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={$("bg-white dark:bg-dark min-h-screen ", className)}>
      <Navbar />
      <main className="flex flex-col mx-auto max-w-6xl justify-center px-4 relative pt-24">
        <div className="z-10">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
