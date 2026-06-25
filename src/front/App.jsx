import { useState } from "react";
import "./app.css";

export default function App() {
  const [username, SetUsername] = useState("");
  const [user, SetUser] = useState(null);

  async function handleClick() {
    const response = await fetch(
      `http://localhost:3000/api/github/${username}`,
    );

    const data = await response.json();

    SetUser(data);
  }

  return (
    <div className="app">
      <h1>GitHub Profile Search </h1>
      <input
        type="text"
        value={username}
        onChange={(event) => {
          SetUsername(event.target.value);
        }}
      />
      <button onClick={handleClick} className="btn">
        Click
      </button>
      {user && (
        <section className="profile-card">
          <div className="profile-main">
            <h3>{user.login}</h3>
            <span>User ID: {user.id}</span>
            <br></br>
            <span>URL: {user.url}</span>
            <br></br>
            <span>Name: {user.name}</span>
            <br></br>
            <span>Followers: {user.followers}</span>
            <br></br>
            <span>Following: {user.following}</span>
          </div>
        </section>
      )}
    </div>
  );
}
