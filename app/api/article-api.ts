import { FAKE_ALL_ARTICLES, FAKE_ARTICLE_BY_CATEGORIES, FAKE_LATEST_ARTICLES, delayResponse } from '../lib/mock';
import { Article, ArticleCategory } from '../types/article-type';

const DEFAULT_PARAMS = 'language=en&country=us';

export class ArticleApi {
  static async fetchToday(): Promise<Article[]> {
    // return (
    //   (await (
    //     await fetch(
    //       `${process.env.API_BASE_URL}?apiKey=${process.env.API_KEY}&${DEFAULT_PARAMS}`
    //     )
    //   ).json()) as ArticleListResponse
    // ).results;
    return delayResponse(FAKE_LATEST_ARTICLES, 1000);
  }
  static async fetchByCategory(category: ArticleCategory): Promise<Article[]> {
    // return (
    //   (await (
    //     await fetch(
    //       `${process.env.API_BASE_URL}?apiKey=${process.env.API_KEY}&${DEFAULT_PARAMS}
    //       &category=${category}`
    //     )
    //   ).json()) as ArticleListResponse
    // ).results;
    return FAKE_ARTICLE_BY_CATEGORIES[category];
  }
  static async fetchByTitle(title: string): Promise<Article> {
    // const formatedTitle = title.replace("/:/g", "");
    // return (
    //   (await (
    //     await fetch(
    //       `${process.env.API_BASE_URL}?apiKey=${process.env.API_KEY}&${DEFAULT_PARAMS}
    //       &qInTitle=${formatedTitle}`
    //     )
    //   ).json()) as ArticleListResponse
    // ).results[0];
    return FAKE_ALL_ARTICLES.find(article => article.title === decodeURIComponent(title)) as Article;
  }
}

/* import { delayResponse } from '../lib/mock';
import { Article, ArticleCategory, ArticleListResponse } from '../types/article-type';

export class ArticleApi {
  static async fetchToday(): Promise<Article[]> {
    return delayResponse(
      ((await (await fetch(`${process.env.API_BASE_URL}`)).json()) as ArticleListResponse).results,
      2000
    );
  }
  static async fetchByCategory(category: ArticleCategory): Promise<Article[]> {
    return ((await (await fetch(`${process.env.API_BASE_URL}?category=${category}`)).json()) as ArticleListResponse)
      .results;
  }
  static async fetchByTitle(title: string): Promise<Article> {
    const formatedTitle = title.replace('/:/g', '');
    return (
      (await (await fetch(`${process.env.API_BASE_URL}?qInTitle=${formatedTitle}`)).json()) as ArticleListResponse
    ).results[0];
  }
} */

/* export class ArticleApi {
  static async fetchToday(): Promise<Article[]> {
    return delayResponse(
      (
        (await (
          await fetch(`https://newsdata.io/api/1/news?apikey=${process.env.API_KEY}&language=en&country=th`)
        ).json()) as ArticleListResponse
      ).results,
      2000
    );
  }
  static async fetchByCategory(category: ArticleCategory): Promise<Article[]> {
    const formatedCategory = category.replace;
    return (
      (await (
        await fetch(
          `https://newsdata.io/api/1/news?apikey=${process.env.API_KEY}&language=en&country=th&category=${formatedCategory}`
        )
      ).json()) as ArticleListResponse
    ).results;
  }
  static async fetchByTitle(title: string): Promise<Article> {
    const formatedTitle = title.replace('/:/g', '');
    return (
      (await (
        await fetch(
          `https://newsdata.io/api/1/news?apikey=${process.env.API_KEY}&language=en&country=th&qInTitle=${formatedTitle}`
        )
      ).json()) as ArticleListResponse
    ).results[0];
  }
} */

/* import { Article, ArticleListResponse } from '../types/article-type';

export class ArticleApi {
  static fetchByTitle: any;
  static fetchByCategory(category: string) {
    throw new Error('Method not implemented.');
  }
  static async fetchToday(): Promise<Article[]> {
    return (
      (
        (await // await fetch(`https://newsdata.io/api/1/news?apikey=${process.env.API_KEY}&language=th&country=th`)
        (
          await fetch(
            `https://newsdata.io/api/1/news?apikey=${process.env.API_KEY}&language=th&country=TH&category=technology`
          )
        ).json()) as ArticleListResponse
      ).results
    );
  }
} */
