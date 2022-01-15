import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ProfileDetails from "./components/ProfileDetails";
import Repositories from "./components/Repositories";

function App() {
  const [username, setUsername] = useState("johnpapa");

  return (
    <div className="App">
      <Header setUsername={setUsername} />
      <ProfileDetails username={username} />
      <Repositories username={username} />
    </div>
  );
}

export default App;
