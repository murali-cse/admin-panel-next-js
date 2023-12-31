# Employee Management Dashboard

This project is build on NextJs and Prisma for backend, It's helps to manage staffs, leaves and projects.

## Features and Todos

- [ ] Auth
- [ ] Analytics Dashboard
- [x] Manage Staffs
  - [x] Add Staffs
  - [x] List Staffs
  - [x] Edit Staffs
  - [x] Delete Staffs
  - [x] Single member profile details
- [ ] Manage leave and permissions
- [ ] Holiday and Event Management
- [ ] Add new projects and track the status
  - [ ] Add Project
  - [ ] Delete Project
  - [ ] Edit Project Details
  - [x] List Projects
  - [ ] Show single project details

## Getting Started

First, setup your node version to 18.17.0

```
yarn install
# or
npm i
```

then setup the database to run the below command

```
yarn migrate
# or
npm run migrate
```

after the database initialize,

```
yarn dev
# or
npm run dev
```

start server and open `http://localhost:3000` with your browser to see the result
