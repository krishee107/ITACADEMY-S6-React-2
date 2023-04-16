import { useEffect, useState } from "react";
import { Inputs } from "./Inputs";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const Presupuestos = (props) => {
    const [open, setOpen] = useState(false);
    const [textoModal, setTextoModal] = useState("");

    const [checkboxes, setCheckboxes] = useState(() => {
        const storedCheckboxes = JSON.parse(localStorage.getItem("checkboxes"));
        return storedCheckboxes ? storedCheckboxes : {
            web: false,
            seo: false,
            ads: false,
            price: 0
        }
    });
    const [pageInputs, setPageInputs] = useState(() => {
        const storedPageInputs = JSON.parse(localStorage.getItem("pageInputs"));
        return storedPageInputs ? storedPageInputs : {
            paginas: 1,
            idiomas: 1
        }
    })

    const [datosPresupuesto, setDatosPresupuesto] = useState(() => {
        const storedDatosPresupuesto = JSON.parse(localStorage.getItem("datosPresupuesto"));
        return storedDatosPresupuesto ? storedDatosPresupuesto : {
            nomPresupuesto: '',
            nomCliente: ''
        }
    });
    const handleDatos = (event) => {
        const { name, value } = event.target;
        setDatosPresupuesto({ ...datosPresupuesto, [name]: value })
        localStorage.setItem("datosPresupuesto", JSON.stringify(datosPresupuesto));
    }

    useEffect(() => {
        calculatePrice();
        localStorage.setItem("checkboxes", JSON.stringify(checkboxes));
        localStorage.setItem("pageInputs", JSON.stringify(pageInputs));
    }, [pageInputs, checkboxes])


    const handleChange = (event) => {
        const { name, checked } = event.target;
        setCheckboxes({
            ...checkboxes,
            [name]: checked
        });
    };

    const handlePagesChange = (event) => {
        const { name, value } = event.target;
        setPageInputs({
            ...pageInputs,
            [name]: value
        })
    }

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

    /* MODAL */
    const handleOpen = (texto) => {
        setTextoModal(texto)
        setOpen(true);
    }
    const handleClose = (texto) => {
        setTextoModal(texto)
        setOpen(false);
    }
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        border: '3px solid #000',
        boxShadow: 24,
        borderRadius: '25px',
        padding: '20px',
        fontSize: '20px',
        backgroundColor: 'white'
    };

    const submitForm = () => {
        const presupuesto = {
            nombrePresupuesto: datosPresupuesto.nomPresupuesto,
            nombreCliente: datosPresupuesto.nomCliente,
            web: checkboxes.web,
            seo: checkboxes.seo,
            ads: checkboxes.ads,
            paginas: pageInputs.paginas,
            idiomas: pageInputs.idiomas,
            price: checkboxes.price
        }

        return [presupuesto];
    }

    return (
        <div style={{ border: `solid 1px`, padding: `15px 20px`, borderRadius: `15px` }}>
            <h3 style={{ textAlign: `center` }}>¿Qué quieres hacer?</h3>
            <form style={{ display: `grid`, gap: `10px`, padding: `10px 0` }}>
                <input type="text" onChange={handleDatos} value={datosPresupuesto.nomPresupuesto} name="nomPresupuesto" id="nomPresupuesto" placeholder="Nombre del presupuesto" style={{ borderRadius: `15px`, padding: `10px`, border: `1px solid` }} />
                <input type="text" onChange={handleDatos} value={datosPresupuesto.nomCliente} name="nomCliente" id="nomCliente" placeholder="Nombre del cliente" style={{ borderRadius: `15px`, padding: `10px`, border: `1px solid` }} />

                <label htmlFor="web"><input type="checkbox" name="web" id="web" onChange={handleChange} checked={checkboxes.web} /> Una pàgina web (500€)</label>
                {checkboxes.web &&
                    <div style={{ display: 'grid', border: 'solid 3px black', width: "fit-content", padding: "20px", borderRadius: "15px", gap: "10pxpm" }}>
                        <label htmlFor="idioma" style={{ display: `grid` }}>
                            Número de páginas
                            <div style={{ display: `flex`, alignItems: `center`, gap: `20px` }}>
                                <Inputs value={pageInputs.paginas} name={"paginas"} onChange={handlePagesChange} />
                                <i class="fa-solid fa-circle-info" onClick={(e) => { e.preventDefault(); handleOpen("En este componente debe indicar el número de páginas que tendrá su sitio web.") }} style={{ fontSize: `25px`, color: `gray`, cursor: `pointer` }}></i>
                            </div>
                        </label>
                        <label htmlFor="idioma">
                            Número de idiomas
                            <div style={{ display: `flex`, alignItems: `center`, gap: `20px` }}>
                                <Inputs value={pageInputs.idiomas} name={"idiomas"} onChange={handlePagesChange} />
                                <i class="fa-solid fa-circle-info" onClick={(e) => { e.preventDefault(); handleOpen("En este componente debe indicar el número de idiomas que tendrá su sitio web.") }} style={{ fontSize: `25px`, color: `gray`, cursor: `pointer` }}></i>
                            </div>
                        </label>
                    </div>
                }
                <label htmlFor="seo"><input type="checkbox" name="seo" id="seo" onChange={handleChange} checked={checkboxes.seo} /> Una consultoria SEO (300€)</label>
                <label htmlFor="ads"><input type="checkbox" name="ads" id="ads" onChange={handleChange} checked={checkboxes.ads} /> Una campanya de Google Ads (200€)</label>

                <span>Preu: {checkboxes.price}€</span>
                <button type="submit" onClick={(e) => { e.preventDefault(); props.handle(submitForm()) }}>Guardar presupuesto</button>
            </form>



            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box style={style}>
                    {textoModal}
                </Box>
            </Modal>
        </div>
    )
}

export default Presupuestos;