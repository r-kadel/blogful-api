# Express Boilerplate!

## To seed DB

psql -U dunder_mifflin -d blogful -f ./seeds/seed.blogful_articles.sql

## Deploying

When your new project is ready for deployment, add a new Heroku application with `heroku create`. This will make a new git remote called "heroku" and you can then `npm run deploy` which will push to this remote's master branch.