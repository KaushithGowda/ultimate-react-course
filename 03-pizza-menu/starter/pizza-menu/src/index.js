import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];

function App() {
    return <div className="container">
        <Header />
        <Menu />
        <Footer />
    </div>;
}

function Pizza(props) {
    return <div className="pizza">
        <img src={props.image} alt="focaccia" />
        <div>
            <h3>{props.name}</h3>
            <p>{props.des}</p>
        </div>
    </div>
}

function Header() {
    return <header className="header"><h1>Fast React Corporation!</h1></header>;
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 9;
    const closeHour = 5;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen);

    return <footer className="footer">{new Date().toLocaleTimeString()} - We're currently open!</footer>
}

function Menu() {
    return <main className="menu">
        <h1>Our Menu</h1>
        <Pizza image="pizzas/focaccia.jpg" name="Pizza Focaccia" price={10} des="Bread with italian olive oil and rosemary" />
        <Pizza image="pizzas/funghi.jpg" name="Pizza Funghi" price={20} des="Mushrooms, Onions..." />
        <Pizza image="pizzas/margherita.jpg" name="Pizza Margherita" price={20} des="Carrots, Chilli" />
    </main>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
    <App />
</React.StrictMode>);