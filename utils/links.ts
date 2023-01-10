import { URLS } from "./urls";

type Header = {
  main: Link;
  links: Link[];
};

export const HEADER: Header = {
  main: { label: "Home Page", url: URLS.NAVIGATE.HOME },
  links: [{ label: "Articles", url: URLS.NAVIGATE.ARTICLES }],
};

export const ARTICLE_PREVIEW = {
  goArticlePage: (id: string) => URLS.NAVIGATE.ARTICLE_PAGE(id),
};
