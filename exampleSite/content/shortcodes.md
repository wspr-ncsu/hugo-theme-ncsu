+++
title = "Shortcodes"
date = 2024-07-21
menuHighlight = "shortcodes"
startDate = "2024-08-19"
lectureTime = "6:00pm-7:15pm"
+++

# Shortcodes

Theme shortcodes for Bootstrap components, course metadata, charts, assignments, and schedules.

## Bootstrap Shortcodes

Shortcodes that wrap some Bootstrap elements and classes for easier use in Markdown files.
Note that HTML code with Bootstrap classes is also valid Markdown and will render.

### Alert
Bootstrap alert text box with customizable markdown content.
First parameter is passed as class (for setting color).
- Bootstrap documentation: https://getbootstrap.com/docs/5.3/components/alerts/
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

### Badge
Bootstrap badge span with customizable markdown content.
- Bootstrap documentation: https://getbootstrap.com/docs/5.3/components/badge/
- Example parameters: `alert-primary` (red), `alert-secondary` (grey), `alert-success` (green), ...

```tpl
{{</* badge "text-bg-primary" */>}}
Primary
{{</* /badge */>}}
```
{{< badge "text-bg-primary" >}}
Primary
{{< /badge >}}
<br>

**Examples:**

{{< badge "text-bg-primary" >}}
Primary
{{< /badge >}}

{{< badge "text-bg-secondary" >}}
Secondary
{{< /badge >}}

{{< badge "text-bg-info" >}}
Info
{{< /badge >}}

{{< badge "text-bg-warning" >}}
Warning
{{< /badge >}}

{{< badge "text-bg-success" >}}
Success
{{< /badge >}}

#### Pill Badge
With `.rounded-pill` class.

```tpl
{{</* badge "text-bg-primary rounded-pill" */>}}
Primary
{{</* /badge */>}}
```
{{< badge "text-bg-primary rounded-pill" >}}
Primary
{{< /badge >}}


### Button
Bootstrap button with customizable markdown content.
- Bootstrap documentation: https://getbootstrap.com/docs/5.3/components/buttons/

```tpl
{{</* button "btn-primary" */>}}
Primary
{{</* /button */>}}
```
{{< button "btn-primary" >}}
Primary
{{< /button >}}
<br>

**Examples:**

{{< button "btn-primary" >}}
Primary
{{< /button >}}

{{< button "btn-secondary" >}}
Secondary
{{< /button >}}

{{< button "btn-info" >}}
Info
{{< /button >}}

{{< button "btn-success" >}}
Success
{{< /button >}}

{{< button "btn-warning" >}}
Warning
{{< /button >}}

{{< button "btn-link" >}}
Link
{{< /button >}}

#### Outline Buttons
With `.btn-outline-*` classes:

```tpl
{{</* button "btn-outline-primary" */>}}
Primary
{{</* /button */>}}
```
{{< button "btn-outline-primary" >}}
Primary
{{< /button >}}
<br>

**Examples:**

{{< button "btn-outline-primary" >}}
Primary
{{< /button >}}

{{< button "btn-outline-secondary" >}}
Secondary
{{< /button >}}

{{< button "btn-outline-info" >}}
Info
{{< /button >}}

{{< button "btn-outline-success" >}}
Success
{{< /button >}}

{{< button "btn-outline-warning" >}}
Warning
{{< /button >}}

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

### Col & Row
Bootstrap column & row class wrappers.
- Bootstrap documentation: https://getbootstrap.com/docs/5.3/layout/grid/
- Bootstrap grid works with 12 vertical, i.e., col-8 will leave 4 vertical slots for remaining columns.

```tpl
{{</* row */>}}
{{</* col */>}}
Column 1
{{</* /col */>}}
{{</* col "col-6" */>}}
Column 2 (Larger)
{{</* /col */>}}
{{</* /row */>}}
```
{{< row >}}
{{< col >}}
#### Column 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
{{< /col >}}
{{< col "col-8" >}}
#### Column 2 (Larger)
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
{{< /col >}}
{{< /row >}}

### Columns

{{< alert "alert-warning" >}}
**Deprecation Warning**: non-bootstrap `columns` shortcode will be deprecated in the future in favor of the bootstrap-native `row` and `col`.
{{< /alert >}}

Shortcode to generate two columns.
- `width` as optional parameter to set maximum width for each column in px (will wrap if wider).
- `split` as optional parameter to set split ratio between columns (i.e. `split = "2/1"` for 66% and 33%). Overwrites any width parameter.

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

With different split ratios:

```tpl
{{</* columns split="2/1" */>}}

#### Left Column
66% column.

<--->

#### Right Column
33% column.

{{</* /columns */>}}
```


{{< columns split="2/1" >}}

#### Left Column
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

<--->

#### Right Column
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

{{< /columns >}}

Splits also work for multiple columns

```tpl
{{</* columns split="1/1/3" */>}}

#### First Column
20% column.

<--->

#### Second Column
20% column.

<--->

#### Third Column
60% column.

{{</* /columns */>}}
```

{{< columns split="1/1/3" >}}

#### First Column
20% column.

<--->

#### Second Column
20% column.

<--->

#### Third Column
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

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

### Definition List
Wrapper shortcode to render compact key-value information as semantic HTML definition lists.
Pass classes as parameters, using Bootstrap-style table classes supported by this theme:
- `table-striped`: Alternate row backgrounds.
- `table-sm`: Smaller row padding.
- `col-auto`: Use content width instead of full width.

Each row is written as `Term | Description`.
Markdown is supported in both columns.

**Usage**:

```tpl
{{</* dl "table-striped col-auto" */>}}
Format | In-person, recorded
Credits | 3
Meeting Times | 6:00 am
Meeting Location | Earth
Instructor | **Dr. Doe**
{{</* /dl */>}}
```

**Example**:

{{< dl "table-striped col-auto" >}}
Format | In-person, recorded
Credits | 3
Meeting Times | 6:00 am
Meeting Location | Earth
Instructor | **Dr. Doe**
{{< /dl >}}

---

## Custom Shortcodes

Custom shortcodes for this theme (mostly focused around class schedules).

### Assignment

Assignment shortcode with multiple displays of assignment data from `/data/assignments.toml`.
Examples are included on the [Course Example](/course-example/) page.

Example data entry:
```toml
[a1]
id 			= "a1"
name	 	= "Assignment 01"
short_name 	= "A01"
url 		= "/course-example#a1"
page		= "/course-example#A01"
date 		= "2024-07-21T13:59:59"
color		= "bg-secondary"
```

Shortcode parameters:
- pos 0, "id": Specific assignment selected by `id` field from `/data/assignments.toml`.
- pos 1, "type": optional type to control what data is displayed (see examples below for all options).


#### Default
Without any type just renders assignment title with link to assignment `page` if provided:
```tpl
{{</* assignment "a1" */>}}
```
{{< assignment "a1" >}}

#### badge
type=`badge` renders as badge with link to assignment `url` if provided.
- Different badge color optionally set by a `color` variable in the data file. Color options follow the Bootstrap 5 badge format, e.g., `bg-primary`, `bg-info`, etc.
- Theme has custom additional badge classes for more colors; `bg-blue`, `bg-purple` etc.
- Color class can be combined with text classes for hard to read text colors, e.g. `color = "bg-warning text-dark"`

```tpl
{{</* assignment "a1" "badge" */>}}
{{</* assignment "a2" "badge" */>}}
```
{{< assignment "a1" "badge" >}} <br>
{{< assignment "a2" "badge" >}}

#### date
type=`date` renders due date and time:
```tpl
{{</* assignment "a1" "date" */>}}
```
{{< assignment "a1" "date" >}}

#### countdown
type=`countdown` renders a countdown for the time in the `date` field.
Should be timezone aware using the `moments.js` library (not extensively tested), assumes EST (`America/NewYork`) time for the provided `date` data:
```tpl
{{</* assignment "a1" "countdown" */>}}
{{</* assignment "a2" "countdown" */>}}
```
{{< assignment "a1" "countdown" >}} <br>
{{< assignment "a2" "countdown" >}}

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

### Schedule
Collection of 3 mostly independent shortcodes `week`, `happening`, and `lecture` to render a schedule using Bootstrap 5 cards. See [Course Example](/course-example/) for selected schedule examples in course context.
- All 3 shortcodes can automatically compute and display dates if a `startDate  = 2024-08-19` (first Monday of the semester) variable is set in the page frontmatter. Otherwise they will fall back to not showing specific dates.
- **Note** that all schedule shortcodes need to be initiated with `{{%/* */%}}`, **not** the usual `{{</* */>}}` because the week shortcode needs to appear early in the rendering pipeline to show up in the ToC and the other shortcodes need to appear in the same context for shared variables.

A combined use of the three shortcodes in a schedule could look like this:

```tpl
// Start of the first week
{{%/* schedule/week title="First Week" */%}}

// No class on Monday
{{%/* schedule/happening "mon" "noclass" */%}}
Labor Day - **No Classes**, University Closed
{{%/* /schedule/happening */%}}

// Lecture "lec-intro" on Tuesday
{{%/* schedule/lecture "tue" "lec-intro" */%}}

// Lecture "lec-hcs" on Thursday
{{%/* schedule/lecture "thu" "lec-hcs" */%}}

// A Deadline on Friday
{{%/* schedule/happening "fri" "deadline" "11:59pm" */%}}
**Deadline**: [Assignment 1](/#example) (11:59pm)
{{%/* /schedule/happening */%}}
```

#### Week
Displays a week heading (also shows up in ToC).
- Automatically counts up from Week 1. Manually set week with a `week = "XX"` shortcode parameter, will continue counting automatically from set value.
- Optionally set a `title` variabel to show up in the week title and ToC.
- Optionally with specific week dates (in grey) if `startDate` variable is set on page.

**Usage**:

```tpl
{{%/* schedule/week */%}}
{{%/* schedule/week title="Example" */%}}
{{%/* schedule/week "20" */%}}
{{%/* schedule/week */%}}
```

**Examples**:

{{% schedule/week %}}
{{% schedule/week title="Example" %}}
{{% schedule/week "20" %}}
{{% schedule/week %}}

#### Happening
Generic happening schedule shortcode with a number of display options. Date is derived from the `day` parameter and last week shortcode used.
Short code parameters:
- pos 0, `day`: Day of the happening (3 letter lower), e.g., `day = "mon"`, `tue`, etc.
- pos 1, `type`: optional type of the happening (different display, see below for examples)
- pos 2, `time`: optional time argument, shown on the right side of the header if provided (useful for, e.g., exams)
- Inner content rendered as markdown

##### Default
No type, generic grey, single line happening
```tpl
{{%/* schedule/happening "mon" */%}}
Something is **happening** today.
{{%/* /schedule/happening */%}}
```

{{% schedule/happening "mon" %}}
Something is **happening** today.
{{% /schedule/happening %}}

#### noclass
type=`noclass`, green background, single line, e.g. used for no class happening.
```tpl
{{%/* schedule/happening "tue" "noclass" */%}}
Labor Day - **No Classes**, University Closed
{{%/* /schedule/happening */%}}
```
{{% schedule/happening "tue" "noclass" %}}
Labor Day - **No Classes**, University Closed
{{% /schedule/happening %}}

#### deadline
type=`deadline`, red outline, deadline events. Takes optional time parameter.
```tpl
{{%/* schedule/happening "wed" "deadline" "11:59pm" */%}}
**Deadline**: [Assignment 1](/#example) (11:59pm)
{{%/* /schedule/happening */%}}
```
{{% schedule/happening "wed" "deadline" "11:59pm"%}}
**Deadline**: [Assignment 1](/#example) (11:59pm)
{{% /schedule/happening %}}

Mostly works well with the `assignment` shortcode (minus the countdown type currently):

```tpl
{{%/* schedule/happening "wed" "deadline" */%}}
{{%/* assignment "a3" "badge" */%}} **Deadline**: {{%/* assignment "a3" */%}}, due {{%/* assignment "a3" "date" */%}}
{{%/* /schedule/happening */%}}
```

{{% schedule/happening "wed" "deadline" %}}
{{% assignment "a3" "badge" %}} **Deadline**: {{% assignment "a3" %}}, due {{% assignment "a3" "date" %}}
{{% /schedule/happening %}}

#### exam
type=`exam`, red background, multi-line exam event. Takes optional exam time.
```tpl
{{%/* schedule/happening "fri" "exam" "7:00pm" */%}}
### Final Exam (7:00pm -- 9:30pm)
- Some extra info
- Link [test](#example)
{{%/* /schedule/happening */%}}
```
{{% schedule/happening "fri" "exam" "7:00pm" %}}
### Final Exam (7:00pm -- 9:30pm)
- Some extra info
- Link [test](#example)
{{% /schedule/happening %}}

### Lecture
The lecture shortcode renders lecture data from `/data/lectures.toml` by provided id.

Example lecture entry with optional parameters commented out:
```toml
[intro]
id			= "lec-intro"
title		= "Course Introduction"
# label		    = "lec-xyz"
# description	= "Included in recording of Lec00"
# short		    = "Guest Lecture"
# time		    = "3 pm"
# slides		= "https://drive.google.com/..."
# recording	    = "https://ncsu.hosted.panopto.com/..."
```
- `id`: ID to retrive this lecture by from the shortcode (e.g. `{{%/* schedule/lecture "mon" "lec-intro" */%}}` for the id `lec-intro`).
- `title`: Lecture title
- `label`: Optional label to directly reference lecture on page (link id) and displayed in header. ID is used if not set.
- `description`: Optional description text displayed for the lecture. Supports markdown.
- `short`: Optional text displayed before the lecture title (e.g., "Guest Lecture"). Defaults to "Lecture X" with automatically incrementing counter.
- `time`: Optional parameter to overwrite the lecture time displayed in the header. Defaults to page variable `lectureTime` or no display if the page variable is not set.
- `slides`: Link to lecture slides.
- `recording`: Link to lecture recording.

Optionally, `discussion`, `mentioned`, and `additional` subtables can be provided to display additional resources (including some icons based on the type):
```
[intro.additional]
a1 = {authors="BD Payne, WK Edwards", title="A Brief Introduction to Usable Security", url="https://faculty.cc.gatech.edu/~keith/pubs/ieee-intro-usable-security.pdf", venue="IEEE Internet Computing", date="2008", type = "paper"}
[intro.mentioned]
m1 = {title="ACM SIGSOFT Empirical Standards for Software Engineering", url="https://www2.sigsoft.org/EmpiricalStandards/tools/", type="website"}
```
Automatic settings:
- Displays specific dates based on last week shortcode and passed weekday parameter, requires `startDate` to be set on the page.
- Displays lecture times in the header if a page frontmatter variable is set: `lectureTime = "6:00pm-7:15pm"`
- Automatically counts up lecture counter ("Lecture 1: ..."), can be overwritten for each lecture in the toml, e.g., `short = "Guest Lecture"`.

Short code parameters:
- pos 0, `day`: Day of the lecture (3 letter lower), e.g., `mon`, `tue`, etc.
- pos 1, `id`: ID of the lecture to display from the toml file, can be alphanumeric, e.g., `lec-intro`.
- pos 2, `recorded`: optional, for pre-recorded lectures, replaces lecture time and adds warning that this lecture won't be in person

**Examples**:

```tpl
{{%/* schedule/lecture "mon" "lec-intro" */%}}
```
{{% schedule/lecture "mon" "lec-intro" %}}


With `recorded = true` set in shortcode:

```tpl
{{%/* schedule/lecture "tue" "lec-intro" "true" */%}}
```
{{% schedule/lecture "tue" "lec-intro" "true" %}}
