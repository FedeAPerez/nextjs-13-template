/* eslint-disable @next/next/no-head-element */

import { Header } from "@/components/common/header";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ThreadIt</title>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
