const ListaPresupuestos = (props) => {
    console.log(props.presupuesto)
    return props.presupuesto.map((p) => {
        return (
            <div style={{ border: `solid 1px`, padding: `10px`, borderRadius: `15px`, margin: `10px 0`, display: `grid`, width: `200px` }}>
                <div><b>Nombre:</b> {p.nombrePresupuesto}</div>
                <div><b>Cliente:</b>{p.nombreCliente}</div>
                <div>
                    <b>Pedido:</b>
                    <ul>
                        <li>Web: {p.web ? "Sí" : "No"}</li>
                        <li>Web -->Páginas: {p.paginas}</li>
                        <li>Web --> Idiomas: {p.idiomas}</li>
                        <li>SEO: {p.seo ? "Sí" : "No"}</li>
                        <li>Ads: {p.ads ? "Sí" : "No"}</li>
                    </ul>
                </div>
                <div><b>Fecha:</b> {p.data}</div>
                <div><b>Total:</b> {p.price} € </div>

            </div >
        )
    })
}

export default ListaPresupuestos;
