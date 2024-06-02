"use strict";

const CLIDS = Object.freeze({
  fbclid: "Facebook Click Identifier",
  gclid: "Google Click Identifier",
  msclkid: "Microsoft Click Identifier",
  utm_source: "Urchin Tracking Module",
});
const output = document.querySelector("#notices");

for (const key of new URLSearchParams(location.search).keys()) {
  if (CLIDS[key]) {
    output.insertAdjacentHTML(
      "afterbegin",
      "<li>Found " + CLIDS[key] + " (" + key + ").</li>"
    );
  }
}
