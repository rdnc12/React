import React from "react";
import HobbyList from "./components/Hobby/HobbyList";
import Guarantee from "./components/Guarantee/Guarantee";
import Counter from "./components/Counter/Counter";

import iconList from "./components/Guarantee/Iconlist";

function App() {
  return (
    <div className="App">
      <HobbyList />
      <div className="row">
        {iconList.map((icon, index) => (
          <Guarantee
            img={icon.route}
            alt={icon.title}
            key={index}
            title={icon.title}
            description={icon.description}
          />
        ))}
      </div>
      <Counter />
    </div>
  );
}

export default App;
