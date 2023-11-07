import "./styles/normalize.css"
import { Header } from "../pages/Header";
import { useRouts } from './providers/routesConfig';

function App() {
  const routs = useRouts();

  return (
    <div className="App">
      <Header />
      {routs}
    </div>
  );
}

export default App;
