import { useState, useEffect } from "react";

import { request } from "./helpers/request";
import Header from "./components/Header";
import ProfileDetails from "./components/ProfileDetails";
import Repositories from "./components/Repositories";
import Loader from "./components/Loader";

function App() {
  const [username, setUsername] = useState("johnpapa");
  const [userDetails, setUserDetails] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    (async function () {
      const res = await request(`https://api.github.com/users/${username}`);
      if (res === 404) {
        setUserDetails("");
        setError("Invalid Username. Please try again.");
      } else {
        setUserDetails(res);
      }
      setLoading(false);
    })();
  }, [username]);

  return (
    <div className="App">
      <Header setUsername={setUsername} />
      {error ? (
        <div className="center">{error}</div>
      ) : loading ? (
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
