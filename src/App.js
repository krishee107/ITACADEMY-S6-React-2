import { useEffect, useState } from "react";

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
    setCheckboxes({
      ...checkboxes,
      [name]: checked
    });

    console.log(checkboxes)
  };

  const handlePagesChange = (event) => {
    const { name, value } = event.target;
    setPageInputs({
      ...pageInputs,
      [name]: value
    })
  }

  useEffect(() => {
    calculatePrice();
  }, [pageInputs, checkboxes])


  const calculatePrice = () => {
    let newPrice = 0;
    if (checkboxes.web) {
      newPrice += 500;
      newPrice += pageInputs.idiomas * pageInputs.paginas * 30;
    }
    if (checkboxes.seo)
      newPrice += 300;
    if (checkboxes.ads)
      newPrice += 200;

    setCheckboxes({
      ...checkboxes,
      price: newPrice
    })
  }
  return (
    <div className="App">
      <div>¿Qué quieres hacer?</div>
      <form style={{ display: `grid`, gap: `10px`, padding: `10px 0` }}>
        <label htmlFor="web"><input type="checkbox" name="web" id="web" onChange={handleChange} /> Una pàgina web (500€)</label>
        {checkboxes.web &&
          <div style={{ display: 'grid' }}>
            <label htmlFor="idioma">Número de páginas <input type="number" name="idiomas" id="idiomas" onChange={handlePagesChange} /></label>
            <label htmlFor="idioma">Número de idiomas <input type="number" name="paginas" id="paginas" onChange={handlePagesChange} /></label>
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
