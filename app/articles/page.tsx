import { ArticlePreview } from "@/components/layout/article";

const getData = async () => {
  return {
    articles: [
      {
        id: "11111",
        title: "My 1 article",
        description: "Review of Next JS 13",
        formatedDate: "12/03/2013",
      },
    ],
  };
};

const ArticlesPage = async () => {
  const data = await getData();

  return (
    <section className="p-4">
      <p className="text-5xl">Hello from Articles</p>
      <section className="mt-2">
        {data.articles && data.articles.length > 0
          ? data.articles.map((a) => <ArticlePreview key={a.id} article={a} />)
          : null}
      </section>
    </section>
  );
};

export default ArticlesPage;
