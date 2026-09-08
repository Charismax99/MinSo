# SysEra handoff — Min-So site

## Structure and stack

- Static single-page site: `index.html`, `style.css`, and vanilla `script.js`.
- Assets are local under `assets/`; no build system, package manifest, framework, or server-side application is present.
- Google Fonts loads Cairo for Arabic; English uses the CSS serif/Arial stacks.

## Production and Git state

- `main` is clean and matches `origin/main` at `960dfd2` (`Restore footer content and add SysEra link`). No uncommitted application changes existed before this handoff file.
- Remotes: GitHub `origin` (`Charismax99/MinSo`) and site remote `sites`. The local `sites-main` branch is at `1042ece`; it is separate from `main` and should not be assumed to contain the latest main changes.
- Recent main history: gallery/lightbox (`d978d2e`), gallery/RTL updates (`b762176`), then SysEra footer-credit refinements (`69522b9`, `bfeaf40`, `960dfd2`).
- The deployed/production URL was not recorded in this repository. Confirm deployment after any future change.

## Contact and WhatsApp

- There is currently **no contact form**, `contact/` directory, PHP endpoint, Phone input, or SMTP implementation in this repository.
- The current contact route is a WhatsApp CTA only. `script.js` owns `WHATSAPP_URL`; `index.html` has the matching `[data-whatsapp-link]` anchor. It currently points to `https://wa.me/201032252236`.
- If a form is added, keep Phone/WhatsApp as an explicit user-entered contact field, validate and normalize it server-side, and do not make the browser responsible for sending email credentials.

## SMTP requirements for a future PHP contact endpoint

These values describe the intended configuration; none are implemented or stored here.

- `hello@sysera.tech`: sender/from mailbox for SysEra contact-form messages.
- `smtp.hostinger.com`: Hostinger SMTP server used to submit those messages.
- Port `465` with SSL/TLS: encrypted SMTP connection settings for that server.
- `9xdonx@gmail.com`: destination mailbox that receives submitted contact-form messages.
- `contact/smtp-config.php`: local, server-side configuration file for SMTP credentials/settings; the form handler should include it, never expose it to the client.

## Security

- `contact/smtp-config.php` must never be committed to GitHub. Store only the real file on the server/local deployment environment; do not place secrets in `index.html`, `script.js`, or this handoff.
- Required `.gitignore` entry: `contact/smtp-config.php`. It is **not currently present**, so add it before creating that file or adding a PHP contact implementation.

## Branding and visual state

- Bilingual English/Arabic typography is in place: Cairo for Arabic, with RTL selectors in `style.css`; English uses the established serif/Arial treatment.
- The Min-So logo is the local `assets/min-so-logo.png`, used in the header and footer. SysEra is a text credit/link in the footer, not a separate logo asset.
- The footer SysEra link has a gold animated underline (`.fb-link::after`). The prior static footer line was removed; do not reintroduce a duplicate static divider/line.

## Unresolved work

- No backend contact form or SMTP endpoint exists yet.
- Add the ignore rule before introducing `contact/smtp-config.php`, then implement and test the endpoint only in a PHP-capable deployment environment.
- Verify the live deployment target and whether `sites-main` needs a deliberate sync from `main`; do not merge or force-push based on branch names alone.

## Inspect first

1. `index.html` — page markup, CTA, footer credit, gallery markup.
2. `script.js` — WhatsApp URL, language switching, gallery/lightbox behavior.
3. `style.css` — typography/RTL and footer-credit animation.
4. `.gitignore` — add the SMTP config exclusion before backend work.
5. `git log --graph --all --decorate` and `git status --short --branch` — confirm branch/deployment state before publishing.

## Lessons to retain

- Treat the repository as a static Min-So site; do not describe a contact form or SMTP backend as already deployed.
- Keep credentials exclusively in the ignored server-side config file. Do not commit them, print them in logs, or embed them in client JavaScript.
- Preserve the existing footer layout and its single animated gold SysEra underline; footer-credit revisions have already caused several small follow-up commits.
