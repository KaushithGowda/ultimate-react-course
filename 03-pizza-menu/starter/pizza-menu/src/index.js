import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: 'pizzas/focaccia.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: 'pizzas/margherita.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: 'pizzas/spinaci.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: 'pizzas/funghi.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: 'pizzas/salamino.jpg',
    soldOut: true,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Pizza({ pizzaObj }) {
  return (
    <div className={`pizza ${pizzaObj.soldOut && 'sold-out'}`}>
      <img src={pizzaObj.photoName} alt="focaccia" />
      <div>
        <h3>{pizzaObj.name}</h3>
        <span>{pizzaObj.ingredients}</span>
        <p>${pizzaObj.price}</p>
        {pizzaObj.soldOut && <p className="sold-out">Sold Out</p>}
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Corporation!</h1>
    </header>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 9;
  const closeHour = 19;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      <FooterChild isOpen={isOpen} openHour={openHour} closeHour={closeHour} />
    </footer>
  );
}

function FooterChild(params) {
  return (
    <>
      {params.isOpen
        ? `${new Date().toLocaleTimeString()} - We're currently open and happy to serve you! (Open hours${
            params.openHour
          } AM to ${params.closeHour} PM)`
        : `Sorry we are Closed! We are open from ${params.openHour} AM to ${params.closeHour} PM!`}
    </>
  );
}

function Menu() {
  const pizza = pizzaData;
  const itemsLength = pizza.length;
  return (
    <main className="menu">
      <h1>Our Menu</h1>
      <div className="pizzas">
        {itemsLength > 0 ? (
          pizza.map((pizza) => {
            return <Pizza pizzaObj={pizza} key={pizza.name} />;
          })
        ) : (
          <h2>We are still working on the menu items!</h2>
        )}
      </div>
    </main>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
