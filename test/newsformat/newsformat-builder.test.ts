import NewsformatBuilder from "../../src/newsformat/newsformat-builder";

describe('NewsformatBuilder', async () => {

    test('apply removeTrailingSpace rule', async () => {
      const builder = new NewsformatBuilder("<div> Hello my name is Niklas </div>");
      const newsformat = builder
        .removeTrailingSpace()
        .build();
      expect(newsformat.getHtml().firstChild.textContent).toBe("Hello my name is Niklas");
    });

    test('apply several removeTrailingSpace rules', async () => {
      const builder = new NewsformatBuilder("<ul><li><ul><li> Hello World </li></ul></li></ul>");

      const newsformat = builder
          .removeTrailingSpace()
          .removeNestedLists()
          .build();

      expect(newsformat.getHtml().firstChild.lastChild.textContent).toBe("Hello World");
      expect(newsformat.getHtml().documentElement.outerHTML).toBe("<ul><li></li><li> Hello World </li></ul>");
    });

});
