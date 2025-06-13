import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
//import logo from './logo.svg';
import './App.css';

function Home() {
  return <h1>Bienvenid@s al inicio de mi pagina web, soy Roxana</h1>;
}
function About() {
  return <h2>Nosotros: Esta app fue creada por Maria Roxana para la Práctica 5 y estudio en la UTNG</h2>;
}

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
