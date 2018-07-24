import Newsformat from "./newsformat";
import moveNestedLists from "../rules/moveNestedLists";
import removeTrailingSpace from "../rules/removeTrailingSpace";

export default class NewsformatBuilder {

    private html: HTMLElement;

    constructor(html: HTMLElement) {
        this.html = html;
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