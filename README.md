# 聲威足球會 Sing Wai Football Club — Red Remastered

A bilingual, responsive, red-tone static website based on the archived 1997 GeoCities/OoCities Sing Wai Football Club pages.

## What changed in this version

- Switched the visual tone from green to red/gold.
- Added more recoverable original content from the archive index.
- Added English translation for the content sections.
- Expanded the site to include: original entrance, club profile, updates, records, members, prediction challenge, relegation challenge rules, recommended links, guestbook and archive source map.
- Added notes where the original archive is incomplete, timed out or appears with old Big5/garbled text in search snippets.

## Files

- `index.html` — single-page website with all recovered content sections.
- `styles.css` — red-tone responsive styling with retro web references.
- `assets/*.svg` — SVG illustrations recoloured to match the red theme.
- `404.html` — simple static fallback page.

## Source pages used

The original pages often time out when opened directly, so this remake is based on the parts visible in indexed OoCities results and keeps source links for later restoration:

- Home / ENTER: `https://www.oocities.org/colosseum/8433/`
- Club profile: `https://www.oocities.org/Colosseum/8433/singwai.html`
- Members: `https://www.oocities.org/Colosseum/8433/member.html`
- Prediction ranking: `https://www.oocities.org/Colosseum/8433/Soccer/9899/ranking9899.html`
- Relegation challenge: `https://www.oocities.org/Colosseum/8433/Soccer/9899/relegation9899.html`
- Recommended links: `https://www.oocities.org/Colosseum/8433/besthtm.html`
- Guestbook: `https://www.oocities.org/Colosseum/8433/book.html`

## Deploy to Cloudflare Pages

1. Create a GitHub repository and upload these files.
2. Go to Cloudflare Dashboard → Workers & Pages → Create → Pages.
3. Connect your GitHub repo.
4. Build command: leave blank.
5. Output directory: `/` or leave default for static HTML.
6. Deploy.

## Deploy to GitHub Pages

1. Create a public GitHub repository.
2. Upload these files to the root of the repository.
3. Go to Settings → Pages.
4. Source: Deploy from branch.
5. Branch: `main`, folder `/root`.
6. Save and wait for the GitHub Pages URL.

## Restoration note

This version is intentionally honest about the archive condition. If you later provide screenshots or original HTML source, the missing/garbled member profiles and match reports can be restored more accurately.


## Custom logo

This version includes the club logo provided by the user at `assets/sw-logo.png`, now used in the header, hero card, entrance section and 404 page.


## Full member profiles

This version restores the confirmed member profiles supplied by the user, including shirt numbers, nicknames, cleaned Chinese comments, and English translations. Email addresses have been removed for privacy.


## Privacy update

Member email addresses have been removed, and member names have been masked for privacy, for example names are displayed in masked format such as `陳X強`.
