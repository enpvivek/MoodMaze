import { Route, Routes } from "react-router-dom";
import Land from "./pages/landingpage";
import Kanban from "./pages/Activity";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Land/>} />
        <Route path="/Activity" element={ <Kanban/>} />
      </Routes>
    </div>
  );
}

export default App;
