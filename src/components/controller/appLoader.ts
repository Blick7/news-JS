import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: '74dd3b3fa8ab43e6a92e9d8bee1b0a83', // get api key https://newsapi.org/
        });
    }
}

export default AppLoader;
