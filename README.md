# Yixin Ma Academic Homepage

This repository contains the personal bilingual academic homepage for **Yixin Ma / 麻奕鑫**, based on [multi-language-al-folio](https://github.com/george-gca/multi-language-al-folio) and the original [al-folio](https://github.com/alshedivat/al-folio) theme.

Thanks to the maintainers of multi-language-al-folio and al-folio for providing the template foundation for this site.

- Default language: English
- Simplified Chinese version: `/zh/`
- Current structure: single-page academic homepage in both languages

## Local Preview

Install the dependencies and start the normal Jekyll server:

```bash
bundle install
pip install --upgrade nbconvert
PATH=/opt/homebrew/opt/ruby/bin:$PATH bundle exec jekyll serve
```

Then open:

- English: [http://127.0.0.1:4000/](http://127.0.0.1:4000/)
- Chinese: [http://127.0.0.1:4000/zh/](http://127.0.0.1:4000/zh/)

## Profile Image

To add a profile image, place a square image at `assets/img/profile.jpg`.

- Recommended size: `400x400` or `512x512`
- If the image does not appear automatically, set `profile.force_image: true` in `_pages/about.md` and `_pages/zh-about.md`

## Deployment

Before deploying, set the correct `url` and `baseurl` in `_config.yml`.

- Personal site: `url: https://username.github.io` and empty `baseurl`
- Project site: `url: https://username.github.io` and `baseurl: /repo-name`

This repository keeps a GitHub Pages deployment workflow at `.github/workflows/deploy.yml`.

1. Push changes to `main`.
2. In GitHub, set workflow permissions to `Read and write permissions`.
3. In `Settings -> Pages`, publish from the `gh-pages` branch created by the workflow.

## Content

- Main English homepage: `_pages/about.md`
- Main Chinese homepage: `_pages/zh-about.md`
- Projects: `_projects/`
- News: `_news/`

The site intentionally omits publications, blog posts, teaching, repositories, and other placeholder sections until real content is ready.
