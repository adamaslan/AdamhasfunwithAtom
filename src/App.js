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
  <Butt> Hiiii</Butt >


<Statey1 />
    </div>

<Ideas />
<Selection />
</Grid>
    </Provider>
     );
   }

   export default App;
