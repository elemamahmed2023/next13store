
import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import { Inter, Lalezar } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import "tw-elements/dist/css/tw-elements.min.css";



const inter = Inter({ subsets: ["latin"] });
const lalezar = Lalezar({ subsets: ["arabic"], weight: ["400"] });

export const metadata = {
  title: "Emam NextApp",
  description: "New next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      
      <div className="lalezar.className">
        <Navbar  />
      </div>
        <main>
        {children}

        </main>

        <Footer />
  
      </body>
    </html>
  );
}
