import { useEffect, useState } from "react";

export function DataFetcher() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => {
        if (!res.ok) throw new Error("Network error");
        return res.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Data Fetcher</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {!loading &&
        !error &&
        data.map((post) => (
          <div key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
            <hr />
          </div>
        ))}
    </div>
  );
}
