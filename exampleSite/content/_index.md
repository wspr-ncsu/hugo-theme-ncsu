+++
date = 2024-07-21
layout = "home"
menuHighlight = "about"
+++

# hugo-theme-ncsu

Unofficial NC State-inspired Hugo theme for course websites. It provides a Bootstrap 5 layout, course navigation, schedule components, assignment helpers, and accessible course metadata patterns.

<img src="/logo.png" alt="NC State themed site logo" width="180">

{{< row >}}
{{< col "col-md-6" >}}
## Start Here

Use the theme when a course site needs a clear syllabus, schedule, assignment pages, and reusable Markdown shortcodes. The example site includes working pages for schedule data, shortcode output, and Markdown rendering.

<a class="btn btn-primary" href="/course-example/">Course Example</a>
<a class="btn btn-outline-primary" href="/config/">Config</a>
<a class="btn btn-outline-primary" href="/shortcodes/">Shortcodes</a>
{{< /col >}}
{{< col "col-md-6" >}}
## Included

{{< dl "table-striped" >}}
Layout | Header, sidebar, table of contents, footer, and work-in-progress notice
Course Data | Site parameters for course title, description, meeting time, and location
Shortcodes | Alerts, badges, buttons, cards, tables, definition lists, charts, assignments, and schedules
Examples | Theme documentation, schedule sample, and Markdown compatibility page
{{< /dl >}}
{{< /col >}}
{{< /row >}}

## Getting Started

Create a Hugo site, add this theme under `themes/`, and copy the example config into the new site.

```sh
hugo new site course-site
cd course-site/themes
git submodule add https://github.com/wspr-ncsu/hugo-theme-ncsu.git
cd ..
cp themes/hugo-theme-ncsu/hugo.toml .
```

Run the site locally while editing content.

```sh
hugo server
```

The theme requires Hugo extended because it uses SCSS. Use the example site as a working reference for content pages, data files, shortcodes, and theme configuration.

## Documentation

- [Config](/config/): Site settings, theme parameters, partial overrides, and data file schemas.
- [Shortcodes](/shortcodes/): Bootstrap wrappers, assignment helpers, chart output, and schedule components.
- [Course Example](/course-example/): Student-facing course page with selected schedule examples.
- [Markdown](/markdown/): Markdown rendering compatibility page.

## Changelog

Entries summarize user-facing changes from the commit history. Small fixes and related changes are grouped together.

### 2026.05 (upcoming)

- {{< badge "text-bg-primary" >}}Breaking{{< /badge >}} Reworked the schedule shortcodes with more flexible week, event, lecture, and resource rendering. ([f9131b2](https://github.com/wspr-ncsu/hugo-theme-ncsu/commit/f9131b2), [c9069b2](https://github.com/wspr-ncsu/hugo-theme-ncsu/commit/c9069b2))
- {{< badge "text-bg-success" >}}Feature{{< /badge >}} Added Bootstrap-native row and column shortcodes, buttons, badges, Markdown includes, and additional badge colors. ([57a1cf1](https://github.com/wspr-ncsu/hugo-theme-ncsu/commit/57a1cf1), [32fdabb](https://github.com/wspr-ncsu/hugo-theme-ncsu/commit/32fdabb), [72df9d8](https://github.com/wspr-ncsu/hugo-theme-ncsu/commit/72df9d8))
- {{< badge "text-bg-success" >}}Feature{{< /badge >}} Added a syllabus-style header shortcut and new image treatments for covers and outlined figures. ([59bb78f](https://github.com/wspr-ncsu/hugo-theme-ncsu/commit/59bb78f), [abb767f](https://github.com/wspr-ncsu/hugo-theme-ncsu/commit/abb767f), [bb0dc1b](https://github.com/wspr-ncsu/hugo-theme-ncsu/commit/bb0dc1b))
- {{< badge "text-bg-info" >}}Improvement{{< /badge >}} Moved JavaScript and SCSS handling into Hugo Pipes and added static fallbacks for more reliable deployment. ([59a2ab4](https://github.com/wspr-ncsu/hugo-theme-ncsu/commit/59a2ab4), [4b95b54](https://github.com/wspr-ncsu/hugo-theme-ncsu/commit/4b95b54), [fcae0c7](https://github.com/wspr-ncsu/hugo-theme-ncsu/commit/fcae0c7))
- {{< badge "text-bg-info" >}}Improvement{{< /badge >}} Extended the documentation and accessibility support, including clearer metadata and a smaller default logo. ([18d5677](https://github.com/wspr-ncsu/hugo-theme-ncsu/commit/18d5677), [8b1fca9](https://github.com/wspr-ncsu/hugo-theme-ncsu/commit/8b1fca9))
- {{< badge "text-bg-warning" >}}Fix{{< /badge >}} Fixed mobile definition-list and footer wrapping, card borders, secondary links on red backgrounds, and footer configuration. ([11f68fc](https://github.com/wspr-ncsu/hugo-theme-ncsu/commit/11f68fc), [5e0ec3a](https://github.com/wspr-ncsu/hugo-theme-ncsu/commit/5e0ec3a), [577d992](https://github.com/wspr-ncsu/hugo-theme-ncsu/commit/577d992), [248a4b9](https://github.com/wspr-ncsu/hugo-theme-ncsu/commit/248a4b9), [836325b](https://github.com/wspr-ncsu/hugo-theme-ncsu/commit/836325b))
- {{< badge "text-bg-secondary" >}}Maintenance{{< /badge >}} Updated templates and example configuration for current Hugo APIs. ([a21c7cc](https://github.com/wspr-ncsu/hugo-theme-ncsu/commit/a21c7cc))

### 2024.08

- {{< badge "text-bg-primary" >}}Breaking{{< /badge >}} Migrated the theme layout and styling to Bootstrap 5. ([5cc4723](https://github.com/wspr-ncsu/hugo-theme-ncsu/commit/5cc4723))
- {{< badge "text-bg-success" >}}Feature{{< /badge >}} Added schedule, assignment, and details shortcodes with data-driven lecture resources and deadlines. ([e5ce32a](https://github.com/wspr-ncsu/hugo-theme-ncsu/commit/e5ce32a), [3c19f69](https://github.com/wspr-ncsu/hugo-theme-ncsu/commit/3c19f69), [8eb4651](https://github.com/wspr-ncsu/hugo-theme-ncsu/commit/8eb4651))
- {{< badge "text-bg-success" >}}Feature{{< /badge >}} Added the example site, theme configuration, default logo, and configurable footer and work-in-progress notice. ([7e74621](https://github.com/wspr-ncsu/hugo-theme-ncsu/commit/7e74621), [9453ebc](https://github.com/wspr-ncsu/hugo-theme-ncsu/commit/9453ebc), [f64cf84](https://github.com/wspr-ncsu/hugo-theme-ncsu/commit/f64cf84))
- {{< badge "text-bg-info" >}}Improvement{{< /badge >}} Added configurable column splits and improved chart sizing and identifier handling. ([9b0679e](https://github.com/wspr-ncsu/hugo-theme-ncsu/commit/9b0679e), [e2ff5e3](https://github.com/wspr-ncsu/hugo-theme-ncsu/commit/e2ff5e3))
- {{< badge "text-bg-warning" >}}Fix{{< /badge >}} Corrected responsive breakpoints, narrow layouts, duplicate notices, and assignment date formatting. ([4256cf9](https://github.com/wspr-ncsu/hugo-theme-ncsu/commit/4256cf9), [8740b43](https://github.com/wspr-ncsu/hugo-theme-ncsu/commit/8740b43), [0e7ec7a](https://github.com/wspr-ncsu/hugo-theme-ncsu/commit/0e7ec7a), [93693cb](https://github.com/wspr-ncsu/hugo-theme-ncsu/commit/93693cb))

### Bootstrap 3

- {{< badge "text-bg-success" >}}Feature{{< /badge >}} Established the original course-site structure with navigation, sidebars, tables of contents, alerts, charts, and course metadata. ([b5bbf0c](https://github.com/wspr-ncsu/hugo-theme-ncsu/commit/b5bbf0c), [5cf63ba](https://github.com/wspr-ncsu/hugo-theme-ncsu/commit/5cf63ba), [029fd22](https://github.com/wspr-ncsu/hugo-theme-ncsu/commit/029fd22))
- {{< badge "text-bg-info" >}}Improvement{{< /badge >}} Added semantic HTML, print styling, skip links, header anchors, and last-modified support. ([58a0ae7](https://github.com/wspr-ncsu/hugo-theme-ncsu/commit/58a0ae7), [b0395d6](https://github.com/wspr-ncsu/hugo-theme-ncsu/commit/b0395d6), [9577aca](https://github.com/wspr-ncsu/hugo-theme-ncsu/commit/9577aca))
- {{< badge "text-bg-warning" >}}Fix{{< /badge >}} Improved menu rendering on small mobile screens. ([e18fa31](https://github.com/wspr-ncsu/hugo-theme-ncsu/commit/e18fa31))
