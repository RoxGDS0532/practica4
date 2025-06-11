import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
//import logo from './logo.svg';
import './App.css';

function Home() {
  return <h1>Bienvenid@s al inicio de mi pagina web, soy Roxana</h1>;
}
function About() {
  return <h2>Acerca de Nosotros: Esta app fue creada por Roxana para la Práctica 5</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
