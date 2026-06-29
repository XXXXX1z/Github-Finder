import { useState } from "react";
import "./app.css";
import searchIcon from "./assets/search-icon.png";
import Infocard from "./infocard";

export default function App() {
  const [username, SetUsername] = useState("");
  const [user, SetUser] = useState(null);
  const [error, SetError] = useState(null);

  async function handleClick() {
    SetError(null);
    SetUser(null);

    if (!username.trim()) {
      SetError("Please enter Github username");
    }

    const response = await fetch(
      `http://localhost:3000/api/github/${username}`,
    );

    const data = await response.json();

    if (!response.ok) {
      SetError(data.error || "Something went wrong");
      return;
    }

    SetUser(data);
  }

  return (
    <section className="app">
      <h1>GitHub User Fetcher</h1>
      <p className="app-subtitle">Search a GitHub username to fetch user information</p>
      <div className="search-row">
        <div className="search-field">
          <img className="search-icon" src={searchIcon} alt="" />
          <input
            type="text"
            value={username}
            onChange={(event) => {
              SetUsername(event.target.value);
            }}
          />
        </div>
        <button onClick={handleClick} className="btn">
          Search
        </button>
      </div>

      {error && <p className="error">{error}</p>}

      {user && <Infocard user={user} />}
    </section>
  );
}
