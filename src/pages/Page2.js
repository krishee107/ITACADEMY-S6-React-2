
import { useEffect, useState } from "react";
import Presupuesto from "../components/Presupuesto";
import NavBar from "../components/Navbar";
import Presupuestos from "../components/FormularioPresupuestos";


const Page2 = () => {
    const [presupuestos, setPresupuestos] = useState(() => {
        const storedPresupuestos = JSON.parse(localStorage.getItem("presupuestos"));
        return storedPresupuestos ? storedPresupuestos : []
    });
    const [presupuestosOrdenados, setPresupuestosOrdenados] = useState([...presupuestos]);
    const [orden, setOrden] = useState('');
    let copiaPresupuestos = [...presupuestos];
    const [busqueda, setBusqueda] = useState("");

    const handlePresupuesto = (presupuesto) => {
        const hoy = new Date()
        const fecha = hoy.getDate() + "/" + (hoy.getMonth() + 1) + "/" + hoy.getFullYear();
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
        setPresupuestosOrdenados([...presupuestos, nuevoPresupuesto]);
    };

    useEffect(() => {
        copiaPresupuestos = [...presupuestos];
        let presupuestosFiltrados = [...presupuestos];
        let presupuestosOrdenadosAux = [...presupuestos];

        switch (orden) {
            case 'alfabetico':
                presupuestosOrdenadosAux.sort((a, b) => {
                    if (a.nombrePresupuesto < b.nombrePresupuesto) return -1;
                    if (a.nombrePresupuesto > b.nombrePresupuesto) return 1;
                    return 0;
                });
                break;
            case 'fecha':
                presupuestosOrdenadosAux.sort((a, b) => {
                    return new Date(b.data) - new Date(a.data);
                });
                break;
            default:
                presupuestosOrdenadosAux = copiaPresupuestos;
                break;
        }

        if (busqueda) {
            presupuestosFiltrados = presupuestosOrdenadosAux.filter(presupuesto => presupuesto.nombrePresupuesto.toLowerCase().includes(busqueda.toLowerCase()));
            setPresupuestosOrdenados(presupuestosFiltrados);
        } else {
            setPresupuestosOrdenados(presupuestosOrdenadosAux);
        }

        localStorage.setItem("presupuestos", JSON.stringify(presupuestos));
    }, [presupuestos, orden, busqueda])

    const ordenNombre = () => { setOrden('alfabetico') }
    const ordenFecha = () => { setOrden('fecha'); }
    const reiniciarOrden = () => { setOrden(''); }
    const handleBusqueda = (event) => { setBusqueda(event.target.value); }

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
                    <div>
                        <input type="text" name="buscador" id="buscador" onChange={handleBusqueda} placeholder="Nombre del presupuesto" />
                    </div>

                    <Presupuesto presupuesto={presupuestosOrdenados} />
                </div>
            </div>

        </div>
    );
}

export default Page2;

