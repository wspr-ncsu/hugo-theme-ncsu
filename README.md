# hugo-theme-ncsu

(Unofficial) [Hugo](https://github.com/gohugoio/hugo) (static site generator written in Go) theme using Bootstrap 5 and inspired by the NC State branding and resources.

Examples: 
- https://csc591.dwermke.com/

Older versions using the `bs3` template (see releases):
- https://csc791.dwermke.com/
- https://csc574.dwermke.com/

## exampleSite
This theme includes its own documentation in `/exampleSite`.
With hugo installed, run a test server with:

```sh
cd exampleSite
hugo --themesDir ../.. server
```

Documentation is accessible at http://127.0.0.1:1313

## Creating Website
1. Install [Hugo](https://gohugo.io/installation/), this theme requires the "extended version" (or installed Dart Sass) because it uses SCSS.
2. Follow the Hugo [quickstart](https://gohugo.io/getting-started/quick-start/):
    1. Test if Hugo is correctly installed.
    ```sh
    $ hugo version
    ```
    2. Create new Hugo website structure 
    ```sh
    $ hugo new site [project name]
    ```
3. Add this theme as submodule in the `themes` folder:
```sh
$ cd [project name]/themes 
$ git submodule add [this repo url]
```
    1. (Optional) Freeze submodule to specific release (tag):
    ```sh
    $ cd [project name]/themes/hugo-theme-ncsu
    $ git checkout v2024.08rc
    ```
5. Copy example config file to website (from the theme's folder):
```sh
$ cp [project name]/themes/hugo-theme-ncsu/hugo.toml [project name]
```
6. Edit hugo.toml config file (see documentation for settings).
```sh
$ nvim [project name]/hugo.toml
```

## Deploying Website
Two ways:
1. Using GitHub / Gitlab /... actions to deploy directly to web server.
   - GitHub pages supports Hugo
   - Alternative (free for static websites) services: Netlify, Vercel, Cloudflare
3. Use hugo (just the CLI command `hugo` in the project folder) to generate a `public` folder with all the necessary HTML and resources to directly deploy to a web server
    - Might require to set `baseURL` variable in `hugo.toml` to web servers base url for resources to be loaded correctly.

## Releases
The main branch receives continous updates and features (although likely at a slow and non-breaking rate because static website theme).
Frozen releases are tagged and released with the name of upcoming semesters, e.g., `2024.08` for Fall semester 2024, you can set specific releases in the submodule to freeze the theme version.
