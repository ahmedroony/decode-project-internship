### 1. Requirements
- Node.js v24.11.1

### 2. Configure Project
- `git clone https://github.com/ahmedroony/decode-project-internship.git`
- `cd decode-project-internship`
- `npm install`
- Create a `.env` file and add: `DATABASE_URL="file:./dev.db"`

### 3. Setup Prisma
- `npx prisma db push`
- `npx prisma generate`

### 4. Start the server
- `node server.js`
