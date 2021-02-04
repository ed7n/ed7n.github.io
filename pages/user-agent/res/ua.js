{
  const FORMATTER_CLOSING = "</code>",
    FORMATTER_OPENING = "<code>",
    LIST_CLOSING = "</ul>",
    LIST_OPENING = '<ul class="no-margin">',
    TINGLE_TIME = 5000,
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
    ];

  function parse(data) {
    if (typeof data === "function") return parse(data.apply(navigator));
    if (Array.isArray(data)) return formatArray(data);
    if (String(data).length)
      return FORMATTER_OPENING + data + FORMATTER_CLOSING;
    return "";
  }

  function formatArray(items) {
    if (items.length) {
      let out = LIST_OPENING;
      for (item of items)
        out += "<li>" + FORMATTER_OPENING + item + FORMATTER_CLOSING + "</li>";
      return out + LIST_CLOSING;
    }
    return "";
  }

  function formatMimeTypeArray(array) {
    if (array.length) {
      let out = LIST_OPENING;
      for (let index = 0; index < array.length; index++)
        out +=
          "<li>" +
          FORMATTER_OPENING +
          array.item(index).type +
          FORMATTER_CLOSING +
          "</li>";
      return out + LIST_CLOSING;
    }
    return "";
  }

  function formatPluginArray(array) {
    if (array.length) {
      let out = LIST_OPENING;
      for (let index = 0; index < array.length; index++)
        out +=
          "<li>" +
          FORMATTER_OPENING +
          array.item(index).name +
          FORMATTER_CLOSING +
          "</li>";
      return out + LIST_CLOSING;
    }
    return "";
  }

  function append(key, value) {
    document.querySelector("#ua-" + key).innerHTML = value;
  }

  function vibrate() {
    navigator.vibrate(TINGLE_TIME);
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

  for (primitive of primitives) {
    let out = navigator[primitive];
    if (primitive === "mimeTypes") out = formatMimeTypeArray(out);
    else if (primitive === "plugins") out = formatPluginArray(out);
    else out = parse(out);
    append(primitive, out);
  }
  append("length", parse(window.history.length));
  append("scrollRestoration", parse(window.history.scrollRestoration));
}
