import { useState, useEffect } from "react";
import { request } from "../helpers/request";
import Card from "./Card";

export default function ProfileDetails({ username = "satyam1203" }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    (async function () {
      const response = await request(
        `https://api.github.com/users/${username}/repos?per_page=6&page=${currentPage}&sort=created`
      );
      setRepositories(response);
    })();
  }, [username, currentPage]);

  console.log(repositories);

  return (
    <main className="repositories-wrapper">
      <section className="repositories">
        {repositories?.map((repo) => (
          <Card key={repo.id} repo={repo} />
        ))}
      </section>
      <div>
        {Array.from({ length: Math.ceil(39 / 6) }, (_, i) => i + 1).map(
          (page) => (
            <button key={page} onClick={() => setCurrentPage(page)}>
              {page}
            </button>
          )
        )}
      </div>
    </main>
  );
}
