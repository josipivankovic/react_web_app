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

            <DodatneInformacije naslov="Dodatne informacije" lista={[
                {naziv: "Registriran do", vrijednost: "01/2025"},
                {naziv: "Broj vrata", vrijednost: "5"},
                {naziv: "Boja", vrijednost: "Metalik zelena"},
                {naziv: "Pogon", vrijednost: "Prednji"},
                {naziv: "Klima", vrijednost: "Automatska"},
                {naziv: "Servisna knjižica", vrijednost: "Da"},
                {naziv: "Vlasnik", vrijednost: "Prvi vlasnik"},
                {naziv: "Oštećenja", vrijednost: "Bez oštećenja"},
                {naziv: "Zamjena", vrijednost: "Nije moguća"},
            ]} />
          
        </div>

        {/* Desna strana */}
        <div className="desna-strana">
          <OpisProizvoda 
            naslov="Mini Cooper SD Seven" 
            cijena="14.900€" 
            lokacija="Zagreb" 
            opis="Prodajem Mini Cooper SD Seven s panoramskim krovom, automatik, očuvan, redovno servisiran.
            Auto je iz prve ruke, s originalnom kilometražom i servisnom evidencijom.
            Vozilo je garažirano i odmah dostupno." 
        />

          <DodatneInformacije naslov="Tehnički podaci" lista={[
                {naziv: "Marka", vrijednost: "Mini"},
                {naziv: "Model", vrijednost: "Cooper SD Seven"},
                {naziv: "Godina", vrijednost: "2018"},
                {naziv: "Kilometraža", vrijednost: "143.000 km"},
                {naziv: "Snaga", vrijednost: "141 KS"},
                {naziv: "Gorivo", vrijednost: "Dizel"},
                {naziv: "Mjenjač", vrijednost: "Automatik"},
            ]} />

          <DodatneInformacije naslov="Tehnički podaci" lista={[
                {naziv: "Prodavač", vrijednost: "Josip Josipović"},
                {naziv: "Status", vrijednost: "Aktivan danas"},
                {naziv: "Lokacija", vrijednost: "Zagreb"},
                {naziv: "Broj oglasa", vrijednost: "4"},
                {naziv: "Telefon", vrijednost: "091/123-2233"},
            ]} />

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










  
  

  