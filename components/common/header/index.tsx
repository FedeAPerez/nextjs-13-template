import { FunctionComponent } from "react";
import Link from "next/link";

import { URLS } from "@/utils/urls";

export const Header: FunctionComponent = () => (
  <header className="p-2">
    <Link href={URLS.NAVIGATE.HOME}>
      <p>ThreadIt</p>
    </Link>
  </header>
);
