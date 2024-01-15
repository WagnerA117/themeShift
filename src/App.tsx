import { useState } from "react";

import { Button } from "@chakra-ui/react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button bg="blue.100">This button does nothing</Button>
    </>
  );
}

export default App;
