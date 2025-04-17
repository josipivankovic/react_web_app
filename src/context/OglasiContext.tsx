import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Oglas = {
  id: number;
  naziv: string;
  cijena: string;
  lokacija: string;
  opis: string;
  slika: string;
  kategorija: string; // ✅ Kategorija dodana
};

type OglasiContextType = {
  oglasi: Oglas[];
  dodajOglas: (oglas: Oglas) => void;
  obrisiOglas: (id: number) => void;
  urediOglas: (id: number, noviPodaci: Partial<Oglas>) => void; // ✅ Ažurirano
};

const OglasiContext = createContext<OglasiContextType | undefined>(undefined);

export const OglasiProvider = ({ children }: { children: ReactNode }) => {
  const [oglasi, setOglasi] = useState<Oglas[]>([]);

  // ✅ Testni oglas sa kategorijom
  const testniOglas: Oglas = {
    id: 1,
    naziv: "Testni Mini Cooper",
    cijena: "9.999 €",
    lokacija: "Split",
    opis: "Ovo je testni oglas koji se učita iz LocalStorage.",
    slika: "mini7.jpg",
    kategorija: "Automobili",
  };

  // 🔁 Učitaj oglase iz LocalStorage
  useEffect(() => {
    const spremljeni = localStorage.getItem("oglasi");
    if (spremljeni) {
      try {
        const podaci = JSON.parse(spremljeni);
        if (Array.isArray(podaci)) {
          setOglasi(podaci);
        }
      } catch (e) {
        console.error("Greška u LocalStorage parsiranju:", e);
      }
    } else {
      setOglasi([testniOglas]);
    }
  }, []);

  // 💾 Spremi oglase svaki put kad se promijene
  useEffect(() => {
    localStorage.setItem("oglasi", JSON.stringify(oglasi));
  }, [oglasi]);

  const dodajOglas = (oglas: Oglas) => {
    const novi = { ...oglas, id: Date.now() };
    setOglasi((prev) => [...prev, novi]);
  };

  const obrisiOglas = (id: number) => {
    setOglasi((prev) => prev.filter((oglas) => oglas.id !== id));
  };

  const urediOglas = (id: number, noviPodaci: Partial<Oglas>) => {
    setOglasi((prev) =>
      prev.map((oglas) =>
        oglas.id === id ? { ...oglas, ...noviPodaci } : oglas
      )
    );
  };

  return (
    <OglasiContext.Provider
      value={{ oglasi, dodajOglas, obrisiOglas, urediOglas }}
    >
      {children}
    </OglasiContext.Provider>
  );
};

export const useOglasi = () => {
  const context = useContext(OglasiContext);
  if (!context) {
    throw new Error("useOglasi must be used within an OglasiProvider");
  }
  return context;
};
