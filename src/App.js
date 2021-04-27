import "./App.css";
import Dashboard from "./components/Dashboard";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth='md'>
        <Dashboard />
      </Container>
    </>
  );
}

export default App;
