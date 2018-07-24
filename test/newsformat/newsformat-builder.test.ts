import NewsformatBuilder from "../../src/newsformat/newsformat-builder";

describe('NewsformatBuilder', async () => {

    test('apply removeTrailingSpace rule', async () => {

      const div = document.createElement("div");
      div.innerText = "Hello my name is Niklas ";

      const builder = new NewsformatBuilder(div);
      const newsformat = builder
        .removeTrailingSpace()
        .build();
      expect(newsformat.getHtml().innerText).toBe("Hello my name is Niklas");
    });

    test('apply several removeTrailingSpace rules', async () => {
      const div = document.createElement("div");
      div.innerText = " Hello World ";
      div.innerHTML = "<ul><li><ul><li> Hello World </li></ul></li></ul>";

      const builder = new NewsformatBuilder(div);

      const newsformat = builder
          .removeTrailingSpace()
          .removeNestedLists()
          .build();

      expect(newsformat.getHtml().innerText).toBe("Hello World");
      expect(newsformat.getHtml().innerHTML).toBe("<ul><li></li><li> Hello World </li></ul>");
    });

});
