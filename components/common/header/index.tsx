import { FunctionComponent } from "react";
import Link from "next/link";

import { HEADER } from "@/utils/links";

export const Header: FunctionComponent = () => (
  <header className="p-4">
    <section className="flex items-center gap-1">
      <Link href={HEADER.main.url}>
        <p className="font-semibold text-2xl">{HEADER.main.label}</p>
      </Link>
      {HEADER.links && HEADER.links.length > 0
        ? HEADER.links.map((l) => (
            <Link href={l.url}>
              <p>{l.label}</p>
            </Link>
          ))
        : null}
    </section>
  </header>
);
