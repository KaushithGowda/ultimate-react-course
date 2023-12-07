import React from 'react';
import ReactDOM from 'react-dom/client';

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
    return <>
        <Header />
        <Menu />
        <Footer />
    </>;
}

function Pizza() {
    return <>
        <img src="pizzas/focaccia.jpg" alt="focaccia" />
        <h2>Pizza Focaccia</h2>
        <p>Bread with italian olive oil and rosemary</p>
    </>
}

function Header() {
    return <h1>Fast React Corporation!</h1>
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 9;
    const closeHour = 5;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen);

    return <footer>{new Date().toLocaleTimeString()} - We're currently open!</footer>
}

function Menu() {
    return <div>
        <h2>Our Menu</h2>
        <Pizza />
        <Pizza />
        <Pizza />
    </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
    <App />
</React.StrictMode>);