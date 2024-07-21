# hugo-theme-ncsu

Example / documentation page for the Bootstrap 5 version of the unofficial `hugo-theme-ncsu`.

## Config

```toml
baseURL = "" # Set by deploy script
languageCode = "en-us"
title = "NCSU Theme Documentation"
theme = "hugo-theme-ncsu"
canonifyURLs = true
disableKinds = ["taxonomy","RSS"]
```

### Parameters

```toml
[params]
	iteration = "Fall 2024"
	year = "2024"
	cshort = "CSC XXX"
	clong = "Example Lecture"
	cfull = "CSC XXX - Example Lecture"
	cdesc = "Some longer course description"
	time = "Monday, Wednesday 6:00pm -- 7:15pm"
	location = "1226 Engineering Building 2 (EB 2)"
	# Theme specific setting
	showToC = true # ToC on the right
	showSidebar = true # Sidebar on the left
	showWIP	= true # 'Work in progress' message on every page
	showFooter = true  # Site footer with some lecture info
```

### Menu

```toml
# Menu
sectionPagesMenu = "main"
[menu]
	[[menu.main]]
		identifier = "about"
		name = "About"
		URL = "/"
		weight = 1
	[[menu.main]]
		identifier = "schedule"
		name = "Schedule"
		URL = "/schedule/"
		weight = 2
	[[menu.main]]
		identifier = "syllabus"
		name = "Syllabus"
		URL = "/syllabus/"
		weight = 3
```

## Shortcodes

### Alert

Creates bootstrap alert text box with customizable markdown content.
First parameter is passed as class (for setting color).
- Bootstrap documentation: https://getbootstrap.com/docs/5.0/components/alerts/
- Example parameters: `alert-primary` (red), `alert-secondary` (grey), `alert-success` (green), ...

**Usage**:

```tpl
{{</* alert "alert-primary" */>}}
**Alert**: some markdown text to display.
{{</* /alert */>}}
```

**Examples:**

{{< alert "alert-primary" >}}
With parameter: `alert-primary`
{{< /alert >}}
{{< alert "alert-success" >}}
With parameter: `alert-success`
{{< /alert >}}
{{< alert "alert-info" >}}
With parameter: `alert-info`
{{< /alert >}}

### Assignment

Assignment shortcode with multiple displays of assignment data from `/data/assignments.toml`.
Example data entry:
```toml
[a1]
id 			= "1"
type		= "weekly"
name	 	= "Assignment 01"
short_name 	= "A01"
url 		= "/schedule#a1"
page		= "/assignments/a1"
date 		= "2024-07-21T13:59:59"
color		= "bg-secondary"
```

Shortcode parameters:
- pos 0, "id": Specific assignment selected by `id` field from `/data/assignments.toml`.
- pos 1, "type": optional type to control what data is displayed (see examples below for all options).


1. Without any type just renders assignment title with link to assignment `page` if provided:
    ```tpl
    {{</* assignment "1" */>}}
    ```
    {{< assignment "1" >}}
2. type=`badge` renders as badge with link to assignment `url` if provided.
    ```tpl
    {{</* assignment "1" "badge" */>}}
    ```
    {{< assignment "1" "badge" >}} <br>
    Badge color optionally set by a `color` variable in the data file. Color options follow the Bootstrap 5 badge format, e.g., `bg-primary`, `bg-info`, etc. <br>
    {{< assignment "2" "badge" >}}
3. type=`date` renders due date and time:
    ```tpl
    {{</* assignment "1" "date" */>}}
    ```
    {{< assignment "1" "date" >}}
4. type=`countdown` renders a countdown for the time in the `date` field.
Should be timezone aware using the `moments.js` library (not extensively tested), assumes ETC time for the provided `date` data:
    ```tpl
    {{</* assignment "1" "countdown" */>}}
    {{</* assignment "2" "countdown" */>}}
    ```
    {{< assignment "1" "countdown" >}} <br>
    {{< assignment "2" "countdown" >}}

<span class="badge">Test</span>

### Card

Generic bootstrap card that displays content as body text.
No additional parameters.

**Usage**:

```tpl
{{</* card */>}}
**Card**: some markdown text to display.
{{</* /card */>}}
```

**Examples:**

{{< card >}}
**Card**: some markdown text to display.
{{< /card >}}

Also plays well with the columns short code:

{{< columns >}}
{{< card >}}
**Left Card**: some markdown text to display.
{{< /card >}}
<--->
{{< card >}}
**Right Card**: some markdown text to display.
{{< /card >}}
{{< /columns >}}

### Chart
Wrapper shortcode to render a `chart.js` chart directly in markdown.
Automatically includes the chart.js library.
Optional parameters:
- pos 0: width in percent
- pos 1: height in pixels

**Usage**:

```tpl
{{</* chart "80%" 100 */>}}
{
    type: 'doughnut',
    data: {
        labels: ['Assignments', 'Exams', 'Reading / Participation'],
        datasets: [{
            label: 'Percent',
            data: [60, 30, 10],
        }]
    },
    options: {
		indexAxis: 'y',
        maintainAspectRatio: false,
		plugins: {
			legend: {
				display: false
			}
		}
    }
}
{{</* /chart */>}}
```

**Example**:

{{< chart "80%" 100 >}}
{
    type: 'doughnut',
    data: {
        labels: ['Assignments', 'Exams', 'Reading / Participation'],
        datasets: [{
            label: 'Percent',
            data: [60, 30, 10],
        }]
    },
    options: {
		indexAxis: 'y',
        maintainAspectRatio: false,
		plugins: {
			legend: {
				display: false
			}
		}
    }
}
{{< /chart >}}

### Columns

Shortcode to generate two columns.
Optional parameter to set maximum width for each column.
The two columns are split by `<--->`.

```tpl
{{</* columns */>}}

#### Left Column
Text that will appear in the left column.

<--->

#### Right Column
Text that will appear in the right column

{{</* /columns */>}}
```

{{< columns >}}

#### Left Column
Text that will appear in the left column.

<--->

#### Right Column
Text that will appear in the right column

{{< /columns >}}

Also works for more than 2 columns:

{{< columns >}}

#### First Column
Text that will appear in the first column.

<--->

#### Second Column
Text that will appear in the second column

<--->

#### Third Column
Text that will appear in the third column

{{< /columns >}}

### Details

Shortcode for the HTML "details" built-in to show/hide longer content adapted for Bootstrap 5.
Takes up to 2 parameters and inner content:
- pos 0, "title": Title shown for the summary
- pos 1, "open": Whether the detail starts expanded
- inner: Text hidden / displayed by the summary

**Usage**:

```tpl
{{</* details title="Title of the Detail" */>}}
Some inner text
{{</* /details */>}}
```

```tpl
{{</* details title="Detail that starts open" open=true */>}}
Some inner text that starts visible
{{</* /details */>}}
```

**Examples**:

{{< details title="Title of the Detail" >}}
Some inner text
{{< /details >}}

{{< details title="Detail that starts open" open=true >}}
Some inner text that starts visible
{{< /details >}}

### Table
Wrapper shortcode to use bootstrap table classes for markdown tables.
Pass classes as parameters, markdown table as inner content.
- Modified from: https://stackoverflow.com/questions/64609165/how-to-give-a-hugo-markdown-table-a-class-when-the-table-contains-shortcodes

**Usage**:

```tpl
{{</* table "table-striped col-auto" */>}}
|  |  |
|-------------------|-----------------------------------------|
| Format            | In-person, recorded|
| Credits           | 3 |
| Meeting Times	    | 6:00 am |
| Meeting Location  | Earth |
| Instructor        | Dr. Doe |
{{</* /table */>}}
```

**Example**:

{{< table "table-striped col-auto" >}}
|  |  |
|-------------------|-----------------------------------------|
| Format            | In-person, recorded|
| Credits           | 3 |
| Meeting Times	    | 6:00 am |
| Meeting Location  | Earth |
| Instructor        | Dr. Doe |
{{< /table >}}
