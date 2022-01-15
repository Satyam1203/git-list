import { useState, useEffect } from "react";
import { request } from "../helpers/request";
import Card from "./Card";
import Loader from "./Loader";

export default function ProfileDetails({ username = "satyam1203", count }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);
  const pages = Array.from({ length: Math.ceil(count / 6) }, (_, i) => i + 1);

  useEffect(() => {
    setLoading(true);
    (async function () {
      const response = await request(
        `https://api.github.com/users/${username}/repos?per_page=6&page=${currentPage}&sort=created`
      );
      setRepositories(response);
      setLoading(false);
    })();
  }, [username, currentPage]);

  useEffect(() => setCurrentPage(1), [username]);

  console.log(repositories);

  return (
    <main className="repositories-wrapper">
      {loading ? (
        <Loader />
      ) : (
        <section className="repositories">
          {repositories?.map((repo) => (
            <Card key={repo.id} repo={repo} />
          ))}
        </section>
      )}
      {count > 6 && (
        <div className="pagination-buttons">
          <button
            className="fas fa-angle-double-left"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          ></button>
          {pages.map((page) => (
            <button
              className={currentPage === page ? "active" : undefined}
              key={page}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
          <button
            className="fas fa-angle-double-right"
            disabled={currentPage === Math.ceil(count / 6)}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          ></button>
        </div>
      )}
    </main>
  );
}
