import NewsformatBuilder from "../../src/newsformat/newsformat-builder";

describe('NewsformatBuilder', async () => {

    test('apply several removeTrailingSpace rules', async () => {
      const builder = new NewsformatBuilder("<ul><li><ul><li> Hello World </li></ul></li></ul>");

      const newsformat = builder
          .removeNestedLists()
          .build();

      expect(newsformat.getHtml().documentElement.outerHTML).toBe("<ul><li></li><li> Hello World </li></ul>");

    });

});
