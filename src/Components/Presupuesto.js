const ListaPresupuestos = (props) => {
    return (
        <div style={{ border: `solid 1px`, padding: `10px`, borderRadius: `15px`, margin: `10px 0`, display: `grid`, width: `200px` }}>
            <div><b>Nombre:</b> {props.presupuesto.nombrePresupuesto}</div>
            <div><b>Cliente:</b>{props.presupuesto.nombreCliente}</div>
            <div>
                <b>Pedido:</b>
                <ul>
                    <li>Web: {props.presupuesto.web ? "Sí" : "No"}</li>
                    <li>Web -->Páginas: {props.presupuesto.paginas}</li>
                    <li>Web --> Idiomas: {props.presupuesto.idiomas}</li>
                    <li>SEO: {props.presupuesto.seo ? "Sí" : "No"}</li>
                    <li>Ads: {props.presupuesto.ads ? "Sí" : "No"}</li>
                </ul>
            </div>
            <div>Total: {props.presupuesto.price} € </div>

        </div >

    )
}

export default ListaPresupuestos