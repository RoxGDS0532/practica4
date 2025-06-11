import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  const headerStyle = {
    padding: '20px',
    backgroundColor: '#f11059',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const navStyle = {
    display: 'flex',
    gap: '20px',
    fontWeight: 'bold',
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
  };

  const mainStyle = {
    padding: '40px',
    minHeight: '70vh',
    backgroundColor: '#f9f9f9'
  };

  const footerStyle = {
    padding: '15px',
    backgroundColor: '#f11059',
    color: '#fff',
    textAlign: 'center',
    fontSize: '0.9rem'
  };

  return (
    <div>
      <header style={headerStyle}>
        <h1 style={{ margin: 0 }}>Mi Sitio Web</h1>
        <nav style={navStyle}>
          <Link to="/" style={linkStyle}>Inicio</Link>
          <Link to="/about" style={linkStyle}>Acerca de</Link>
        </nav>
      </header>

      <main style={mainStyle}>
        <Outlet />
      </main>

      <footer style={footerStyle}>
        <p>© 2025 Maria Roxana Ortega Rentería - Todos los derechos reservados</p>
      </footer>
    </div>
  );
};

export default Layout;
