export default function Card({ repo }) {
  const { name, html_url, description, language, startgazers_count } = repo;
  return (
    <div className="repo-details">
      <div className="repo-title">
        <i className="fas fa-book" />
        <a href={html_url} target="_blank" rel="noreferrer">
          {name}
        </a>
      </div>
      <p className="description">{description}</p>
      <div className="repo-other-info">
        {language && <span>{language}</span>}
        <span>
          <i className="far fa-star" /> {startgazers_count || 0}
        </span>
      </div>
    </div>
  );
}
