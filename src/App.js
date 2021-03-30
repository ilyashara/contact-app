import React from "react";
import logo from './logo.svg';
import './App.css';
import Contact from './components/Contact';




export default function App() {
  const Ilyas = {
    image: "https://randomuser.me/api/portraits/men/57.jpg",
    name: "Salvador Hara",
    online: "online",
  }
  return (
    <div className="App">
      <Contact
        image = {Ilyas.image}
        name = {Ilyas.name}
        online = {Ilyas.online}
      />
    </div>
  );
}


