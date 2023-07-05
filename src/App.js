import './App.css';
import {Card} from "./components/Card";
import './shared/styles/styles.scss';
import {StateComponent} from "./components/StateComponent";
function App() {

  return (
      <div className="App">
        {/*<Card isCardHovered={true}/>*/}
        <StateComponent
            title='React JS'
        />
      </div>
  );
}

export default App;
