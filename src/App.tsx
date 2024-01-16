import { useState } from "react";

import { Button } from "@chakra-ui/react";
import { ExampleModal } from "./components/ExampleModal/ExampleModal";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button
        bg="blue.100"
        onClick={() => console.log("This button was clicked!")}
      >
        This button does nothing
      </Button>
      <ExampleModal />
    </>
  );
}

export default App;
