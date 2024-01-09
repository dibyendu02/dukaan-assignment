import Container from "./components/Container";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="h-min-screen flex">
      <Sidebar/>
      <Container/>
    </div>
  );
}

export default App;
