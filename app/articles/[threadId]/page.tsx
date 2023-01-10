const getData = async () => {
  return {
    article: {
      id: "11111",
      title: "My 1 article",
      description: "Review of Next JS 13",
      formatedDate: "12/03/2013",
    },
  };
};

const ArticlePage = async () => {
  const data = await getData();
  return (
    <section>
      <p className="text-5xl">Hello from Article Page</p>
      <main>
        <h1>{data.article.title}</h1>
        <p>{data.article.description}</p>
        <p>{data.article.formatedDate}</p>
      </main>
    </section>
  );
};

export default ArticlePage;
