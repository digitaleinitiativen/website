import assert from "node:assert/strict";
import { test } from "node:test";
import { frontMatter, htmlToMarkdown, slugify } from "./lib/convert.mjs";

test("slugify keeps German readable", () => {
  assert.equal(slugify("Über uns: Vinylcutter 101!"), "ueber-uns-vinylcutter-101");
  assert.equal(slugify("???"), "seite");
});

test("converts HTML with tables, images and rewritten links", () => {
  const md = htmlToMarkdown(
    '<h2>Sicherheit</h2><p>Nie mehr als <strong>60%</strong>. <a href="/wiki/spaces/MR/pages/1">FAQ</a></p>' +
      '<img src="/download/attachments/1/bild.png" alt="Laser">' +
      "<table><thead><tr><th>A</th><th>B</th></tr></thead><tbody><tr><td>1</td><td>2</td></tr></tbody></table>",
    (url, kind) => (kind === "image" ? "/wiki-files/1/bild.png" : "/wiki/faq/"),
  );
  assert.match(md, /^## Sicherheit/);
  assert.match(md, /\*\*60%\*\*/);
  assert.match(md, /\[FAQ\]\(\/wiki\/faq\/\)/);
  assert.match(md, /!\[Laser\]\(\/wiki-files\/1\/bild\.png\)/);
  assert.match(md, /\| A \| B \|/);
});

test("front matter quotes strings and drops empty values", () => {
  assert.equal(frontMatter({ title: 'Say "hi": ok', order: 2, x: undefined }), '---\ntitle: "Say \\"hi\\": ok"\norder: 2\n---\n\n');
});
