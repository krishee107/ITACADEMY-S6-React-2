
import ListaPresupuestos from "../components/ListaPresupuestos";
import NavBar from "../components/Navbar";
import Presupuestos from "../components/Presupuestos";


const Page2 = () => {

    return (
        <div>
            <NavBar />

            <div style={{ display: `flex`, justifyContent: `space-around`, paddingTop: `20px` }}>
                <div id="presupuestos">
                    <Presupuestos />
                </div>

                <div id="listaPresupuestos">
                    <ListaPresupuestos />
                </div>
            </div>

        </div>
    );
}

export default Page2;
