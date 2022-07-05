import './sources.css';
import { SourcesData } from '../../../types/index';

class Sources {
    draw(data: SourcesData[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item: SourcesData) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLTemplateElement;

            (sourceClone.querySelector('.source__item-name') as HTMLMetaElement).textContent = item.name;
            (sourceClone.querySelector('.source__item') as HTMLMetaElement).setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        (document.querySelector('.sources') as HTMLMetaElement).append(fragment);
    }
}

export default Sources;
