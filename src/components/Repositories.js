import { useState, useEffect } from "react";
import { request } from "../helpers/request";
import Card from "./Card";
import Loader from "./Loader";

export default function ProfileDetails({ username, count }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [repositories, setRepositories] = useState([]);
  const [paginationBtnStart, setPaginationBtnStart] = useState(0);
  const [loading, setLoading] = useState(false);

  let pages = Array.from({ length: Math.ceil(count / 6) }, (_, i) => i + 1);

  useEffect(() => {
    setLoading(true);
    (async function () {
      const response = await request(
        `https://api.github.com/users/${username}/repos?per_page=6&page=${currentPage}&sort=pushed`
      );
      setRepositories(response);
      setLoading(false);
    })();

    return () => {
      setRepositories([]);
    };
  }, [username, currentPage]);

  useEffect(() => setCurrentPage(1), [username]);

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
            onClick={() => {
              if (paginationBtnStart && currentPage <= paginationBtnStart + 2)
                setPaginationBtnStart(paginationBtnStart - 1);
              setCurrentPage((prev) => prev - 1);
            }}
          ></button>
          {pages
            .slice(paginationBtnStart, paginationBtnStart + 10)
            .map((page) => (
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
            onClick={() => {
              if (currentPage >= 9) setPaginationBtnStart(currentPage - 8);
              setCurrentPage((prev) => prev + 1);
            }}
          ></button>
        </div>
      )}
    </main>
  );
}
