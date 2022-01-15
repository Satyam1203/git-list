import { useState, useEffect } from "react";
import { request } from "../helpers/request";

export default function ProfileDetails({ username = "satyam1203" }) {
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    (async function () {
      const details = await request(`https://api.github.com/users/${username}`);
      setUserDetails(details);
    })();
  }, [username]);

  return (
    <div className="profile-details">
      <div className="image">
        <img src={userDetails.avatar_url} alt="github-avatar" />
        <p className="github-url">
          <i className="fab fa-github" />
          &nbsp;
          {userDetails.html_url}
        </p>
      </div>

      <div className="about">
        <h2>{userDetails.name}</h2>
        <p className="bio">{userDetails.bio}</p>
        <p className="location">
          <i class="fas fa-map-marker-alt" />
          &nbsp;
          {userDetails.location}
        </p>
        <p className="twitter-url">{userDetails.twitter_username}</p>
      </div>
    </div>
  );
}
