import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"

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
    soldOut: false,
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
  return (
    <div>
      <Header />
      <Menu/>
      <Footer/>
      
    


    </div>
  );
}

function Header() {
  return <header className="header"> 
  <h1 style={{ color: "orange", fontSize: "48px", textTransform: "uppercase" }}>Pann's Pizza Co.</h1>
  </header>;
}


//sold out class will apply  if sold out is true , other wise an empty string will show

function Pizza({ name, ingredients, price, photoName, soldOut }) {
  return (
      <div className={`pizza ${soldOut ? "sold-out" : ""}`}>
          <img src={photoName} alt={name} />
          <div>
              <h3>{name}</h3>
              <p>{ingredients}</p>
              <span>{price}</span>
          </div>
      </div>
  );
}



function Menu() {
  return (
      <div className="menu">
          <h2 className="menu-heading">Our Menu</h2>
          <p>Authentic Italian cuisine, all from our stone oven</p>
          <div className="pizzas">
              {pizzaData.map((pizza) => (
                  <Pizza 
                      key={pizza.name}
                      name={pizza.name}
                      ingredients={pizza.ingredients}
                      price={pizza.price}
                      photoName={pizza.photoName}
                      soldOut={pizza.soldOut}
                  />
              ))}
          </div>
      </div>
  );
}

function Footer() {
  const date = new Date();
  const showTime = date.getHours();
  const isOpen = showTime >= 10 && showTime <= 22;

  return (
    <footer className="footer">
      {isOpen ? (
        <>
          <p>We're currently open</p>
          <button className="btn">Order</button>
        </>
      ) : (
        <p>Sorry, we're closed</p>
      )}
    </footer>
  );
}





const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);