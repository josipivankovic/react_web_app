import './TehnickiPodaci.css';

function TehnickiPodaci() {
  return (
    <div className="tehnicki-container">
      <h3>Tehnički podaci</h3>
      <table>
        <tbody>
          <tr>
            <td>Marka:</td>
            <td>Mini</td>
          </tr>
          <tr>
            <td>Model:</td>
            <td>Cooper SD Seven</td>
          </tr>
          <tr>
            <td>Godina:</td>
            <td>2018</td>
          </tr>
          <tr>
            <td>Kilometraža:</td>
            <td>143.000 km</td>
          </tr>
          <tr>
            <td>Snaga:</td>
            <td>141 KS</td>
          </tr>
          <tr>
            <td>Gorivo:</td>
            <td>Dizel</td>
          </tr>
          <tr>
            <td>Mjenjač:</td>
            <td>Automatik</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TehnickiPodaci;
