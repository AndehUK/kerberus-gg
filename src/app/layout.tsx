import { ThemeProvider } from "@/components/providers/theme-provider";
import "@/styles/globals.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Kerberus - The Best Minecraft 1.20 Server Network",
  description:
    "Try your hand at the newest Minecraft network in town, bringing new fun minigames, a free-to-play focused experience that rewards you for activity and make new friends and lasting memories along the way!",
  icons: [{ rel: "icon", url: "/kerby.png" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
