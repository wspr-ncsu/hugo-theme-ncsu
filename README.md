# hugo-theme-ncsu

(Unofficial) [Hugo](https://github.com/gohugoio/hugo) (static site generator written in Go) theme using Bootstrap 5 and inspired by the NC State branding and resources.

Examples: 
- https://csc591.dwermke.com/

Older versions using the `bs3` template (see releases):
- https://csc791.dwermke.com/
- https://csc574.dwermke.com/

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
$ cd [project name]
    ```
    3. Add this theme as submodule in the `themes` folder:
    ```sh
$ cd themes 
$ git submodule add [this repo url]
$ cd hugo-theme-ncsu
    ```
    4. (Optional) Freeze submodule to specific release (tag):
    ```sh
    git checkout v2024.08rc
    ```
    5. Copy example config file to website (from the theme's folder):
    ```sh
$ cp hugo.toml ../.. 
    ```
    6. Edit hugo.toml config file (see documentation for settings).

## Deploying Website
Two ways:
1. Using GitHub / Gitlab /... actions
2. Using hugo (just the CLI command `hugo`) to generate a `public` folder with all the necessary html and resources to directly deploy to a web server (might need to set `baseURL` variable in `hugo.toml` to web servers base url).

## exampleSite
This theme includes its own documentation in `/exampleSite`.
With hugo installed, run a test server with:

```sh
cd exampleSite
hugo --themesDir ../.. server
```

Documentation is accessible at http://127.0.0.1:1313

## Releases
The main branch receives continous updates and features (although likely at a slow and non-breaking rate because static website theme).
Frozen releases are tagged and released with the name of upcoming semesters, e.g., `2024.08` for Fall semester 2024.
