const fs = require("fs");

const input = "public/stitch/explorer/body.html";
const output = "components/explorer/OceanExplorer.tsx";

let html = fs.readFileSync(input, "utf8");

// Basic HTML → JSX conversions
html = html
    .replace(/\bclass=/g, "className=")
    .replace(/\bfor=/g, "htmlFor=")
    .replace(/\btabindex=/g, "tabIndex=")
    .replace(/\breadonly\b/g, "readOnly")
    .replace(/\bmaxlength=/g, "maxLength=")
    .replace(/\bcellpadding=/g, "cellPadding=")
    .replace(/\bcellspacing=/g, "cellSpacing=")
    .replace(/\bcolspan=/g, "colSpan=")
    .replace(/\browspan=/g, "rowSpan=")
    .replace(/<!--[\s\S]*?-->/g, "");

// React requires self-closing void elements
const voidElements = [
    "area",
    "base",
    "br",
    "col",
    "embed",
    "hr",
    "img",
    "input",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr"
];

for (const tag of voidElements) {
    const regex = new RegExp(`<${tag}([^>]*?)(?<!/)\\s*>`, "gi");
    html = html.replace(regex, `<${tag}$1 />`);
}

const component = `"use client";

export default function OceanExplorer() {
  return (
    <>
      ${html}
    </>
  );
}
`;

fs.mkdirSync("components/explorer", { recursive: true });
fs.writeFileSync(output, component);

console.log(`Converted Stitch Explorer → ${output}`);