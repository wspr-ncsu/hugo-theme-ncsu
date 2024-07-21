+++
date = 2024-07-21
layout = "home"
menuHighlight = "about"
startDate = "2024-08-19"
lectureTime = "6:00pm-7:15pm"
+++

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


#### Default
Without any type just renders assignment title with link to assignment `page` if provided:
```tpl
{{</* assignment "1" */>}}
```
{{< assignment "1" >}}

#### badge
type=`badge` renders as badge with link to assignment `url` if provided.
    Different badge color optionally set by a `color` variable in the data file. Color options follow the Bootstrap 5 badge format, e.g., `bg-primary`, `bg-info`, etc.
```tpl
{{</* assignment "1" "badge" */>}}
{{</* assignment "2" "badge" */>}}
```
{{< assignment "1" "badge" >}} <br>
{{< assignment "2" "badge" >}}

#### date
type=`date` renders due date and time:
```tpl
{{</* assignment "1" "date" */>}}
```
{{< assignment "1" "date" >}}

#### countdown
type=`countdown` renders a countdown for the time in the `date` field.
Should be timezone aware using the `moments.js` library (not extensively tested), assumes EST (`America/NewYork`) time for the provided `date` data:
```tpl
{{</* assignment "1" "countdown" */>}}
{{</* assignment "2" "countdown" */>}}
```
{{< assignment "1" "countdown" >}} <br>
{{< assignment "2" "countdown" >}}

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

### Schedule
Collection of 3 mostly independent shortcodes `week`, `happening`, and `lecture` to render a schedule using Bootstrap 5 cards (see [schedule](/schedule) for an in-practice example).
- All 3 shortcodes can automatically compute and display dates if a `startDate  = 2024-08-19` (first Monday of the semester) variable is set in the page frontmatter.
- Otherwise they will fall back to not showing specific dates

#### Week
Displays a week heading (also shows up in ToC), optionally with specific week dates based on `startDate` variable.
- Note that the week shortcode is initiated with `{{%/* */%}}`, **not** the usual `{{</* */>}}` because it needs to appear early in the rendering pipeline to show up in the ToC.

**Usage**:

```tpl
{{%/* schedule/week "1" */%}}
{{%/* schedule/week "20" */%}}
```

**Examples**:

{{% schedule/week "1" %}}
{{% schedule/week "20" %}}

#### Happening

Generic happening schedule shortcode with a number of display options.
Short code parameters:
- pos 0, "week": Week number
- pos 1, "day": Day of the happening (3 letter lower), e.g., `mon`, `tue`, etc.
- pos 2, "type": optional type of the happening (different display, see below for examples)
- pos 3, "time": optional time argument, shown on the right side of the header if provided (useful for, e.g., exams)
- Inner content rendered as markdown

##### Default
No type, generic grey, single line happening
```tpl
{{</* schedule/happening "1" "mon" */>}}
Something is **happening** today.
{{</* /schedule/happening */>}}
```

{{< schedule/happening "1" "mon" >}}
Something is **happening** today.
{{< /schedule/happening >}}

#### noclass
type=`noclass`, green background, single line no class event
```tpl
{{</* schedule/happening "1" "tue" "noclass" */>}}
Labor Day - **No Classes**, University Closed
{{</* /schedule/happening */>}}
```
{{< schedule/happening "1" "tue" "noclass" >}}
Labor Day - **No Classes**, University Closed
{{< /schedule/happening >}}

#### deadline
type=`deadline`, red outline, single line deadline event
```tpl
{{</* schedule/happening "1" "wed" "deadline" */>}}
**Deadline**: [Assignment 1](/#example) (11:59pm)
{{</* /schedule/happening */>}}
```
{{< schedule/happening "1" "wed" "deadline" >}}
**Deadline**: [Assignment 1](/#example) (11:59pm)
{{< /schedule/happening >}}

Mostly works well with the `assignment` shortcode (minus the countdown display):

```tpl
{{</* schedule/happening "1" "wed" "deadline" */>}}
{{</* assignment "3" "badge" */>}} **Deadline**: {{</* assignment "3" */>}}, due {{</* assignment "3" "date" */>}} 
{{</* /schedule/happening */>}}
```

{{< schedule/happening "1" "wed" "deadline" >}}
{{< assignment "3" "badge" >}} **Deadline**: {{< assignment "3" >}}, due {{< assignment "3" "date" >}}
{{< /schedule/happening >}}

#### exam
type=`exam`, red background, multi-line exam event. Takes optional exam time.
```tpl
{{</* schedule/happening "16" "fri" "exam" "7:00pm" */>}}
### Final Exam (7:00pm -- 9:30pm)
- Some extra info
- Link [test](#example)
{{</* /schedule/happening */>}}
```
{{< schedule/happening "16" "fri" "exam" "7:00pm" >}}
### Final Exam (7:00pm -- 9:30pm)
- Some extra info
- Link [test](#example)
{{< /schedule/happening >}}

### Lecture
Automatically renders lecture data from `/data/lectures.toml`. Goes by auto-incrementing id.
Example data:
```toml
[intro]
id			= 1
title		= "Course Introduction"
short		= "Lec01"
slides		= "https://drive.google.com/..."
recording	= "https://ncsu.hosted.panopto.com/..."
description	= "Included in recording of Lec00"
```
Optionally, `mentioned` and `additional` tables can be provided, including some additional icons based on type:
```
[intro.additional]
a1 = {authors="BD Payne, WK Edwards", title="A Brief Introduction to Usable Security", url="https://faculty.cc.gatech.edu/~keith/pubs/ieee-intro-usable-security.pdf", venue="IEEE Internet Computing", date="2008", type = "paper"}
[intro.mentioned]
m1 = {title="ACM SIGSOFT Empirical Standards for Software Engineering", url="https://www2.sigsoft.org/EmpiricalStandards/tools/", type="website"}
```
Also displays lecture times in the header if a page frontmatter variable is set: `lectureTime = "6:00pm-7:15pm"`

Short code parameters:
- pos 0, "week": Week number
- pos 1, "day": Day of the happening (3 letter lower), e.g., `mon`, `tue`, etc.
- pos 2, "recorded": optional, for pre-recorded lectures, replaces lecture time and adds warning that this lecture won't be in person

**Examples**:

```tpl
{{</* schedule/lecture 2 "mon" */>}}
```
{{< schedule/lecture 2 "mon" >}}

```tpl
{{</* schedule/lecture 2 "tue" "true" */>}}
```
{{< schedule/lecture 2 "tue" "true" >}}


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
