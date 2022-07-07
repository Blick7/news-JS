import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { INews, ISources } from '../../types/index';

class App {
    controller: AppController;
    view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        (document.querySelector('.sources') as HTMLTemplateElement).addEventListener('click', (e) =>
            this.controller.getNews(e, (data?: INews) => this.view.drawNews(data))
        );
        this.controller.getSources((data?: ISources) => this.view.drawSources(data));
    }
}

export default App;
