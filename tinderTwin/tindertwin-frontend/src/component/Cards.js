import React, { useEffect, useState } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";
import axios from "axios";

export default function TinderCards() {
  const [people, setPeople] = useState([]);

  // using axios to make req
  useEffect(() => {
    async function fetchData(){
      const req = await axios.get('https://tindertwin.herokuapp.com/tinder/cards');

      setPeople(req.data);
    }
    fetchData();
  }, []);

  console.log(people);

  //   tindercards functions
  const swiped = (direction, nameToDelete) => {
    console.log("removing", nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name, "left the screen!");
  };

  return (
    <div className="cards">
      <div className="Tindercards-cont">
        {people.map((p) => (
          <TinderCard
            className="swipe"
            key={p.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, p.name)}
            onCardLeftScreen={() => outOfFrame(p.name)}
          >
            <div className="card" >
              <img src={p.url} alt={p.name} />
              <h3>{p.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}
// style={{ background: `url(${p.url})` }}
