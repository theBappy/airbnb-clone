

<p>
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)  
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)  
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)  
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)  
[![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=blue)](https://www.prisma.io/)  
[![NextAuth.js](https://img.shields.io/badge/NextAuth.js-000000?style=for-the-badge&logo=nextauthdotjs&logoColor=white)](https://next-auth.js.org/)  
[![Cloudinary](https://img.shields.io/badge/Cloudinary-405DE6?style=for-the-badge&logo=cloudinary&logoColor=white)](https://cloudinary.com/)  
[![Zustand](https://img.shields.io/badge/Zustand-000000?style=for-the-badge&logo=zustand&logoColor=white)](https://github.com/pmndrs/zustand)  
[![React Hook Form](https://img.shields.io/badge/React_Hook_Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white)](https://react-hook-form.com/)  
[![React Icons](https://img.shields.io/badge/React_Icons-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react-icons.github.io/react-icons/)  
[![React Leaflet](https://img.shields.io/badge/React_Leaflet-3DDC84?style=for-the-badge&logo=react&logoColor=black)](https://react-leaflet.js.org/)
</p>

---
# Airbnb Clone
## Overview

A full-stack Airbnb clone built with Next.js 13 (App Router), TypeScript, Prisma, and Tailwind CSS.  
It features user authentication, real-time listings, reservations, image uploads with Cloudinary, and more.

---

## Features

- User authentication with NextAuth.js and Prisma adapter  
- Dynamic search and filtering of listings  
- Reservation system with date selection  
- Profile management and avatar uploads  
- Responsive UI built with Tailwind CSS  
- State management with Zustand  
- Map integration using React Leaflet  
- Form handling with React Hook Form  
- Toast notifications with React Hot Toast

---

## Tech Stack

| Technology       | Purpose                |
|------------------|------------------------|
| Next.js 13       | React framework        |
| TypeScript       | Type safety            |
| Prisma           | ORM for database       |
| MongoDB         | Database              |
| Tailwind CSS     | Styling and layout     |
| NextAuth.js      | Authentication         |
| Cloudinary       | Image uploads          |
| Zustand          | State management       |
| React Hook Form  | Forms                  |
| React Leaflet    | Maps                   |

_\*Database depends on your Prisma config_

---

## Installation

1. Clone the repo  
```bash
git clone https://github.com/yourusername/airbnb-clone.git
cd airbnb-clone
Install dependencies

bash
Always show details

Copy
npm install
# or
yarn install
Create .env file and add environment variables for:

Database URL

NextAuth secret

Cloudinary credentials

Run Prisma migrations

bash
Always show details

Copy
npx prisma migrate dev
Run the development server

bash
Always show details

Copy
npm run dev
Open http://localhost:3000 to view the app.

Scripts
npm run dev - Starts Next.js in development mode

npm run build - Builds the production app

npm start - Runs the built app

npm run lint - Runs ESLint

Contributing
Feel free to open issues or pull requests.
Please follow the existing code style and commit message conventions.

License
MIT License ©theBappy