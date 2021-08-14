import { Suspense } from "react";
import "./App.css";
import { AppRouter } from "./routes/routes";

function App() {
  return (
    <div className="App">
      <Suspense fallback={"Loading..."}>
        <AppRouter />
      </Suspense>
    </div>
  );
}

export default App;
