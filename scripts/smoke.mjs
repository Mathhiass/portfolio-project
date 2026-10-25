import assert from "node:assert/strict";
const origin = process.env.TEST_URL || "http://localhost:3000";
const response = await fetch(origin);
assert.equal(response.status, 200, "Home page serves successfully");
const html = await response.text();
for (const id of [
  "home",
  "projects",
  "about",
  "experience",
  "skills",
  "contact",
]) {
  assert.ok(html.includes(`id="${id}"`), `Section ${id} exists`);
}
assert.ok(
  html.includes("mailto:bartolata.oliver@gmail.com"),
  "Real contact email is present",
);
assert.ok(
  !html.includes("https://github.com/Mathhiass/novatopup"),
  "Broken source link stays removed",
);
for (const path of [
  "/images/oliver.jpg",
  "/images/harmoniq.png",
  "/images/nova.png",
  "/Oliver_Bartolata_Resume.pdf",
  "/opengraph-image",
  "/robots.txt",
  "/sitemap.xml",
]) {
  const asset = await fetch(new URL(path, origin));
  assert.equal(asset.status, 200, `${path} serves successfully`);
  assert.ok(
    Number(asset.headers.get("content-length")) > 0 ||
      (await asset.arrayBuffer()).byteLength > 0,
    `${path} is not empty`,
  );
}
console.log(
  "Smoke checks passed: page, sections, contact, removed broken link, original assets and SEO routes.",
);
