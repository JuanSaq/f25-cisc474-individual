Initial ER Diagram made with ChatGPT, some changes were made by me

Things to note
- Some relationships may change in the futre
- Haven't looked too much into the database we are using, so a variable length string would likely be better than strings, if available

```mermaid
erDiagram
    USER {
        int user_id PK
        string name
        string pronouns
        string profile_picture
        string role
    }

    CLASSES {
        int class_id PK
        string title
        string description
    }

    ANNOUNCEMENT {
        int announcement_id PK
        string content
        date created_at
    }

    SYLLABUS {
        int syllabus_id PK
        string content
    }

    MATERIAL {
        int material_id PK
        string title
        string content
    }

    ASSIGNMENT {
        int assignment_id PK
        string title
        string description
        date created_at
        date due_date
    }

    SUBMISSION {
        int submission_id PK
        int assignment_id FK
        int learner_id FK
        string content
        date submitted_at
    }

    FEEDBACK {
        int feedback_id PK
        int submission_id FK
        int instructor_id FK
        string content
    }

    GRADE {
        int grade_id PK
        int submission_id FK
        float score
    }


    %% Relationships
    USER ||--o{ CLASSES : "enrolls/teaches"
    CLASSES ||--o{ ANNOUNCEMENT : "has"
    CLASSES ||--o{ SYLLABUS : "has"
    CLASSES ||--o{ MATERIAL : "provides"
    CLASSES||--o{ ASSIGNMENT : "contains"

    ASSIGNMENT ||--o{ SUBMISSION : "has"
    SUBMISSION ||--o{ FEEDBACK : "receives"
    SUBMISSION ||--o{ GRADE : "assigned"

    USER ||--o{ SUBMISSION : "creates"
```