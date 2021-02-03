{
  let keys = [
    "cookieEnabled",
    "doNotTrack",
    "hardwareConcurrency",
    "javaEnabled",
    "language",
    "onLine",
    "userAgent",
    "vendor",
    "buildID",
    "securitypolicy",
    "standalone",
    "appCodeName",
    "appName",
    "appVersion",
    "oscpu",
    "platform",
    "product",
    "productSub",
    "vendorSub"
  ];
  for (key of keys) {
    let out = window.navigator[key];
    if (typeof(out) === "function") out = out.apply(window.navigator);
    document.querySelector("#ua-" + key).innerHTML = out;
  }
}
