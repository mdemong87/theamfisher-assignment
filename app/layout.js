import { DM_Sans } from "next/font/google";
import "./globals.css";

const dm_sans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});


export const metadata = {
  title: "DarylSmith",
  description: "Darylsmith Portfolio Landing Page Website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${dm_sans.variable} overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
