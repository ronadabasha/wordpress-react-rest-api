import useFetch from "../hooks/useFetch";
import Card from "./Card";

function Posts() {
  const { data, loading, error } = useFetch("/wp-json/wp/v2/posts");

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="max-w-screen-xl px-6 mx-auto py-10 md:py-20">
      <div className="flex flex-col md:flex-row md:flex-wrap pt-6 md:pt-16">
        {data?.map((post) => (
          <Card item={post} />
        ))}
      </div>
    </div>
  );
}

export default Posts;
