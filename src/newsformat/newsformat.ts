export default class Newsformat {

    private readonly html: HTMLElement;

    constructor(html: HTMLElement) {
        this.html = html;
    }

    getHtml(): HTMLElement {
        return this.html;
    }

}