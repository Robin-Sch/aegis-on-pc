# Aegis on PC

With Aegis on PC, you can generate TOTP codes on your PC.

## Installation

Install [nodejs](https://nodejs.org/en/download/).

Run `npm i` to install the dependencies.

## Usage

Export your vault (note: export UNENCRYPTED).

Use something like [snapdrop](https://snapdrop.net/) to upload the export to your PC (note: it's better to use a cable instead of sending your vault unencrypted over the internet).

Rename it to `aegis.json` and move it to this folder.

Run `npm start` to start.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
