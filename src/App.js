import './App.css';
import { Container, Typography } from "@mui/material";
import Timer from './Timer';


function App() {
  return (
    <Container 
      sx={{
        height: "100vh",
      }}
      >
    <main>
      <Timer />
    </main>
    </Container>
  );
}

export default App;
 