import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MyHeader from './components/MyHeader';
import MyFooter from './components/MyFooter';
import LandingPage from './pages/LandingPage';
import ExperiencePage from './pages/ExperiencePage';

function App() {
  return (
    <Router>
      {/* El Header y Footer se ponen fuera de Routes para que se vean en todas las páginas */}
      <MyHeader />
      
      <main style={{ minHeight: '80vh', padding: '20px' }}>
        <Routes>
          {/* Ruta principal: LandingPage */}
          <Route path="/" element={<LandingPage />} />
          
          {/* Ruta de experiencia */}
          <Route path="/experiencia" element={<ExperiencePage />} />
          
          {/* Redirección: Si la URL no existe, vuelve a la Landing (Requisito de la actividad) */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>

      <MyFooter />
    </Router>
  );
}

export default App;