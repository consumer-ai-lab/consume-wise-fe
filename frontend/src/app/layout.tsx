import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/app/globals.css";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
});

export const metadata: Metadata = {
  title: "ConsumeWise",
  description: "ConsumeWise Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
      </body>
    </html>
  );
}