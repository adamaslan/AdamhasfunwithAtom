import { Provider } from "react-redux";
import { useStore } from "./redux/store";
import logo from "./logo.svg";
import "./App.css";
import Ideas from "./HappyBoi";
import styled from "styled-components";
import Selection from "./Selection";
import Statey1  from "./Statey";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-gap: 5px;
  grid-template-areas: auto;
  justify-content: space-around;
`;

const Item = styled.div`
  display: flex;
  padding: 0.5 rem;
  border: 5px solid black;
  border-radius: 9px;
  justify-content: center;
`;

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
<Grid>
    <div className="App">

<Item>
  <Butt> Hiiii</Butt >
</Item>

<Item>
<Statey1 />
</Item>
    </div>
<Item>
<Ideas />
</Item>
<Selection />
</Grid>
    </Provider>
     );
   }

   export default App;
