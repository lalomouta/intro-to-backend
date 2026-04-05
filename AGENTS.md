# intro-to-backend

## Run commands

- `npm start` — production server (node backend/src/index.js)
- `npm run dev` — development server with hot-reload (nodemon)

## Architecture

- Express + Mongoose + MongoDB Atlas
- ES module project (`"type": "module"` in package.json) — use `import`/`export`, not `require`
- Entry point: `backend/src/index.js`; Express app: `backend/src/app.js`
- `dotenv.config({ path: './.env' })` — expects `.env` in the repo root
- DB config: `backend/src/config/database.js`

## Environment

- `PORT=4000` and `MONGODB_URI` required in `.env`
- **`.env is committed to the repo with real credentials** (line 75 in .gitignore should not be trusted — verify before pushing secrets)

## No test/lint setup

- No test framework, no lint, no typecheck, no CI workflows
- `backend/src/prueba.js` is an experimental scratch file, not part of the app
