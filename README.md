# TIN100 FinTech

If you would rather clone this repo, go to the command line and run:

```bash
https://github.com/mikkorekstad/FinTech.git
```

## Requirements

Make sure that you either have yarn or npm installed.

To host the project locally, make sure to follow the following steps:

#### Install Dependencies

```bash
yarn # or npm i
```

To build a production optimized version, run:

```bash
yarn run build # or npm run build
```

And to host the production optimized version locally, run:

```bash
yarn run start # or npm run start
```

### To run a development server with code hot reloading

```bash
yarn run dev # or npm run dev
```

### Heroku deployemnt

First, install and setup the [heroku cli](https://devcenter.heroku.com/articles/heroku-cli)

Then, to push the code you have in your main branch to the heroku deployemnt server, you first have to add it as a git origin by using the following command:

```bash
heroki git:remote -a fintech-nettside-tin100
```

Then, to push the heroku code to github after committing and adding the files, run the command:

```bash
git push heroku main
```
