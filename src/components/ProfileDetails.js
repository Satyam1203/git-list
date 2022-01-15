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
        <p className="bio">{userDetails.bio}</p>
        <p className="location">
          <i className="fas fa-map-marker-alt" />
          &nbsp;
          {userDetails.location}
        </p>
        <p className="twitter-url">{userDetails.twitter_username}</p>
      </div>
    </div>
  );
}
