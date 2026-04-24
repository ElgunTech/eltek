import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "ElTek – IT Solutions | Innovative IT Solutions for Your Digital Growth",
  description:
    "ElTek – IT Solutions provides consulting, cybersecurity, network solutions, and custom software development for modern enterprises.",
  metadataBase: new URL("https://www.eltek-it.com")
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
