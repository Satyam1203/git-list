export default function ProfileDetails({ userDetails }) {
  return (
    <div className="profile-details">
      <div className="image">
        <img src={userDetails.avatar_url} alt="github-avatar" />
        <p className="github-url">
          <i className="fab fa-github" />
          &nbsp;
          <a href={userDetails.html_url}>{userDetails.html_url}</a>
        </p>
      </div>

      <div className="about">
        <h2>{userDetails.name}</h2>
        {userDetails.bio && <p className="bio">{userDetails.bio}</p>}
        {userDetails.location && (
          <p className="location">
            <i className="fas fa-map-marker-alt" />
            &nbsp;
            {userDetails.location}
          </p>
        )}
        {userDetails.twitter_username && (
          <p className="twitter-url">
            <i className="fab fa-twitter"></i>&nbsp;
            <a href={`https://twitter.com/${userDetails.twitter_username}`}>
              https://twitter.com/
              {userDetails.twitter_username}
            </a>
          </p>
        )}
      </div>
    </div>
  );
}
