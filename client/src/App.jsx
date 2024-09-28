import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import "./App.css";
import RegistrationPage from "./pages/RegistrationPage";
import Loader from "./pages/LoadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true); // Default to false, so the loader starts

  return (
    <div>
      <Toaster />
      {isLoading && <Loader setIsLoading={setIsLoading} />}{" "}
      {/* Show Loader if loading */}
      {!isLoading && <RegistrationPage />}{" "}
      {/* Show RegistrationPage after loading */}
    </div>
  );
}

export default App;
