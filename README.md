# unlock-caps
This is my personal repo of the MVP application that I, as part of a team of four, built for a local Austin startup over the course of four weeks: KeyUp Austin.
This application serves as a way to connect lower-income students with middle-class career paths and training services to receive
the necessary certifications.

Team Members:
- [Brian Hickey](https://github.com/bphicke)
- [Elyse Vest](https://github.com/evest90)
- [Mason Hunter](https://github.com/Hunterist12)

## Motivation
When trying to decide what we wanted to work on for our thesis project at Hack Reactor, our instructor pitched KeyUp's need and product
to us. We jumped at the opportunity to build their MVP because it would give us real-world experience working with designers. On top of that,
we knew that the app would actually be used by people - KeyUp's plan is to get this in the hands of 20,000 users in 2019.

## Demo
- Check out the app [here](https://key-up-demo-nicole.herokuapp.com/home).
- KeyUp's deployment can be found [here](http://keyup.services).

## Tech Stack
Built with
- Front-End: React, Redux, Material UI
- Back-End: Node, Express, GraphQL
- Database: PostgreSQL

## Features
- View careers and training services
- Sign in and create account (Passport local strategy authentication with GraphQL and JSON web tokens)
- Favorite careers and training services

Future features entail:
- Facebook and Google OAuth
- Adding support services information (financial aid, scholarships, etc)
- Dynamic, multi-page questionnaire intake form
- Internal tool for KeyUp admins and trusted partner organizations to edit database information

## Installation
All you gotta do is: 
```
npm install
```
and then
```
npm run dev
```

## Contribute

You may contribute by following the below steps:

### Git setup
1. Fork from https://github.com/nicole-nguyen1/unlock-caps.git.
2. Clone from your repo.
3. Add remote.

```
git remote add upstream https://github.com/nicole-nguyen1/unlock-caps.git
```

### Git workflow
Two branches: master and dev

1. Commit to your own feature branch often and pull often.
```
git pull upstream dev
```

2. When you want to work on feature, check out dev branch and make a new feature branch.

Example:
```
git checkout -b <new-branch>
```

3. Do all work in feature branch. Commit only to your feature branch.
4. Before merging into dev, pull from dev branch and fix merge conflicts.
5. When merge conflicts are fixed, pull request into dev branch. 
6. Review.
7. Merge into dev.
8. If there is a functioning product in dev, merge into master. 
