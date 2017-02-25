# decolar.com crawler

A simple crawler to get flight prices and notify me when there are cheap tickets available

## Getting Started

Follow these instructions to have a copy of the project up and running on yout local machine for development and testing purposes. The project is still not deployed anywhere. 

### Prerequisites

Since it is powered by Node.js, you should install all dependencies before running it:

``` bash
npm install
npm run start
```

## Too much to do, not enough time

Yep, there's still too much to be done!

- The current code will search flights from São Paulo to Paris in October 2017 (it will be the [500th reformation anniversary!](https://en.wikipedia.org/wiki/Protestant_Reformation)). It would be nice to add an interface so the user can input its own flight preferences.
- The current `notifier` sends me a Telegram Message. Ideally the notifier should be `plug-and-play` and notify you using the channel you want, such as SMS, skype, calls, smoke signal or whatever.
- The current code only checks [decolar.com](decolar.com). It would be awesome to have more sources to search as well.

## Contributing

Feel free to [open issues](https://github.com/adrianovalente/decolar-crawler/issues), fork and [submit](https://github.com/adrianovalente/decolar-crawler/pulls) pull requests!

## License

This project is licensed under the [MIT License](LICENSE.md).
