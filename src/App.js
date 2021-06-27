import { Provider } from "react-redux";
import { useStore } from "./redux/store";
import logo from "./logo.svg";
import "./App.css";
import Ideas from "./HappyBoi";
import styled from "styled-components";

const Butt = styled.button`
  background: palevioletred;
  border-radius: 3000px;
  border: black;
  color: white;
`
function App() {
  const store = useStore();

  return (
    <Provider store={store}>
    <div className="App">
  <Butt> Hiiii</Butt >



    </div>

<Ideas />

//choose the theme u want 
<select>
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option selected value="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select>
    </Provider>
     );
   }

   export default App;
