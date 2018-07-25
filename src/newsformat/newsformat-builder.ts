import Newsformat from "./newsformat";
import removeNestedLists from "../rules/removeNestedLists";

export default class NewsformatBuilder {

    private html: Document;

    constructor(html: string) {
        this.html = new DOMParser().parseFromString(html, "text/xml");
    }

    removeNestedLists(): NewsformatBuilder {
        this.html = removeNestedLists(this.html);
        return this;
    }

    build(): Newsformat {
        return new Newsformat(this.html);
    }

}
