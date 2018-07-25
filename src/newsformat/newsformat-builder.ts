import Newsformat from "./newsformat";
import moveNestedLists from "../rules/moveNestedLists";
import removeTrailingSpace from "../rules/removeTrailingSpace";

export default class NewsformatBuilder {

    private html: Document;

    constructor(html: string) {
        this.html = new DOMParser().parseFromString(html, "text/xml");
    }

    removeNestedLists(): NewsformatBuilder {
        this.html = moveNestedLists(this.html);
        return this;
    }

    removeTrailingSpace(): NewsformatBuilder {
        this.html = removeTrailingSpace(this.html);
        return this;
    }

    build(): Newsformat {
        return new Newsformat(this.html);
    }

}
