# DL Electric

Premium futuristic website for DL Electric by Dimitris Lykos — electrical engineering, medium/high voltage, smart home, CCTV and certifications.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion
- PostgreSQL + Prisma
- Auth.js (NextAuth v5) for admin

## Setup

1. Copy environment variables:

```bash
cp .env.example .env
```

2. Set `DATABASE_URL` and `AUTH_SECRET`. Optional: set `ADMIN_CODE` to replace the built-in admin code.

3. Install and prepare the database:

```bash
npm install
npx prisma migrate deploy
npm run db:seed
```

4. Run the app:

```bash
npm run dev
```

- Website: [http://localhost:3000](http://localhost:3000)
- Admin: [http://localhost:3000/admin](http://localhost:3000/admin)

## Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run db:seed` | Seed services, projects, and site content |
| `npm run lint` | ESLint |

## Notes

- Admin (`/admin`) accepts a single access code and is only for uploading photos. Uploaded photos appear in the homepage gallery. Set `ADMIN_CODE` to override the built-in code without putting it in the repository.
- Contact form submissions are stored in PostgreSQL.
- Partner logos are generic placeholders until collaborations are confirmed.
- Do not commit real credentials; use environment variables only.
