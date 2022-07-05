export interface INews {
    status: string;
    totalResults: number;
    articles: NewsData[];
}

export type NewsData = {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: {
        id: string;
        name: string;
    };
    title: string;
    url: string;
    urlToImage: string;
};

export interface ISources {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    content: string;
}
