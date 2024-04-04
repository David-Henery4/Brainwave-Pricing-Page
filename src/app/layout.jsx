import "./globals.css";
import { roboto, rubik } from "@/fonts/fonts";


export const metadata = {
  title: "Brainwave",
  description: "Brainwave Pricing Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable} ${rubik.variable} scroll-smooth`}>
      <body>{children}</body>
    </html>
  );
}
