import { Toaster } from "react-hot-toast";
import { Home } from "./pages/home";

function App() {
  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <Home />
    </div>
  );
}

export default App;
