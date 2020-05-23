import React from "react";
import HobbyList from "./components/Hobby/HobbyList";
import Guarantee from "./components/Guarantee/Guarantee";
import Counter from "./components/Counter/Counter";

import deliveryIcon from "./assets/f-delivery.png";
import coinIcon from "./assets/coin.png";
import chatIcon from "./assets/chat.png";

function App() {
  return (
    <div className="App">
      <HobbyList />
      <div className="row">
        <Guarantee
          img={deliveryIcon}
          title="Free shipping"
          description=" free shipping"
        />
        <Guarantee
          img={coinIcon}
          title="100% Money back"
          description=" returning product"
        />
        <Guarantee
          img={chatIcon}
          title="Online support 24/7"
          description="online support"
        />
      </div>
      <Counter />
    </div>
  );
}

export default App;
