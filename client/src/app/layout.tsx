import type { Metadata } from "next";
import "./globals.css";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
export const metadata: Metadata = {
  title: "Prediccion Riesgo de Burnout",
  icons:{
    icon: '/cld-cloud-phone-svgrepo-com.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>
              <Hero/>
            </div>
            <div>
              <Navbar/>
            </div>
        {children}
      </body>
    </html>
  );
}
