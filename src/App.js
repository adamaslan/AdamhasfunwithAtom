import { Provider } from "react-redux";
import { useStore } from "./redux/store";
import logo from "./logo.svg";
import "./App.css";
import Ideas from "./HappyBoi";
import styled from "styled-components";
import Selection from "./Selection";
import Statey1  from "./Statey";


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


<Statey1 />
    </div>

<Ideas />
<Selection />

    </Provider>
     );
   }

   export default App;
