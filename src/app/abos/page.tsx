// Abos.tsx
import { NextPage } from "next";

// Definieren der NextPage-Komponente für die Abo-Seite
const Abos: NextPage = () => {
  return (
    // Flex-Container für zentrierte Ausrichtung mit vertikalem Abstand am Anfang
    <div className="flex justify-center items-start min-h-screen p-4 bg-black mt-20">
      {/* Grid-Container für Abo-Kästen, die auf mittleren bis größeren Bildschirmen nebeneinander angezeigt werden */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Jeder Abo-Kasten ist eine flex-column, die einen Kasten und einen Button enthält */}
        {/* Abo-Kasten für "Basic" */}
        <div className="flex flex-col items-center">
          <div className="w-72 h-96 rounded-2xl overflow-hidden shadow-lg p-6 bg-blue-500 text-center">
            <h1 className="text-2xl font-bold text-white mb-4">Basic</h1>
            <ul className="list-disc text-white text-base mb-4 space-y-2 text-left pl-5">
              <li>Leistung 1</li>
              <li>Leistung 2</li>
              <li>Leistung 3</li>
            </ul>
          </div>
          <button className="w-72 h-12 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mt-4">
            Abonnieren
          </button>
        </div>

        {/* Abo-Kasten für "Advanced" */}
        <div className="flex flex-col items-center">
          <div className="w-72 h-96 rounded-2xl overflow-hidden shadow-lg p-6 bg-blue-500 text-center">
            <h1 className="text-2xl font-bold text-white mb-4">Advanced</h1>
            <ul className="list-disc text-white text-base mb-4 space-y-2 text-left pl-5">
              <li>Leistung 1</li>
              <li>Leistung 2</li>
              <li>Leistung 3</li>
            </ul>
          </div>
          <button className="w-72 h-12 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mt-4">
            Abonnieren
          </button>
        </div>

        {/* Abo-Kasten für "Pro" */}
        <div className="flex flex-col items-center">
          <div className="w-72 h-96 rounded-2xl overflow-hidden shadow-lg p-6 bg-blue-500 text-center">
            <h1 className="text-2xl font-bold text-white mb-4">Pro</h1>
            <ul className="list-disc text-white text-base mb-4 space-y-2 text-left pl-5">
              <li>Leistung 1</li>
              <li>Leistung 2</li>
              <li>Leistung 3</li>
            </ul>
          </div>
          <button className="w-72 h-12 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mt-4">
            Abonnieren
          </button>
        </div>
      </div>
    </div>
  );
};

// Export der Komponente für den Einsatz in der Next.js-Anwendung
export default Abos;
