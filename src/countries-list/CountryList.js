import { useEffect, useState } from "react";

function CountryList() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState("");

  const getCountriesData = () => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => {

        console.log("Before JSON", response)
        return response.json()
      })
      .then((countries) => {
        countries = countries.slice(0, 5);
        console.log(countries);
        countries = countries.map((country, idx) => {
          return {
            id: idx,
            name: country.name.official,
          };
        });
        console.log("Country list", countries);

        setCountries(countries);
      })
      .catch((err) => setError(err.messsage));
  };

  useEffect(() => {
    getCountriesData();
  }, []);

  return (
    <div>
      <h1>Country List</h1>
      {error}
      <ul>
        {countries.map((country) => (
          <li key={country.id}>{country.name}</li>
        ))}
      </ul>
    </div>
  );
}
export default CountryList;


// State and Props
// Conditional Rendering
// Looping
// useEffect
// Sharing data between components using Props
// Forms
// API Call