/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "20171231/first-day-of-spring-2016-northern-hemisphere.gif",
    "revision": "6f22be4e029e93d82823665a482806b0"
  },
  {
    "url": "20171231/homeScreen128.png",
    "revision": "c75a9a761637308ec133a3958c66c60a"
  },
  {
    "url": "20171231/homeScreen144.png",
    "revision": "e13f35c03850b3b2b5e9bdcc788ec1d0"
  },
  {
    "url": "20171231/homeScreen48.png",
    "revision": "fb050608ac666852b29a5eac4182c12f"
  },
  {
    "url": "20171231/homeScreen72.png",
    "revision": "cb447a29593a26a8473ac2bbe28f4318"
  },
  {
    "url": "20171231/homeScreen96.png",
    "revision": "f6db37464ab7071440b15f6039d42dde"
  },
  {
    "url": "20171231/logo.png",
    "revision": "e13f35c03850b3b2b5e9bdcc788ec1d0"
  },
  {
    "url": "20171231/summer-solstice-strawberry-moon.gif",
    "revision": "75d8fb9ccbd0995d026ed784a72e486f"
  },
  {
    "url": "20171231/tooth.gif",
    "revision": "1d5b4434920a088ca92202a1019e84fe"
  },
  {
    "url": "404.html",
    "revision": "85e36879241d8c6dc8a9ca3fd4db6b2a"
  },
  {
    "url": "about.html",
    "revision": "0c28d0f9462288ef93c65a22ec89b902"
  },
  {
    "url": "assets/css/0.styles.dc88aebc.css",
    "revision": "4de913373c52647a2f1ddbb206eec527"
  },
  {
    "url": "assets/img/banner.8069aec6.png",
    "revision": "8069aec697a05cbba6d6a4e5b238b7a6"
  },
  {
    "url": "assets/img/default.7d5bc7de.jpg",
    "revision": "7d5bc7de7aa5d9e320f7a771619870f5"
  },
  {
    "url": "assets/img/first-day-of-spring-2016-northern-hemisphere.6f22be4e.gif",
    "revision": "6f22be4e029e93d82823665a482806b0"
  },
  {
    "url": "assets/img/footer-title-icon-1.2d88de07.png",
    "revision": "2d88de07905a123a030e467bdceeca2f"
  },
  {
    "url": "assets/img/NotFound.b5c9b223.jpg",
    "revision": "b5c9b223d7dc40d8f56617c8979d30a2"
  },
  {
    "url": "assets/img/summer-solstice-strawberry-moon.75d8fb9c.gif",
    "revision": "75d8fb9ccbd0995d026ed784a72e486f"
  },
  {
    "url": "assets/js/10.d30cfd77.js",
    "revision": "2b2da43838e26fa96cb724ac369ae845"
  },
  {
    "url": "assets/js/11.bbf10729.js",
    "revision": "379fae40aa191054fce4fabad11441ac"
  },
  {
    "url": "assets/js/12.1b51d382.js",
    "revision": "a1b889a70761b4b27ebd9d9442b99ded"
  },
  {
    "url": "assets/js/13.8e2af65e.js",
    "revision": "0566b4d8cf515ac3b131fb78eece8f9c"
  },
  {
    "url": "assets/js/2.b17a4a1f.js",
    "revision": "9c25ad46e08b2d7be61191b94c206e98"
  },
  {
    "url": "assets/js/3.05ac8997.js",
    "revision": "d11f03e4e5f372b4acc26dd3f69dde11"
  },
  {
    "url": "assets/js/4.d0d6d6eb.js",
    "revision": "e8fe2669c46144045c5e1155c79eed7e"
  },
  {
    "url": "assets/js/5.b87c2655.js",
    "revision": "e391c0b49eff9bcd9106286d59547c46"
  },
  {
    "url": "assets/js/6.9fb5b6d1.js",
    "revision": "efb6d68f4e5877e6db14a1562276c34b"
  },
  {
    "url": "assets/js/7.55341f8f.js",
    "revision": "b6ad91d0cba8cd0005fa9567cd70a5c0"
  },
  {
    "url": "assets/js/8.a661c759.js",
    "revision": "dd52fc5898f73117341c3a27cbc92f9a"
  },
  {
    "url": "assets/js/9.7efa94ca.js",
    "revision": "05dd4460aa87be8c77ebcea932537f31"
  },
  {
    "url": "assets/js/app.a4271301.js",
    "revision": "9de2527c9262e8eaff5562b3ad07b23e"
  },
  {
    "url": "index.html",
    "revision": "e810af93f3b3521f1adb365b4899e1e4"
  },
  {
    "url": "link.html",
    "revision": "0ed4bd634cd283538dbe570f64471616"
  },
  {
    "url": "other/ce-shi-wen-zhang.html",
    "revision": "aae52124ce3556daf936e14f332105d8"
  },
  {
    "url": "other/ce-shi-wen-zhang2.html",
    "revision": "aae52124ce3556daf936e14f332105d8"
  },
  {
    "url": "other/index.html",
    "revision": "85b922f56c986f00ffc43982a2c54ed9"
  },
  {
    "url": "posts/index.html",
    "revision": "f22278861ac60a6f022094f6d28527c7"
  },
  {
    "url": "tags/index.html",
    "revision": "626ce0b218365a88e3d75e2c945575e3"
  },
  {
    "url": "timeline.html",
    "revision": "ef7aabe25aa5a8fc80fd1ce08f687a52"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
