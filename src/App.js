import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RoutesPage from "./components/Routes/RoutesPage";

function App() {
  const renderApp = () => {
    return <RoutesPage />;
  };
  return <div className="App">{renderApp()}</div>;
}

export default App;
