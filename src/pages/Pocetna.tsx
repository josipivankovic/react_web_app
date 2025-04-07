import React from "react";
import GalerijaSlika from "../components/GalerijaSlika";
import "../App.css";
import SlicniOglasi from "../components/SlicniOglasi";
import KontaktForma from "../components/KontaktForma";
import DodatneInformacije from "../components/DodatneInformacije";
import OpisProizvoda from "../components/OpisProizvoda";

const Pocetna = () => {
  return (
    <>
      <div className="pocetna-container">
        {/* Lijeva strana */}
        <div className="lijeva-strana">
          <GalerijaSlika />

          <DodatneInformacije
            naslov="Dodatne informacije"
            lista={[
              { id: 1, naziv: "Registriran do", vrijednost: "01/2025" },
              { id: 2, naziv: "Broj vrata", vrijednost: "5" },
              { id: 3, naziv: "Boja", vrijednost: "Metalik zelena" },
              { id: 4, naziv: "Pogon", vrijednost: "Prednji" },
              { id: 5, naziv: "Klima", vrijednost: "Automatska" },
              { id: 6, naziv: "Servisna knjižica", vrijednost: "Da" },
              { id: 7, naziv: "Vlasnik", vrijednost: "Prvi vlasnik" },
              { id: 8, naziv: "Oštećenja", vrijednost: "Bez oštećenja" },
              { id: 9, naziv: "Zamjena", vrijednost: "Nije moguća" },
            ]}
          />
        </div>

        {/* Desna strana */}
        <div className="desna-strana">
          <OpisProizvoda
            naslov="Mini Cooper SD Seven"
            cijena="14.900€"
            lokacija="Zagreb"
            opis="Prodajem Mini Cooper SD Seven s panoramskim krovom, automatik, očuvan, redovno servisiran. Auto je iz prve ruke, s originalnom kilometražom i servisnom evidencijom. Vozilo je garažirano i odmah dostupno."
          />

          <DodatneInformacije
            naslov="Tehnički podaci"
            lista={[
              { id: 10, naziv: "Marka", vrijednost: "Mini" },
              { id: 11, naziv: "Model", vrijednost: "Cooper SD Seven" },
              { id: 12, naziv: "Godina", vrijednost: "2018" },
              { id: 13, naziv: "Kilometraža", vrijednost: "143.000 km" },
              { id: 14, naziv: "Snaga", vrijednost: "141 KS" },
              { id: 15, naziv: "Gorivo", vrijednost: "Dizel" },
              { id: 16, naziv: "Mjenjač", vrijednost: "Automatik" },
            ]}
          />

          <DodatneInformacije
            naslov="Podaci o prodavaču"
            lista={[
              { id: 17, naziv: "Prodavač", vrijednost: "Josip Josipović" },
              { id: 18, naziv: "Status", vrijednost: "Aktivan danas" },
              { id: 19, naziv: "Lokacija", vrijednost: "Zagreb" },
              { id: 20, naziv: "Broj oglasa", vrijednost: "4" },
              { id: 21, naziv: "Telefon", vrijednost: "091/123-2233" },
            ]}
          />

          <KontaktForma />
        </div>
      </div>

      <div className="pocetna-container">
        <SlicniOglasi />
      </div>
    </>
  );
};

export default Pocetna;
