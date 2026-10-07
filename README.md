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

2. Set `DATABASE_URL`, `AUTH_SECRET`, `ADMIN_EMAIL`, and `ADMIN_PASSWORD`.

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
| `npm run db:seed` | Seed admin user, services, projects |
| `npm run lint` | ESLint |

## Notes

- Contact form submissions are stored in PostgreSQL and visible in Admin → Messages.
- Partner logos are generic placeholders until collaborations are confirmed.
- Do not commit real credentials; use environment variables only.
