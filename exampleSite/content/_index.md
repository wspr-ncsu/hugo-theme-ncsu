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
