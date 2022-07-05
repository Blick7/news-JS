export interface INews {
    status: string;
    totalResults: number;
    archive: NewsData[];
}

type NewsData = {
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
    status: string;
    sources: SourcesData[];
}

type SourcesData = {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    content: string;
};
