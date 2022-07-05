import './news.css';
import { NewsData } from '../../../types/index';

class News {
    draw(data: NewsData[]) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item: NewsData, idx: number) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as HTMLTemplateElement;

            if (idx % 2) (newsClone.querySelector('.news__item') as HTMLMetaElement).classList.add('alt');

            (newsClone.querySelector('.news__meta-photo') as HTMLMetaElement).style.backgroundImage = `url(${
                item.urlToImage || 'img/news_placeholder.jpg'
            })`;
            (newsClone.querySelector('.news__meta-author') as HTMLMetaElement).textContent =
                item.author || item.source.name;
            (newsClone.querySelector('.news__meta-date') as HTMLMetaElement).textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            (newsClone.querySelector('.news__description-title') as HTMLMetaElement).textContent = item.title;
            (newsClone.querySelector('.news__description-source') as HTMLMetaElement).textContent = item.source.name;
            (newsClone.querySelector('.news__description-content') as HTMLMetaElement).textContent = item.description;
            (newsClone.querySelector('.news__read-more a') as HTMLMetaElement).setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        (document.querySelector('.news') as HTMLMetaElement).innerHTML = '';
        (document.querySelector('.news') as HTMLMetaElement).appendChild(fragment);
    }
}

export default News;
