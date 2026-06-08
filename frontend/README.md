# Frontend — React App

## Getting Started

```bash
npm install
npm run dev      # opens at http://localhost:3000
```

## Folder Structure

```
src/
├── components/
│   ├── layout/     ← Navbar, Footer, MainLayout (wraps every page)
│   ├── ui/         ← Small reusable pieces: Button, Input, Card
│   └── forms/      ← Form components: LoginForm, etc.
├── pages/          ← One file per page/screen
├── context/        ← Global state (e.g. logged-in user)
├── services/       ← All API calls live here
├── hooks/          ← Reusable logic (useFetch, useDebounce)
├── utils/          ← Helper functions (formatDate, isEmail)
└── styles/         ← Global CSS variables and reset
```

## How to add a new page

1. Create `src/pages/MyPage.jsx`
2. Add a route in `src/App.jsx`

## How to make an API call

Use the service files, not raw fetch/axios in components:

```js
import { authService } from '@/services/authService';
await authService.login(email, password);
```

## Path Alias

Use `@/` instead of long relative paths:

```js
import Button from '@/components/ui/Button';  ✅
import Button from '../../../components/ui/Button';  ❌
```
