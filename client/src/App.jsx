import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import RegistrationPage from "./pages/RegistrationPage";
import Loader from "./pages/LoadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true); // Default to false, so the loader starts

  return (
    <div>
      <ToastContainer />
      {isLoading && <Loader setIsLoading={setIsLoading} />}{" "}
      {/* Show Loader if loading */}
      {!isLoading && <RegistrationPage />}{" "}
      {/* Show RegistrationPage after loading */}
    </div>
  );
}

export default App;
