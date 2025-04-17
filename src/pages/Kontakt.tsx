import "./Kontakt.css";

function Kontakt() {
  return (
    <div className="kontakt-container">
      <h1>O autoru</h1>

      <section className="kontakt-section">
        <h2>Josip Ivanković</h2>
        <p>
          Ovo je moj prvi samostalni projekt, kroz koji prikazujem praktične vještine iz web razvoja
          koristeći moderne tehnologije poput <strong>Reacta</strong> i <strong>TypeScripta</strong>.
        </p>
      </section>

      <section className="kontakt-section">
        <h3>Specijalizacija</h3>
        <p>
          Usmjeren sam na <strong>web i mobilni razvoj</strong>, gdje svakodnevno radim na stvarnim
          projektima i kontinuirano nadograđujem svoje znanje, posebno kroz <strong>React</strong> i <strong>Flutter</strong>.
        </p>
      </section>

      <section className="kontakt-section">
        <h3>Tehnologije koje koristim</h3>
        <ul>
          <li>React</li>
          <li>TypeScript</li>
          <li>Flutter</li>
          <li>HTML & CSS</li>
          <li>Git & GitHub</li>
        </ul>
      </section>

      <section className="kontakt-section">
        <h3>Kontakt i poveznice</h3>
        <p>Email: <a href="mailto:josipivankovicc13@gmail.com">josipivankovicc13@gmail.com</a></p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/josipivankovic"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/josipivankovic
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/josip-ivanković-061324358/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/josip-ivanković
          </a>
        </p>
      </section>

      <div className="kontakt-cta">
        <a
          href="https://github.com/josipivankovic"
          className="cta-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pogledaj moje projekte
        </a>
      </div>
    </div>
  );
}

export default Kontakt;
