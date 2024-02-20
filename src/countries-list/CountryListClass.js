import React from "react";
export class CountryListClass extends React.Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      error: "",
    };
  }
  getCountriesData = () => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => {
        console.log("Before JSON", response);
        return response.json();
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

        this.setState({
          error: "",
          countries,
        });
      })
      .catch((err) =>
        this.setState({
          ...this.state,
          error: err.messsage,
        })
      );
  };
  componentDidMount() {
    this.getCountriesData();
  }
  render() {
    return (
      <div>
        <h1>Country List</h1>
        {this.state.error}
        <ul>
          {this.state.countries.map((country) => (
            <li key={country.id}>{country.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
