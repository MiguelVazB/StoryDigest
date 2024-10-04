import { useEffect, useState } from "react";
import { useLazyGetSummaryQuery } from "../services/article";

const Demo = () => {
  const [article, setArticle] = useState({ url: "", summary: "" });
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  const [allArticles, setAllArticles] = useState([]);

  const [articleSummary, setArticleSummary] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await getSummary({ articleUrl: article.url });

    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };

      const updatedAllArticles = [newArticle, ...allArticles];

      setArticle(newArticle);
      setAllArticles(updatedAllArticles);

      localStorage.setItem("articles", JSON.stringify(updatedAllArticles));
    }
  };

  // Loads all articles from local storage
  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem("articles")
    );

    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage);
    }
  }, []);

  useEffect(() => {
    if (article.summary) {
      console.log(article.summary);
    }
  }, [article.summary]);

  return (
    <div className="w-[85%] flex flex-col gap-20 items-center justify-center">
      <form
        onSubmit={handleSubmit}
        name="article-summary-form"
        className="flex w-full bg-white items-center justify-center rounded-md overflow-hidden shadow-lg"
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
          className="bg-black hover:bg-gray-800 text-white font-semibold p-3 rounded-r transition duration-300 ease-in-out"
        >
          Summarize
        </button>
      </form>
      <div className="w-full flex justify-center items-center flex-col gap-6">
        <div className="text-xl font-bold">Recent Summaries</div>
        <li className="w-full flex justify-center items-center flex-col gap-6">
          {allArticles.map((article, index) => (
            <ul
              key={index}
              className="hover:bg-gray-100 transition duration-300 ease-in-out text-sm shadow-lg text-black bg-white w-full p-2 rounded-md text-center flex justify-between align-middle items-center"
            >
              <a
                href={article.url}
                target="_blank"
                className="hover:text-blue-500 cursor-pointer"
                title="Open in new tab"
              >
                {article.url.replace("https://", "")}
              </a>
              <button className="bg-black w-fit hover:bg-gray-800 text-white font-semibold p-3 rounded-md transition duration-300 ease-in-out">
                Digest
              </button>
            </ul>
          ))}
        </li>
      </div>
      <div>Summary of the article {articleSummary}</div>
    </div>
  );
};

export default Demo;
