# Sitemap

Should appear as a graph on GitHub

```mermaid
    graph TD;
        Main-->Settings/Account;
        Main-->Class;
        Main-->Calender;
        Class-->Announcments;
        Class-->Syllabus;
        Class-->Materials;
        Class-->Assignments;
        Class-->Grades;
        Assignments-->SubmissionView;
        Assignments-->FeedbackView;
        Assignments-->GradingView;
```