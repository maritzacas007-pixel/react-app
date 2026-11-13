import { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { HomePage } from './pages/Home/HomePage';
import { CatalogPage } from './pages/Catalog/CatalogPage';
import { EspecieUnoPage } from './pages/especie-uno/EspecieUnoPage';
import { EspecieDosPage } from './pages/especie-dos/EspecieDosPage';
import { EspecieTresPage } from './pages/especie-tres/EspecieTresPage';
import { EspecieCuatroPage } from './pages/especie-cuatro/EspecieCuatroPage';
import { EspecieCincoPage } from './pages/especie-cinco/EspecieCincoPage';
import { EspecieSeisPage } from './pages/especie-seis/EspecieSeisPage';
import { EspecieSietePage } from './pages/especie-siete/EspecieSietePage';
import { EspecieOchoPage } from './pages/especie-ocho/EspecieOchoPage';
import { EspecieNuevePage } from './pages/especie-nueve/EspecieNuevePage';
import { EspecieDiezPage } from './pages/especie-diez/EspecieDiezPage';
import { EspecieOncePage } from './pages/especie-once/EspecieOncePage';
import { EspecieDocePage } from './pages/especie-doce/EspecieDocePage';
import { AreasPage } from './pages/areas/AreasPage';
import ReconocimientoPage from './pages/reconocimiento/ReconocimientoPage';
import UsuarioPage from './pages/usuario/UsuarioPage';
import QueEsPage from './pages/que-es/QueEsPage';
import { AmenazasPage } from './pages/amenazas/AmenazasPage';
import { CondicionesPage } from './pages/condiciones/CondicionesPage';

// Componente para forzar el scroll arriba de inmediato al cambiar de ruta
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.body.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalogo" element={<CatalogPage />} />
        
        {/* Rutas de las 12 especies del herbario */}
        <Route path="/especie-uno" element={<EspecieUnoPage />} />
        <Route path="/especie-dos" element={<EspecieDosPage />} />
        <Route path="/especie-tres" element={<EspecieTresPage />} />
        <Route path="/especie-cuatro" element={<EspecieCuatroPage />} />
        <Route path="/especie-cinco" element={<EspecieCincoPage />} />
        <Route path="/especie-seis" element={<EspecieSeisPage />} />
        <Route path="/especie-siete" element={<EspecieSietePage />} />
        <Route path="/especie-ocho" element={<EspecieOchoPage />} />
        <Route path="/especie-nueve" element={<EspecieNuevePage />} />
        <Route path="/especie-diez" element={<EspecieDiezPage />} />
        <Route path="/especie-once" element={<EspecieOncePage />} />
        <Route path="/especie-doce" element={<EspecieDocePage />} />

        <Route path="/areas-protegidas" element={<AreasPage />} />
        {/* Redirección por si algún botón viejo apuntaba solo a /areas */}
        <Route path="/areas" element={<Navigate to="/areas-protegidas" replace />} />

        <Route path="/reconocimiento" element={<ReconocimientoPage />} />
        <Route path="/usuario" element={<UsuarioPage />} />
        
        {/* Rutas de la sección de exploración */}
        <Route path="/que-es" element={<QueEsPage />} />
        <Route path="/amenazas" element={<AmenazasPage />} />
        <Route path="/condiciones" element={<CondicionesPage />} />
      </Routes>
    </HashRouter>
  );
}