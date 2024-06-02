"use strict";

const mixem = qs("#mixem");
const mixerBlend = qs("#mixer-blend");
const mixerColor = qs("#mixer-color");
const mixerStage = qs("#mixer-stage");
const mixinBlend = qs("#mixin-blend");
const mixinColor = qs("#mixin-color");
const mixinStage = qs("#mixin-stage");

function qs(query) {
  return document.querySelector(query);
}

mixem.addEventListener("click", () => {
  mixerStage.style["background-color"] = mixerColor.value;
  mixerStage.style["mix-blend-mode"] = mixerBlend.value;
  mixinStage.style["background-color"] = mixinColor.value;
  mixinStage.style["mix-blend-mode"] = mixinBlend.value;
});

mixinBlend.innerHTML = mixerBlend.innerHTML;
mixem.click();
