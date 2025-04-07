interface InfoItem {
    id: number;
    naziv: string;
    vrijednost: string;
  }
  
  interface Props {
    naslov: string;
    lista: InfoItem[];
  }
  
  const DodatneInformacije = ({ naslov, lista = [] }: Props) => {
    return (
      <div className="dodatne-informacije">
        <h3>{naslov}</h3>
        <ul>
          {lista.map((item) => (
            <li key={item.id}>
              <strong>{item.naziv}:</strong> {item.vrijednost}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default DodatneInformacije;
  