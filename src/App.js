import { useState, useEffect } from "react";
import "./App.css";

import { request } from "./helpers/request";
import Header from "./components/Header";
import ProfileDetails from "./components/ProfileDetails";
import Repositories from "./components/Repositories";
import Loader from "./components/Loader";

function App() {
  const [username, setUsername] = useState("johnpapa");
  const [userDetails, setUserDetails] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    (async function () {
      const details = await request(`https://api.github.com/users/${username}`);
      setUserDetails(details);
      setLoading(false);
    })();
  }, [username]);

  return (
    <div className="App">
      <Header setUsername={setUsername} />
      {loading ? (
        <Loader />
      ) : (
        <>
          <ProfileDetails userDetails={userDetails} />
          <Repositories username={username} count={userDetails.public_repos} />
        </>
      )}
    </div>
  );
}

export default App;
