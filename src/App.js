import "./App.css";
import "./styles/global.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import MapArea from "./components/MapArea";
import { FormContext } from "./utils/FormContext";

function App() {
  const [userGenIP, setUserGenIP] = useState("");
  const [locationData, setLocationData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const apiKey = process.env.REACT_APP_IPIFY_API_KEY;

  const fetchLocationDetails = async () => {
    try {
      const response = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${userGenIP}`
      );
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      setLocationData(jsonResponse);
      return jsonResponse;
    } catch {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchLocationDetails();
  }, []);

  function handlechange(e) {
    setUserGenIP(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ userGenIP });
    // setUserGenIP("");
  }
  return (
    <div className="app">
      <FormContext.Provider
        value={{ userGenIP, setUserGenIP, handleSubmit, handlechange }}
      >
        <Header />
        <MapArea />
      </FormContext.Provider>
    </div>
  );
}

export default App;
