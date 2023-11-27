// layout.tsx

import { ReactNode } from 'react';
import "../styles/globals.css";
import Footer from "../components/footer";
import Header from "../components/header";

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <>
      <Header /> {/* Header-Komponente */}
      <main className="flex-grow"> {/* Hauptbereich, der wächst und den verfügbaren Platz einnimmt */}
        {children}
      </main>
      <Footer /> {/* Footer-Komponente, die unten klebt */}
    </>
  );
};

export default RootLayout;
