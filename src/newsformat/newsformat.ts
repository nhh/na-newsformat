export class Newsformat {

    private readonly html: Document;

    constructor(html: Document) {
        this.html = html;
    }

    getHtml(): Document {
        return this.html;
    }

}
