import { useEffect, useState } from "react";
import { useLazyGetSummaryQuery } from "../services/article";

const Demo = () => {
  const [article, setArticle] = useState({ url: "", summary: "" });
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  const [allArticles, setAllArticles] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await getSummary({ articleUrl: article.url });

    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };

      const updatedAllArticles = [newArticle, ...allArticles];

      setArticle(newArticle);
      setAllArticles(updatedAllArticles);
    }
  };

  useEffect(() => {
    if (article.summary) {
      console.log(article.summary);
    }
  }, [article.summary]);

  return (
    <form
      onSubmit={handleSubmit}
      name="article-summary-form"
      className="flex w-[85%] bg-white items-center justify-center rounded-md overflow-hidden shadow-lg"
    >
      <input
        className="w-full p-2"
        type="url"
        placeholder="Enter article URL"
        value={article.url}
        onChange={(e) => setArticle({ ...article, url: e.target.value })}
        required
      />
      <button
        type="submit"
        className="bg-black hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-r transition duration-300 ease-in-out"
      >
        Summarize
      </button>
    </form>
  );
};

export default Demo;
