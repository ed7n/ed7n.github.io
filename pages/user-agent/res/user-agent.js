"use strict";

const NUL_ELEMENT = Object.freeze(document.createElement(null));
const NUL_OBJECT = Object.freeze({});
const NUL_STRING = "";
const SPACE = " ";
const ITEM_CLOSE = "</li>";
const ITEM_OPEN = "<li>";

const MERRY_DELAY = 100;
const OUTPUT_PREFIX = "user-agent-";
const GEOLOCATION_OPTIONS = Object.freeze({ enableHighAccuracy: true });
const PROPERTIES = Object.freeze([
  "appCodeName",
  "appName",
  "appVersion",
  "buildID",
  "canShare",
  "cookieEnabled",
  "deviceMemory",
  "doNotTrack",
  "hardwareConcurrency",
  "javaEnabled",
  "language",
  "languages",
  "maxTouchPoints",
  "mimeTypes",
  "onLine",
  "oscpu",
  "pdfViewerEnabled",
  "platform",
  "plugins",
  "product",
  "productSub",
  "securitypolicy",
  "standalone",
  "taintEnabled",
  "userAgent",
  "userAgentData",
  "vendor",
  "vendorSub",
  "webdriver",
]);
const SHARE_DATA = Object.freeze({
  text: "Use your device as a vibrator.",
  url: location + "#fun",
});

const root = qs(document, "article");
const fun = qs(root, "#fun");
const sensation = qs(root, "#sensation");

function qs(element = NUL_ELEMENT, query = NUL_STRING) {
  return element.querySelector(query);
}

function parse(data) {
  switch (typeof data) {
    case "bigint":
    case "boolean":
    case "number":
    case "string":
      return String(data);
    case "function":
      return parse(data.apply(navigator));
    case "object":
      if (data === null) {
        return "(null)";
      }
      if (Array.isArray(data)) {
        return formatList(data);
      }
      return formatTree(data);
    default:
      return "(" + typeof data + ")";
  }
}

function formatList(items = NUL_OBJECT, formatter = formatterNul) {
  const values = Object.values(items);
  if (values.length) {
    let out = NUL_STRING;
    values.forEach((value) => {
      out += ITEM_OPEN + formatter(value) + ITEM_CLOSE;
    });
    return out;
  }
  return NUL_STRING;
}

function formatTree(
  items = NUL_OBJECT,
  formatter = formatterNul,
  indent = SPACE + SPACE
) {
  let out = "{\n";
  Object.entries(items).forEach(([key, value]) => {
    out += indent + key + ": ";
    out +=
      typeof value === "object"
        ? formatTree(value, formatter, indent + SPACE + SPACE)
        : formatter(value);
    out += "\n";
  });
  return out + indent.substring(2) + "}";
}

function formatterMimeType(item = NUL_OBJECT) {
  return item.type;
}

function formatterPlugin(item = NUL_OBJECT) {
  return item.name;
}

function formatterNul(item) {
  return item;
}

function setHtml(key = NUL_STRING, value = NUL_STRING) {
  qs(root, "#" + OUTPUT_PREFIX + key).innerHTML = value;
}

function vibrate() {
  if (sensation.reportValidity()) {
    navigator.vibrate(sensation.value);
  }
}

function locate() {
  navigator.geolocation.getCurrentPosition(
    doLocateSuccess,
    doLocateFailure,
    GEOLOCATION_OPTIONS
  );
}

function doLocateSuccess(position = NUL_OBJECT) {
  const coords = position.coords;
  if (coords) {
    alert(
      coords.latitude +
        ", " +
        coords.longitude +
        " (±" +
        coords.accuracy +
        " m)"
    );
  } else {
    alert("Bad `GeolocationPosition` object.");
  }
}

function doLocateFailure(error = NUL_OBJECT) {
  if (error.message) {
    alert(error.message);
  } else {
    alert("Bad `GeolocationPositionError` object.");
  }
}

function gauge() {
  try {
    navigator.getBattery().then((battery) => {
      alert(
        "The battery is " +
          (battery.charging
            ? battery.level === 1.0
              ? "charged"
              : "charging"
            : "discharging") +
          " at " +
          Math.ceil(battery.level * 100) +
          "%" +
          (battery.level === 1.0
            ? "."
            : " with about " +
              Math.ceil(
                (battery.charging
                  ? battery.chargingTime
                  : battery.dischargingTime) / 60
              ) +
              " minute(s) to " +
              (battery.charging ? "full" : "empty") +
              ".")
      );
    });
  } catch (error) {
    alert(error);
  }
}

function merry() {
  if (sensation.reportValidity()) {
    root.style.setProperty(
      "--userAgentSensation",
      sensation.value / 1000 + "s"
    );
    fun.classList.remove("merry");
    setTimeout(doMerry, MERRY_DELAY);
  }
}

function doMerry() {
  fun.classList.add("merry");
}

function share() {
  return doShare();
}

async function doShare() {
  try {
    await navigator.share(SHARE_DATA);
  } catch (error) {
    alert(error);
  }
}

function panic() {
  panicking = true;
  audio.resume();
}

function unPanic() {
  panicking = false;
  audio.suspend();
}

Object.values(PROPERTIES).forEach((property) => {
  let out = navigator[property];
  switch (property) {
    case "mimeTypes":
      out = formatList(out, formatterMimeType);
      break;
    case "plugins":
      out = formatList(out, formatterPlugin);
      break;
    case "userAgentData":
      out = out ? formatTree(out.toJSON()) : parse(out);
      break;
    default:
      out = parse(out);
  }
  setHtml(property, out);
});
setHtml("length", parse(history.length));
setHtml("scrollRestoration", parse(history.scrollRestoration));
setHtml("referrer", parse(document.referrer));
