import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="contacts">
          <a href="#">
            <img src="img/twitter.png" alt="twitter" />
          </a>
          <a href="#">
            <img src="img/opensea.png" alt="opensea" />
          </a>
        </div>
        <p className="title">Goblinpets</p>
        <div className="flex">
          <div className="phone">
            <div className="phone-main">
              <div className="phone-content">
                <p>uaahrgg</p>
                <p>mint</p>
                <p>arghhhuma</p>
                <p>here</p>
              </div>
              <div>
                <div className="mint-amount">
                  <div className="mint-select flex">
                    <button>-</button>
                    <p>0</p>
                    <button>+</button>
                  </div>
                  <div className="mint">
                    <p>Mint</p>
                  </div>
                </div>
                <p className="mint-supply">0/5000</p>
              </div>
            </div>
          </div>
          <div>
            <div className="content">
              <p>
                <span>5 free mints +</span> gas fee per wallet. Don't be greedy
                that's why we are here.
                <hr />
                <span>
                  We are reserving 500 goblin pets.
                  <br />
                </span>{" "}
                Because we want to.
                <hr />
                No roadmap. No Discord. No utility. CCO. <br />
                <a href="#">Contact</a> wasn't actually written by goblin pets.
              </p>
            </div>
          </div>
        </div>
        <div className="images">
          <div className="apes">
            <img src="img/Goblinpet1.png" alt="ape1" id="ape1" />
            <img src="img/Goblinpet2.png" alt="ape2" id="ape2" />
            <img src="img/Goblinpet3.png" alt="ape3" id="ape3" />
            <img src="img/Goblinpet4.png" alt="ape4" id="ape4" />
          </div>
          <img src="img/land.png" className="land" alt="land" />
        </div>
      </div>
    </div>
  );
}

export default App;
