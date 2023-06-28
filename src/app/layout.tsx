import { Poppins } from "next/font/google";
import Footer from "@/components/footer";
import Header from "@/components/header";
import "../styles/globals.css";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "The Boys App",
  description: "The Boys App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
