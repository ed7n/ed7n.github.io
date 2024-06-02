/**
 * NET-Installer: Assets
 *
 * Get your list of URLs with:
 *
 * $ find . -type f -printf '  PATH_PAGE + "%P",'$'\n' | sort
 *
 * then modify it as needed.
 */

"use strict";

/** Page index path. */
const PATH_PAGE = "/";
/** Site resource path. */
const PATH_SITE = "/res/";
/** Request URLs whose response is to be cached. */
const CACHE_URLS = Object.freeze([
  PATH_PAGE + "",
  PATH_PAGE + "404",
  PATH_PAGE + "calc/about/",
  PATH_PAGE + "calc/",
  PATH_PAGE + "calc/license/",
  PATH_PAGE + "doc-lib/",
  PATH_PAGE + "doc-lib/license/",
  PATH_PAGE + "edenrm/about/",
  PATH_PAGE + "edenrm/credits/",
  PATH_PAGE + "edenrm/formula-syntax/",
  PATH_PAGE + "edenrm/history/",
  PATH_PAGE + "edenrm/",
  PATH_PAGE + "edenrm/license/",
  PATH_PAGE + "edenrm/setup/",
  PATH_PAGE + "edenrm/wavplay/",
  PATH_PAGE + "edenshdos/about/",
  PATH_PAGE + "edenshdos/history/",
  PATH_PAGE + "edenshdos/",
  PATH_PAGE + "edenshdos/license/",
  PATH_PAGE + "edjc/",
  PATH_PAGE + "edjc/license/",
  PATH_PAGE + "gapcm/about/",
  PATH_PAGE + "gapcm/history/",
  PATH_PAGE + "gapcm/",
  PATH_PAGE + "gapcm/license/",
  PATH_PAGE + "gapcm/usage/",
  PATH_PAGE + "mjpegfplay/about/",
  PATH_PAGE + "mjpegfplay/history/",
  PATH_PAGE + "mjpegfplay/",
  PATH_PAGE + "mjpegfplay/license/",
  PATH_PAGE + "mjpegfplay/reconstruction/",
  PATH_PAGE + "mjpegfplay/usage/",
  PATH_PAGE + "mlsanitizer/about/",
  PATH_PAGE + "mlsanitizer/history/",
  PATH_PAGE + "mlsanitizer/",
  PATH_PAGE + "mlsanitizer/license/",
  PATH_PAGE + "net/css-color-mixer/",
  PATH_PAGE + "net/css-color-mixer/res/css-color-mixer.css",
  PATH_PAGE + "net/css-color-mixer/res/css-color-mixer.js",
  PATH_PAGE + "net/",
  PATH_PAGE + "net/jcard-template/about/",
  PATH_PAGE + "net/jcard-template/credits/",
  PATH_PAGE + "net/jcard-template/history/",
  PATH_PAGE + "net/jcard-template/",
  PATH_PAGE + "net/jcard-template/license/",
  PATH_PAGE + "net/jcard-template/print-shop/",
  PATH_PAGE + "net/jcard-template/print-shop/res/equation.png",
  PATH_PAGE + "net/jcard-template/usage/",
  PATH_PAGE + "net/maeng-mini/",
  PATH_PAGE + "net/maeng-mini/res/sd-r0.jpg",
  PATH_PAGE + "net/send-whatsapp/",
  PATH_PAGE + "net/slides/about/",
  PATH_PAGE + "net/slides/",
  PATH_PAGE + "net/slides/license/",
  PATH_PAGE + "net/slides/reconstruction/",
  PATH_PAGE + "net/unagi/about/",
  PATH_PAGE + "net/unagi/demonstration/",
  PATH_PAGE + "net/unagi/demonstration/res/menu.css",
  PATH_PAGE + "net/unagi/fields/",
  PATH_PAGE + "net/unagi/",
  PATH_PAGE + "net/unagi/license/",
  PATH_PAGE + "net/viewer/about/",
  PATH_PAGE + "net/viewer/history/",
  PATH_PAGE + "net/viewer/",
  PATH_PAGE + "net/viewer/license/",
  PATH_PAGE + "netronic/about/",
  PATH_PAGE + "netronic/history/",
  PATH_PAGE + "netronic/",
  PATH_PAGE + "netronic/license/",
  PATH_PAGE + "netronic/setup/",
  PATH_PAGE + "pages/2019-portal/",
  PATH_PAGE + "pages/2019-portal/res/styles.css",
  PATH_PAGE + "pages/about-us/ews/",
  PATH_PAGE + "pages/about-us/",
  PATH_PAGE + "pages/about-us/res/about-us.js",
  PATH_PAGE + "pages/about/color-scheme/",
  PATH_PAGE + "pages/about/design/",
  PATH_PAGE + "pages/about/fonts/",
  PATH_PAGE + "pages/about/",
  PATH_PAGE + "pages/about/layouts/",
  PATH_PAGE + "pages/about/layouts/res/layouts.css",
  PATH_PAGE + "pages/about/license/",
  PATH_PAGE + "pages/about/navigation/",
  PATH_PAGE + "pages/changes/2020/",
  PATH_PAGE + "pages/changes/2021/",
  PATH_PAGE + "pages/changes/2022/",
  PATH_PAGE + "pages/changes/2023/",
  PATH_PAGE + "pages/changes/",
  PATH_PAGE + "pages/child-template/",
  PATH_PAGE + "pages/contact/",
  PATH_PAGE + "pages/",
  PATH_PAGE + "pages/licenses/bysa4/",
  PATH_PAGE + "pages/licenses/",
  PATH_PAGE + "pages/licenses/lgpl2/",
  PATH_PAGE + "pages/media-queries/",
  PATH_PAGE + "pages/media-queries/res/media-queries.css",
  PATH_PAGE + "pages/news/20191002/",
  PATH_PAGE + "pages/news/20200818/",
  PATH_PAGE + "pages/news/20210311/",
  PATH_PAGE + "pages/news/20210831/",
  PATH_PAGE + "pages/news/20211019/",
  PATH_PAGE + "pages/news/20211123/",
  PATH_PAGE + "pages/news/20220526/",
  PATH_PAGE + "pages/news/20220717/",
  PATH_PAGE + "pages/news/20220725/",
  PATH_PAGE + "pages/news/20221231/",
  PATH_PAGE + "pages/news/20230216/",
  PATH_PAGE + "pages/news/20230217/",
  PATH_PAGE + "pages/news/20230303/",
  PATH_PAGE + "pages/news/20230327/",
  PATH_PAGE + "pages/news/20230410/",
  PATH_PAGE + "pages/news/20230521/",
  PATH_PAGE + "pages/news/20230705/",
  PATH_PAGE + "pages/news/20231231/",
  PATH_PAGE + "pages/news/20240209/",
  PATH_PAGE + "pages/news/",
  PATH_PAGE + "pages/privacy/",
  PATH_PAGE + "pages/projects/",
  PATH_PAGE + "pages/user-agent/",
  PATH_PAGE + "pages/user-agent/res/user-agent.css",
  PATH_PAGE + "pages/user-agent/res/user-agent.js",
  PATH_PAGE + "pages/weebly-gateway/",
  PATH_PAGE + "pnic/about/",
  PATH_PAGE + "pnic/documentation/",
  PATH_PAGE + "pnic/",
  PATH_PAGE + "pnic/kesimate/",
  PATH_PAGE + "pnic/kesimate/res/kesimate.png",
  PATH_PAGE + "pnic/license/",
  PATH_PAGE + "pwa",
  PATH_PAGE + "pwa.js",
  PATH_PAGE + "pwa.webmanifest",
  PATH_PAGE + "qedit/about/",
  PATH_PAGE + "qedit/history/",
  PATH_PAGE + "qedit/",
  PATH_PAGE + "qedit/license/",
  PATH_PAGE + "sheff/about/",
  PATH_PAGE + "sheff/",
  PATH_PAGE + "sheff/license/",
  PATH_SITE + "media/eden.png",
  PATH_SITE + "media/ews-splash.jpg",
  PATH_SITE + "media/favicon-144.png",
  PATH_SITE + "media/favicon.png",
  PATH_SITE + "media/mm.png",
  PATH_SITE + "media/net-aw-banner.png",
  PATH_SITE + "media/pwa.png",
  PATH_SITE + "notices.css",
  PATH_SITE + "notices.js",
  PATH_SITE + "pwa-assets.js",
  PATH_SITE + "styles/README",
  PATH_SITE + "styles/application.css",
  PATH_SITE + "styles/base.css",
  PATH_SITE + "styles/document.css",
  PATH_SITE + "styles/form.css",
  PATH_SITE + "styles/header-footer.css",
  PATH_SITE + "styles/input.css",
  PATH_SITE + "styles/layout.css",
  PATH_SITE + "styles/nav.css",
  PATH_SITE + "styles/una-menu.css",
]);
