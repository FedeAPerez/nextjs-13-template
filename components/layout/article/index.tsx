import { ARTICLE_PREVIEW } from "@/utils/links";
import { FC } from "react";

type Props = {
  article: Article;
};

export const ArticlePreview: FC<Props> = ({ article }) => {
  return (
    <a
      href={ARTICLE_PREVIEW.goArticlePage(article.id)}
      className="p-4 block rounded border-2 border-green-200 w-fit"
    >
      <h1>{article.title}</h1>
      <p>{article.description}</p>
      <p>{article.formatedDate}</p>
    </a>
  );
};
