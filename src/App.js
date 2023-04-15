import { useState } from "react";

function App() {
  const [checkboxes, setCheckboxes] = useState({
    web: false,
    seo: false,
    ads: false,
    price: 0
  });
  const [pageInputs, setPageInputs] = useState({
    paginas: 0,
    idiomas: 0
  })

  const handleChange = (event) => {
    const { name, checked } = event.target;
    const price = checked ? checkboxes.price + (name === 'web' ? 500 : name === 'seo' ? 300 : 200)
      : checkboxes.price - (name === 'web' ? 500 : name === 'seo' ? 300 : 200);
    setCheckboxes({ ...checkboxes, [name]: checked, price });
  };

  return (
    <div className="App">
      <div>¿Qué quieres hacer?</div>
      <form style={{ display: `grid`, gap: `10px`, padding: `10px 0` }}>
        <label htmlFor="web"><input type="checkbox" name="web" id="web" onChange={handleChange} /> Una pàgina web (500€)</label>
        {checkboxes.web &&
          <div style={{ display: 'grid' }}>
            <label htmlFor="idioma">Número de páginas <input type="number" id="idioma" value={pageInputs.idiomas} /></label>
            <label htmlFor="idioma">Número de idiomas <input type="number" id="paginas" value={pageInputs.paginas} /></label>
          </div>
        }
        <label htmlFor="seo"><input type="checkbox" name="seo" id="seo" onChange={handleChange} /> Una consultoria SEO (300€)</label>
        <label htmlFor="ads"><input type="checkbox" name="ads" id="ads" onChange={handleChange} /> Una campanya de Google Ads (200€)</label>
      </form>

      <span>Preu: {checkboxes.price}€</span>
    </div>
  );
}

export default App;
