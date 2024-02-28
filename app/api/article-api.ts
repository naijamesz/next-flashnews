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
}
*/
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
}
*/
import { Article, ArticleListResponse } from '../types/article-type';

export class ArticleApi {
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
}