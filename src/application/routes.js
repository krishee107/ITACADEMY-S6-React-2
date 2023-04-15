import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home'
import Page2 from '../pages/Page2';

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/presupuesto/" element={<Page2 />} />
            { /* Es muy recomendable añadir esta ruta para obtener un mensaje de error en el caso de que la ruta no exista. De lo contrario, si la ruta no existe llegaremos a una página en blanco */}
            <Route path="*" element={<div>Error 404, la página no existe.</div>} />
        </Routes>
    </BrowserRouter>
);

export default Router;