
import { useState } from "react";
import Presupuesto from "../components/Presupuesto";
import NavBar from "../components/Navbar";
import Presupuestos from "../components/FormularioPresupuestos";


const Page2 = () => {
    const [presupuestos, setPresupuestos] = useState([]);

    const handlePresupuesto = (presupuesto) => {
        const hoy = new Date()
        const fecha = hoy.getDate() + "/" + (hoy.getMonth() + 1) + "/" + hoy.getFullYear();
        console.log(hoy)
        const nuevoPresupuesto = {
            nombrePresupuesto: presupuesto[0].nombrePresupuesto,
            nombreCliente: presupuesto[0].nombreCliente,
            web: presupuesto[0].web,
            seo: presupuesto[0].seo,
            ads: presupuesto[0].ads,
            paginas: presupuesto[0].paginas,
            idiomas: presupuesto[0].idiomas,
            price: presupuesto[0].price,
            data: fecha
        };
        setPresupuestos([...presupuestos, nuevoPresupuesto]);
        console.log(presupuestos)
    };

    return (
        <div>
            <NavBar />

            <div style={{ display: `flex`, justifyContent: `space-around`, paddingTop: `20px` }}>
                <div id="presupuestos">
                    <Presupuestos presupuestos={presupuestos} handle={handlePresupuesto} />
                </div>

                <div id="listaPresupuestos">
                    {presupuestos.map((presupuesto, index) => (
                        <Presupuesto key={index} presupuesto={presupuesto} />
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Page2;


        //console.log(presupuesto[0].nombrePresupuesto, presupuesto[0].nombreCliente, presupuesto[0].web, presupuesto[0].seo)