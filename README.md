# yourx-pages

Scripts that render YOURx Health pages inside GoHighLevel. GHL holds one line; the content lives here.

## Listicle: "7 Questions" (stage 3)
GHL Custom JS/HTML element:
```html
<div id="yourx-listicle"></div><script src="https://defconskylude.github.io/yourx-pages/listicle.js"></script>
```
- **Swap headlines:** edit `CONFIG.headlines` at the top of `listicle.js`, commit, push. Live in ~10 minutes.
- **Headline per ad:** add `?h=<key>` to the GHL page URL (`questions`, `price`, `pill`, `scam`). No `?h` uses `defaultHeadline`.
- **Tracking:** UTMs, `fbclid`, `gclid` and `ttclid` on the page URL are copied onto the survey link, plus `lp_variant=<key>`.
- **Local test:** open `test.html` through a local server (not committed).
