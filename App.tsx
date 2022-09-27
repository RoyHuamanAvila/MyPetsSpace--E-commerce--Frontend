import Navigation from "./Navigation";
import { ContextPetProvider } from "./src/context/index";

const App = () => {
  return (
    <ContextPetProvider>
      <Navigation />
    </ContextPetProvider>
  )
}

export default App;
