# OpenSecrets Viewer

This project provides a tiny static website that displays recent PAC and large donations in real time using the OpenFEC API. All logic runs entirely in the browser with plain JavaScript.

## Usage

1. Obtain an OpenFEC API key from [https://api.open.fec.gov/developers/](https://api.open.fec.gov/developers/).
2. Open `index.html` in any web browser.
3. Edit `static/app.js` and replace `DEMO_KEY` with your API key.

The page will fetch the latest donations every 30 seconds and prepend them to the list.

You can customize the look and feel by editing `static/style.css`.
