import { FunctionComponent } from "react";
import Link from "next/link";

import { URLS } from "@/utils/urls";

export const Header: FunctionComponent = () => (
  <header className="p-4">
    <section className="flex items-center gap-1">
      <Link href={URLS.NAVIGATE.HOME}>
        <p className="font-semibold text-2xl">ThreadIt</p>
      </Link>
      <Link href={URLS.NAVIGATE.THREADS}>Threads</Link>
    </section>
  </header>
);
