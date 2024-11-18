import React from 'react';
import './estilos.css';
import buzo from './img/buzo.jpeg';
import croptop from './img/croptop.jpeg';
import mameluco from './img/mameluco1.jpeg';

const Home = () => {
  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="search-bar">
          <input type="text" placeholder="Buscar..." />
        </div>
        <div className="navbar-center">
          <a href="#inicio">Inicio</a>
          <a href="#catalogo">Catálogo</a>
          <a href="#carrito">
            <i className="fas fa-shopping-cart"></i>
          </a>
        </div>
        <div className="login-icon">
          <a href="/login">
            <i className="fas fa-user"></i> Iniciar Sesión
          </a>
        </div>
      </nav>

      <div className="hero-section">
        <div className="hero-content">
          <h1>En Yeyevo encontrarás lo ideal para ti</h1>
        </div>
      </div>

      <div className="products-section">
        <div className="product-item">
          <img src={mameluco} alt="Producto 1" className="product-image" />
          <div className="product-description">
            <h3>Chaquetas Modernas</h3>
            <p>Diseños exclusivos para todos los estilos.</p>
            <button>Más información</button>
          </div>
        </div>
        <div className="product-item reverse">
          <div className="product-description">
            <h3>Buzos Cálidos</h3>
            <p>Cómodos y abrigados para cualquier ocasión.</p>
            <button>Más información</button>
          </div>
          <img src={buzo} alt="Producto 2" className="product-image" />
        </div>
        <div className="product-item">
          <img src={croptop} alt="Producto 3" className="product-image" />
          <div className="product-description">
            <h3>Camisetas</h3>
            <p>La mejor calidad en camisteas</p>
            <button>Más información</button>
          </div>
        </div>
        <div className="product-item reverse">
          <div className="product-description">
            <h3>Mamelucos Infantiles</h3>
            <p>Ropa cómoda y segura para los más pequeños.</p>
            <button>Más información</button>
          </div>
          <img src={mameluco} alt="Producto 4" className="product-image" />
        </div>
      </div>

      <section className="about-section">
        <h2>Acerca de Nosotros</h2>
        <p>
          Somos una empresa dedicada al diseño, la confección y el estampado de prendas textiles, tales como camisetas, buzos, mamelucos, bodys, blusones y más.
          Operando desde el 2019 hasta la actualidad, nos caracterizamos por la fiabilidad, calidad y precisión de nuestros productos.
        </p>
      </section>

      <footer className="footer">
        <p>Síguenos en:</p>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
      </footer>
    </div>
  );
};

export default Home;
