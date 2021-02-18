{
  const LIST_CLOSING = "</ul>",
    LIST_OPENING = '<ul class="no-margin">',
    VIBRATE_DURATION = 5000,
    geolocationOptions = {
      enableHighAccuracy: true,
    },
    navigator = window.navigator,
    primitives = [
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
      "platform",
      "plugins",
      "product",
      "productSub",
      "securitypolicy",
      "standalone",
      "taintEnabled",
      "userAgent",
      "vendor",
      "vendorSub",
      "webdriver",
    ],
    shareData = {
      text: "Use your smartphone as a vibrator.",
      url: "https://ed7n.github.io/pages/user-agent#fun",
    };

  function parse(data) {
    if (typeof data === "function") return parse(data.apply(navigator));
    if (Array.isArray(data)) return formatArray(data);
    return String(data).length ? data : "";
  }

  function formatArray(items) {
    if (items.length) {
      let out = LIST_OPENING;
      for (item of items) out += "<li>" + item + "</li>";
      return out + LIST_CLOSING;
    }
    return "";
  }

  function formatMimeTypeArray(array) {
    if (array.length) {
      let out = LIST_OPENING;
      for (let index = 0; index < array.length; index++)
        out += "<li>" + array.item(index).type + "</li>";
      return out + LIST_CLOSING;
    }
    return "";
  }

  function formatPluginArray(array) {
    if (array.length) {
      let out = LIST_OPENING;
      for (let index = 0; index < array.length; index++)
        out += "<li>" + array.item(index).name + "</li>";
      return out + LIST_CLOSING;
    }
    return "";
  }

  function append(key, value) {
    document.querySelector("#ua-" + key).innerHTML = value;
  }

  function vibrate() {
    navigator.vibrate(VIBRATE_DURATION);
  }

  function getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(
      geolocationSuccess,
      geolocationError,
      geolocationOptions
    );
  }

  function geolocationSuccess(position) {
    let coords = position.coords;
    window.alert(
      "Latitude: " +
        coords.latitude +
        "\nLongitude: " +
        coords.longitude +
        "\nAccuracy: ±" +
        coords.accuracy +
        " m"
    );
  }

  function geolocationError(error) {
    window.alert(error.message);
  }

  function share() {
    navigator.share(shareData);
  }

  for (primitive of primitives) {
    let out = navigator[primitive];
    if (primitive === "mimeTypes") out = formatMimeTypeArray(out);
    else if (primitive === "plugins") out = formatPluginArray(out);
    else out = parse(out);
    append(primitive, out);
  }
  append("length", parse(window.history.length));
  append("scrollRestoration", parse(window.history.scrollRestoration));
  append("referrer", parse(document.referrer));
}
