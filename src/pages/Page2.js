
import { useEffect, useState } from "react";
import Presupuesto from "../components/Presupuesto";
import NavBar from "../components/Navbar";
import Presupuestos from "../components/FormularioPresupuestos";


const Page2 = () => {
    const [presupuestos, setPresupuestos] = useState(() => {
        const storedPresupuestos = JSON.parse(localStorage.getItem("presupuestos"));
        return storedPresupuestos ? storedPresupuestos : []
    });

    let copiaPresupuestos = [];

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
    };

    useEffect(() => {
        copiaPresupuestos = [...presupuestos]
        localStorage.setItem("presupuestos", JSON.stringify(presupuestos));
    }, [presupuestos])


    const ordenNombre = () => {
        const presupuestosNombre = [...presupuestos];
        presupuestosNombre.sort((a, b) => {
            if (a.nombrePresupuesto < b.nombrePresupuesto) return -1
            if (a.nombrePresupuesto > b.nombrePresupuesto) return 1;
            return 0
        })
        return presupuestosNombre
    }
    const ordenFecha = () => {
        const presupuestosFecha = [...presupuestos];
        presupuestosFecha.sort((a, b) => {
            return new Date(b.data) - new Date(a.data);
        });
        return presupuestosFecha;
    }
    const reiniciarOrden = () => {
        setPresupuestos({ ...copiaPresupuestos })
    }

    return (
        <div>
            <NavBar />

            <div style={{ display: `flex`, justifyContent: `space-around`, paddingTop: `20px` }}>
                <div id="presupuestos">
                    <Presupuestos presupuestos={presupuestos} handle={handlePresupuesto} />
                </div>

                <div id="listaPresupuestos">
                    <div id="botones" style={{ display: `flex`, gap: `10px` }}>
                        <button onClick={ordenNombre}>Alfabetico</button>
                        <button onClick={ordenFecha}>Fecha</button>
                        <button onclick={reiniciarOrden}>Reiniciar</button>
                    </div>
                    {presupuestos.map((presupuesto, index) => (
                        <Presupuesto key={index} presupuesto={presupuesto} />
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Page2;

