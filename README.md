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


## Complete old page conversion

This version integrates the user-supplied old-site ZIP into the new remastered website.

- Converted old content pages: 18
- Added `archive.html` as the full archive index
- Added individual converted pages under `pages/`
- Preserved the previous red tone and supplied SW logo
- Removed all email addresses from public pages
- Masked full Chinese member names for privacy
- Converted old Big5/CP950 text into UTF-8
- Included the original `singwai.mid` file under `assets/original/` without autoplay


## Background MIDI music

This version adds a floating Play/Pause music control that uses the original `assets/original/singwai.mid` file. It does not autoplay; modern browsers usually require a user click before sound can start. Some browsers may not play MIDI files directly, so converting the MIDI to MP3/OGG is recommended for maximum compatibility.


## Converted background music

The original MIDI has been converted into browser-friendly audio using a simple Python MIDI synthesizer.

- Notes parsed: 281
- Estimated duration: 39.8 seconds
- Encoded formats: mp3, ogg
- Original MIDI retained: `assets/original/singwai.mid`

The floating music button uses MP3/OGG first when available, with the original MIDI as a fallback. The audio is not autoplayed; visitors need to click the play button.


## V2 curated multi-page remaster

This version reorganises the old website into a modern flow:

- `index.html` — homepage and site journey
- `club.html` — club story and timeline
- `members.html` — full member card roster with privacy masking
- `records.html` — trophy/records board
- `prediction.html` — football prediction challenge hub
- `horse.html` — horse racing challenge hub
- `retro.html` — MIDI, guestbook, Netscape/GeoCities nostalgia
- `archive.html` and `pages/` — full converted old-page backup

Privacy checks were run before packaging: emails removed; original full Chinese names masked.


## Restored legacy tables

This version restores table structure from the old HTML pages into the remastered design. Ranking pages, football prediction results, horse-racing ledgers, tips and records are now displayed as styled responsive tables instead of flattened text.


## V3 content-first presentation

This version removes public-facing explanation about the redesign process and presents the club content directly. Football prediction tables, horse-racing ledgers, club reports, member cards and retro assets are surfaced in the main pages rather than only in the database pages.


## Autoplay test version

This version attempts audible autoplay by adding `autoplay loop playsinline preload="auto"` to the background audio element and calling `audio.play()` on page load. Modern browsers may still block audible autoplay, so the floating Play/Pause button remains as a fallback.


## Nickname restoration

Only full Chinese names are masked in the public version. Nicknames, partial names and football/racing aliases are preserved because they are part of the club records and not full personal names.


## Clean link-only text

Old standalone hyperlink/menu labels from the original framed site were removed from the displayed content. This keeps real records, tables, match reports and member notes, while dropping old navigation/link-only text.
