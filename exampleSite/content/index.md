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
{{</* chart "80%" 100 +/>}}
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
{{</* columns +/>}}

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
