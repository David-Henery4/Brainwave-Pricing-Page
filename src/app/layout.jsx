import "./globals.css";
import { roboto, rubik } from "@/fonts/fonts";
import { Navbar, Footer } from "@/components/shared";

export const metadata = {
  title: "Brainwave",
  description: "Brainwave Pricing Page",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${rubik.variable} scroll-smooth`}
    >
      <body className="grid grid-cols-desk font-roboto text-textDark bg-bg">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
