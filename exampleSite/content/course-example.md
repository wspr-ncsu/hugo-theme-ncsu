+++
title = "Course Example"
date = 2024-06-17
menuHighlight = "course-example"
startDate = 2024-08-19
lectureTime = "6:00pm-7:15pm"
+++

# Course Example

A student-facing course page assembled from theme components. It includes selected schedule examples without turning the page into a full semester calendar.

{{< alert "alert-info" >}}
Use this page as a starting point for the first page students see. The schedule excerpt below demonstrates week headings, lectures, deadlines, and no-class events.
{{< /alert >}}

## Course Info

{{< dl "table-striped col-auto" >}}
Course | {{< param "cfull" >}}
Term | {{< param "iteration" >}}
Meeting Time | {{< param "time" >}}
Location | {{< param "location" >}}
{{< /dl >}}

## Assignments

{{< dl "table-striped" >}}
Exercises | {{< assignment "a1" "badge" >}} {{< assignment "a2" "badge" >}} {{< assignment "a3" "badge" >}}
Readings | {{< assignment "p1" "badge" >}}
Final Exam | {{< assignment "final" "badge" >}} {{< assignment "final" "date" >}}
{{< /dl >}}

## Course Work

{{< row >}}
{{< col "col-md-4" >}}
{{< card >}}
### Exercises

Short technical practice tasks that reinforce core concepts.
{{< /card >}}
{{< /col >}}
{{< col "col-md-4" >}}
{{< card >}}
### Readings

Paper readings and responses that prepare discussion.
{{< /card >}}
{{< /col >}}
{{< col "col-md-4" >}}
{{< card >}}
### Project

Research or implementation work that builds across the semester.
{{< /card >}}
{{< /col >}}
{{< /row >}}

## Schedule Excerpt

These examples use `/data/lectures.toml`, `/data/assignments.toml`, `startDate`, and `lectureTime`.

<!-- Week 1 -->
{{% schedule/week title="First Week" %}}

{{% schedule/happening "mon" %}}
First day of classes
{{% /schedule/happening %}}

{{% schedule/lecture "mon" "lec-intro" %}}

{{% schedule/lecture day="wed" id="lec-hcs" recorded="true" %}}

{{% schedule/happening "fri" "deadline" "11:59pm" %}}
**Deadlines**: {{% assignment "a1" "date" %}} (Raleigh time)
- {{% assignment "a1" %}} {{% assignment "a1" "label" %}}
- {{% assignment "p1" %}} {{% assignment "p1" "label" %}}
{{% /schedule/happening %}}

<!-- Week 2 -->
{{% schedule/week title="Variations" %}}

{{% schedule/lecture "mon" "lec-foundations" %}}

{{% schedule/lecture "wed" "lec-ethics" %}}

{{% schedule/happening "fri" "deadline" "11:59pm" %}}
**Deadline**: {{% assignment "a2" "date" %}} (Raleigh time)
- {{% assignment "a2" %}} {{% assignment "a2" "label" %}}
{{% /schedule/happening %}}

<!-- Week 3 -->
{{% schedule/week title="No Class Example" %}}

{{% schedule/happening "mon" "noclass" %}}
Labor Day - **No Classes**, University Closed
{{% /schedule/happening %}}

{{% schedule/lecture day="wed" id="lec-exp1" recorded=false time="XYZ pm" %}}

## Where Things Live

{{< dl "table-striped" >}}
Course Example | Course metadata, assignment summary, selected schedule patterns, and policies.
Config | Site settings, theme parameters, overrides, and data file schemas.
Shortcodes | Component usage, schedule shortcode details, and rendering examples.
Markdown | Markdown compatibility and typography examples.
{{< /dl >}}

## Policies

{{< details title="Late Work" >}}
Late submissions should be discussed before the deadline when possible. Course-specific grace periods, penalties, or extension processes can be documented here.
{{< /details >}}

{{< details title="Academic Integrity" >}}
Students are expected to follow the university academic integrity policy. Collaboration rules, allowed resources, and citation expectations can be documented here.
{{< /details >}}
