import { useEffect, useState, useRef } from "react";
import { useLazyGetSummaryQuery } from "../services/article";
import Loading from "./Loading";

const Demo = () => {
  const [article, setArticle] = useState({ url: "", summary: "" });
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  const [allArticles, setAllArticles] = useState([]);

  const summaryRef = useRef(null);

  const [visibleArticles, setVisibleArticles] = useState(3);

  const showMoreArticles = () => {
    setVisibleArticles((prev) => prev + 3);
  };

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

  const handleRecentClick = (index) => {
    let article = { ...allArticles[index], url: "" };
    setArticle(article);
  };

  useEffect(() => {
    if (article?.summary !== "") {
      summaryRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [article?.summary]);

  // Loads all articles from local storage
  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem("articles")
    );

    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage);
    }
  }, []);

  return (
    <div className="w-[85%] xl:w-[60%] flex flex-col gap-20 items-center justify-center">
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
        {isFetching ? (
          <Loading />
        ) : (
          <button
            type="submit"
            className="bg-black hover:bg-gray-800 text-white font-semibold p-3 rounded-r transition duration-300 ease-in-out"
          >
            Summarize
          </button>
        )}
      </form>
      <div className="w-full flex justify-center items-center flex-col gap-6">
        {allArticles.length > 1 && (
          <div className="text-xl font-bold">📁 Recent Summaries</div>
        )}
        <li className="w-full flex justify-center items-center flex-col gap-6">
          {allArticles.slice(0, visibleArticles).map((article, index) => (
            <ul
              key={index}
              className="hover:bg-gray-100 transition duration-300 ease-in-out text-sm shadow-lg text-black bg-white w-full p-2 rounded-md text-center flex justify-between align-middle items-center"
            >
              <a
                href={article.url}
                target="_blank"
                className="hover:text-blue-500 cursor-pointer overflow-hidden whitespace-nowrap overflow-ellipsis"
                title="Open in new tab"
              >
                {`🌐 ${article.url.replace("https://", "")}`}
              </a>
              <button
                onClick={() => handleRecentClick(index)}
                disabled={isFetching}
                className="bg-black w-fit hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-md transition duration-300 ease-in-out"
              >
                Digest
              </button>
            </ul>
          ))}
          {visibleArticles < allArticles.length && (
            <button
              onClick={showMoreArticles}
              className="bg-white hover:bg-gray-100 text-blue-700 font-bold py-2 px-4 rounded-md shadow-lg"
            >
              Show More
            </button>
          )}
        </li>
      </div>
      <div ref={summaryRef} className="mb-10 p-5 min-h-full">
        {isFetching ? (
          <Loading />
        ) : (
          <div className="flex justify-center flex-col align-middle text-center gap-4">
            {article?.summary && (
              <div className="text-3xl bg-gradient-to-r from-amber-500 to-pink-600 text-transparent bg-clip-text font-extrabold">
                Article Summary
              </div>
            )}
            <p
              key={`${article.summary}-${allArticles.indexOf(article)}`}
              className="animate-fadeIn text-left text-md xl:text-xl"
            >
              {article?.summary}
            </p>
          </div>
        )}
        {error && (
          <div className="text-red-500 text-center mt-4">
            An error occurred while fetching the summary.
          </div>
        )}
      </div>
    </div>
  );
};

export default Demo;
