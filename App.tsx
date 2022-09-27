import Navigation from "./Navigation";
import { ContextPetProvider } from "./src/context/Index";

const App = () => {
  return (
    <ContextPetProvider>
      <Navigation />
    </ContextPetProvider>
  )
}

export default App;
