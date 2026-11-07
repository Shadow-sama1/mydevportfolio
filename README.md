# Favour E. Alozie — Developer Portfolio

A responsive, single-page developer portfolio built with Next.js App Router,
TypeScript, Tailwind CSS, and lucide-react.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Personalize the portfolio

- Update identity, contact details, social links, site URL, and CV ID in
  [`lib/config.ts`](./lib/config.ts).
- Set `NEXT_PUBLIC_SITE_URL` to the production origin for generated metadata,
  sitemap, and robots URLs. The default `https://example.com` is a placeholder.
- Replace `CV_FILE_ID` (`YOUR_FILE_ID`) with the Google Drive file ID for the
  CV. The preview and direct-download URLs are derived from this one value.
- Replace [`public/images/favour.jpg`](./public/images/favour.jpg) with the
  profile photo and [`public/images/og.jpg`](./public/images/og.jpg) with the
  final social sharing image.
- Replace the `#` links in `app/components/PortfolioSections.tsx` with project
  URLs; each placeholder has a TODO comment.

## Checks

```bash
npm run lint
npm run build
```

The app is ready to deploy to Vercel.
