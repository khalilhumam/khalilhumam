# KhalilHumam.com — GitHub Pages website

A lightweight, responsive, single-page personal website built with plain HTML, CSS and JavaScript.

## Files
- `index.html` — page content, SEO metadata and Person structured data
- `style.css` — responsive design
- `script.js` — mobile navigation and current year
- `assets/` — favicon and social sharing graphic

## Before publishing
1. Add a professional portrait at `assets/profile.jpg` (recommended portrait crop, at least 1200px tall).
2. Review every biography statement, especially the career timeline, degree names and certification.
3. Confirm that the links to organizations and initiatives are current.
4. If you want to publish an email address, add it yourself; the current site directs professional inquiries to LinkedIn.

## Publish with GitHub Pages
1. Create a GitHub repository, for example `khalilhumam`.
2. Upload the contents of this folder to the repository root.
3. In repository **Settings → Pages**, select **Deploy from a branch**, choose `main` and `/ (root)`, then save.
4. In the Pages settings, enter `khalilhumam.com` as the custom domain.
5. Configure DNS at your domain registrar:
   - For the apex/root domain (`khalilhumam.com`), use the four A records and one AAAA record currently specified in GitHub's official custom-domain documentation.
   - For `www`, create a CNAME record pointing to your GitHub Pages hostname (for example, `YOUR-USERNAME.github.io`).
   - Remove conflicting old A, AAAA or CNAME records for the same host.
6. Wait for DNS to propagate, then enable **Enforce HTTPS** in GitHub Pages settings.

GitHub's current instructions: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

## SEO checklist after launch
- Verify `https://khalilhumam.com/` in Google Search Console.
- Submit `https://khalilhumam.com/sitemap.xml`.
- Add the website URL to LinkedIn and other professional profiles you control.
- Publish substantive articles or project updates on your own site over time.
- Keep your name, portrait, biography and professional links consistent.

## Notes
- No paid theme, CMS, database, backend or third-party JavaScript library is required.
- Google Fonts are loaded from Google Fonts; the site still works with system fonts if that service is unavailable.
- The profile photo is intentionally not included. Add your own approved image as `assets/profile.jpg`.
