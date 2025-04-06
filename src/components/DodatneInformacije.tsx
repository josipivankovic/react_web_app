interface Props  {
    naslov: string;
    lista: {
        naziv: string;
        vrijednost: string;
    }[]
}

const DodatneInformacije = ({
    naslov,
    lista = []
}: Props) => {
    return <div className="dodatne-informacije">
    <h3>{naslov}</h3>
    <ul>
        {lista.map((item, index) => (
            <li key={index}><strong>{item.naziv}:</strong> {item.vrijednost}</li>
        ))}
    </ul>
  </div>
}

export default DodatneInformacije;