import "./App.css";
import Singlecard from "./singlecard";
import * as React from "react";
import { useState } from "react";
import CardForm from "./components/CardForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HistoryPage from "./components/HistoryPage";

const DEMO = [
  {
    id: "1",
    name: "sachin",
    link: "https://www.youtube.com/embed/eXgw8wN4OwQ",
    type: "Entertainment",
  },
  {
    id: "2",
    name: "debraj",
    link: "https://www.youtube.com/embed/eXgw8wN4OwQ",
    type: "Education",
  },
  {
    id: "3",
    name: "sachin",
    link: "https://www.youtube.com/embed/eXgw8wN4OwQ",
    type: "Entertainment",
  },
  {
    id: "4",
    name: "sachin",
    link: "https://www.youtube.com/embed/eXgw8wN4OwQ",
    type: "Entertainment",
  },
];

function App() {
  const [history, setHistory] = useState([]);
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [type, setType] = useState("Entertainment");
  const [cards, setCards] = useState(DEMO);

  // 0: show all
  // 1: entertainment
  // 2: education
  const [display, setDisplay] = useState(0);

  const handleClick = (e) => {
    e.preventDefault();
    const newcard = {
      id: Math.random().toString(),
      name: name,
      link: link,
      type: type,
    };
    setCards((copycard) => {
      return [...copycard, newcard];
    });
    setName("");
    setType("Entertainment");
    setLink("");
  };

  // const handleChange = (e) =>{
  //    e.preventDefault();
  //   console.log(e.target.value);
  //   setType(e.target.value);
  // }

  return (
            <div className="App">
              <h1 className="Card_App">Card App</h1>
              <CardForm
                className="CardForm"
                name={name}
                setName={setName}
                type={type}
                setType={setType}
                link={link}
                setLink={setLink}
                payload="create"
                handleClick={handleClick}
              />
              <div className="buttons">
                <button onClick={() => setDisplay(0)} className="show_all">
                  Show All
                </button>
                <button onClick={() => setDisplay(1)} className="Entertainment">
                  Entertainment Bucket
                </button>
                <button onClick={() => setDisplay(2)} className="Education">
                  Education Bucket
                </button>
              </div>

              <div className="container grid grid-4-col">
                {cards
                  .filter((item) => {
                    if (display === 1) return item.type === "Entertainment";
                    else if (display === 2) return item.type === "Education";
                    else return item;
                  })
                  .map((card, index) => {
                    return (
                      <Singlecard
                        className="cardslist"
                        key={index}
                        id={index}
                        card={card}
                        cards={cards}
                        setCards={setCards}
                        setHistory={setHistory}
                      />
                    );
                  })}
              </div>
              <HistoryPage history={history} />
            </ div>
  );
}

export default App;
