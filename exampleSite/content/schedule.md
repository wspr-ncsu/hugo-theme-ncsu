+++
title = "Schedule"
date = 2024-06-17
startDate = 2024-08-19
lectureTime = "6:00pm-7:15pm"
+++

# Schedule

This is the schedule for {{< param "clong" >}}. For another detailed overview of topics see the [syllabi page](/syllabus).

**Deadlines**
- Assignments (~ every 2 weeks): {{< assignment "a1" "badge" >}} {{< assignment "a2" "badge" >}} {{< assignment "a3" "badge" >}}
- Paper readings (~ every 2 weeks): {{< assignment "p1" "badge" >}}
- Final exam: {{< assignment "final" "badge" >}} ({{< assignment "final" "date" >}}, in `{{< assignment "final" "countdown" >}}`)


<!-- Week 1 -->
{{% schedule/week title="First Week" %}}

{{% schedule/happening "mon" %}}
First day of classes
{{% /schedule/happening %}}

Base lecture:
{{% schedule/lecture "mon" "lec-intro" %}}

With `recorded="true"` shortcode parameter:
{{% schedule/lecture day="wed" id="lec-hcs" recorded="true" %}}

{{% schedule/happening "fri" "deadline" "11:59pm" %}}
**Deadlines**: {{< assignment "a1" "date" >}} (Raleigh time) via Gradescope:
- {{< assignment "a1" >}} {{< assignment "a1" "label">}}
- {{< assignment "p1" >}} {{< assignment "p1" "label">}}
{{% /schedule/happening %}}


<!-- Week 2 -->
{{% schedule/week %}}

With `short = "Guest Lecture:"` in the toml:
{{% schedule/lecture "mon" "lec-foundations" %}}

With `label = "xyz"` in the toml (note the different lecture label in the card header):
{{% schedule/lecture "wed" "lec-ethics" %}}

{{% schedule/happening "fri" "deadline" "11:59pm" %}}
**Deadlines**: {{< assignment "a2" "date" >}} (Raleigh time) via Gradescope:
- {{< assignment "a2" >}} {{< assignment "a2" "label">}}
{{% /schedule/happening %}}


<!-- Week 3 -->
{{% schedule/week %}}

{{% schedule/happening "mon" "noclass" %}}
Labor Day - **No Classes**, University Closed
{{% /schedule/happening %}}

With `time = "XYZ pm"` as shortcode parameter (note different lecture time in header):
{{% schedule/lecture day="wed" id="lec-exp1" recorded=false time="XYZ pm" %}}


<!-- Week 4 -->
{{% schedule/week title="Red & White Week"%}}

{{% schedule/lecture "mon" "lec-exp2" %}}
{{% schedule/lecture "wed" "lec-pop" %}}
{{% schedule/happening "fri" "deadline" "11:59pm" %}}
**Deadline**: {{< assignment "a3" "date" >}} (Raleigh time) via Gradescope:
- {{< assignment "a3" >}} {{< assignment "a3" "label">}}
{{% /schedule/happening %}}


<!-- Week 5 -->
{{% schedule/week %}}

{{% schedule/happening "mon" "noclass" %}}
**No Class**, enjoy Wellness Day
{{% /schedule/happening %}}

{{% schedule/happening "tue" "noclass" %}}
Wellness Day - **No Classes**
{{% /schedule/happening %}}

{{% schedule/lecture "wed" "lec-data" %}}


<!-- Week 6 -->
{{% schedule/week %}}

{{% schedule/happening "fri" "deadline" "11:59pm" %}}
**Deadline**: {{< assignment "a3" "date" >}} (Raleigh time) via Gradescope:
- {{< assignment "a3" >}} {{< assignment "a3" "label">}}
{{% /schedule/happening %}}

<!-- Timejump to -->
**[... Time jump ...]**
<!-- Week 15 -->
{{% schedule/week week="15" title="Thanksgiving" %}}

{{% schedule/lecture "mon" "lec-qual" %}}

{{% schedule/happening "wed" "noclass" %}}
Thanksgiving Break - **No Classes**
{{% /schedule/happening %}}

{{% schedule/happening "thu" "noclass" %}}
Thanksgiving Holiday - **No Classes**, University Closed
{{% /schedule/happening %}}

{{% schedule/happening "fri" "noclass" %}}
Thanksgiving Holiday - **No Classes**, University Closed
{{% /schedule/happening %}}


<!-- Week 16 -->
{{% schedule/week title="Final Week" %}}

{{% schedule/lecture "mon" "lec-ssc" %}}

{{% schedule/happening "tue" %}}
Last day of classes
{{% /schedule/happening %}}

{{% schedule/happening "wed" "noclass" %}}
Reading Day
{{% /schedule/happening %}}


{{< schedule/happening "fri" "exam" "7:00pm" >}}
### Final Exam (7:00pm -- 9:30pm) {#final}
- In-person, ~60min
- More info: {{< assignment "midterm" >}}
{{< /schedule/happening >}}


<!-- Week 17 -->
{{% schedule/week %}}
{{< schedule/happening "sat" >}}
Fall Commencement Exercises
{{< /schedule/happening >}}
