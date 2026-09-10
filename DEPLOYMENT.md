# 🚀 REELWAY Deployment Guide

This project is configured and ready for 1-click deployment to **Vercel**, **Netlify**, or **Cloudflare Pages**.

---

## 1. Deploy on Vercel (Recommended)

1. Push your repository to **GitHub / GitLab / Bitbucket** or export the ZIP file.
2. Go to [Vercel Dashboard](https://vercel.com/new) and click **Add New Project**.
3. Import this repository.
4. Framework Preset: **Vite**
5. Root Directory: `./`
6. Build Command: `npm run build`
7. Output Directory: `dist`
8. Click **Deploy**.

`vercel.json` is pre-configured for SPA routing.

---

## 2. Deploy on Netlify

1. Go to [Netlify Dashboard](https://app.netlify.com/start).
2. Connect your Git repository.
3. Build Settings:
   - **Base directory**: (leave blank or `./`)
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Click **Deploy Site**.

`netlify.toml` and `public/_redirects` are already included.

---

## 3. Deploy on Cloudflare Pages

1. Go to **Cloudflare Dashboard** → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
2. Select your repository.
3. Build Settings:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. Click **Save and Deploy**.

---

## 4. Environment Variables (Optional)

If you use environment variables (e.g. for Supabase):
- `VITE_SUPABASE_URL`: `https://vyysqtvwwndypqswejmd.supabase.co`
- `VITE_SUPABASE_ANON_KEY`: `sb_publishable_RK61Mn0pKZoizunBkEtUUQ_i9Y3eTu4`

*(Note: The Supabase client in `src/lib/supabase.ts` already has these configured as direct defaults).*
