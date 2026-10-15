# Third-party notices

This site has no runtime JavaScript or CSS dependencies. The only third-party assets bundled with it are listed below.

| Asset | Where | License | Source |
| --- | --- | --- | --- |
| IBM Plex Sans (400, 400 italic, 500, 600; latin subset, woff2) | `themes/cv-one/static/fonts/` | SIL Open Font License 1.1 | IBM, via [Fontsource](https://fontsource.org/fonts/ibm-plex-sans) `@fontsource/ibm-plex-sans` 5.x |
| IBM Plex Mono (400, 500; latin subset, woff2) | `themes/cv-one/static/fonts/` | SIL Open Font License 1.1 | IBM, via [Fontsource](https://fontsource.org/fonts/ibm-plex-mono) `@fontsource/ibm-plex-mono` 5.x |
| GitHub and LinkedIn icon paths | `themes/cv-one/layouts/_partials/icon.html` | CC0 1.0 (public domain) | [Simple Icons](https://simpleicons.org/) 13.x |

The full OFL text ships next to the fonts in `themes/cv-one/static/fonts/OFL.txt` and is published with the site at `/fonts/OFL.txt`, as the license requires. The same OFL 1.1 terms cover IBM Plex Mono. The fonts are redistributed unmodified apart from Fontsource's standard subsetting.

The GitHub and LinkedIn logos are trademarks of their owners. They are used only to link to the corresponding profiles, as each company's brand guidelines allow.

All other icons, the favicon, the edge–cloud diagram, and all CSS and JavaScript are original to this repository and covered by its MIT license.

Build tooling: [Hugo](https://github.com/gohugoio/hugo) (Apache-2.0) generates the site but is not redistributed. The GitHub Actions used for deployment (`actions/checkout`, `actions/configure-pages`, `actions/upload-pages-artifact`, `actions/deploy-pages`) are MIT-licensed.
