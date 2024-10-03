import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import NavigationMain from "@/components/navigation/NavigationMain";
import NavTop from "@/components/navigation/NavTop";
import BackgroundBeams from "@/components/ui/BackgroundBeams";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Kreditni savtenik",
  description: "Usluga kreditnog i finansijskog savetovanja",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
              <BackgroundBeams />
            </div>
          {/* Sadržaj aplikacije sa većim z-indexom */}
           <div className="relative z-10">
              <NavTop />
              <NavigationMain />
               {children}
          </div>
          </ThemeProvider>
      </body>
    </html>
  );
}
