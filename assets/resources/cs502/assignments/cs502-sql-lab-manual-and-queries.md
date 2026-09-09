# CS-502: Database Management Systems — SQL Lab Manual & Query Handbook

## Laboratory Schema: University Department Database
```sql
CREATE TABLE Department (
    dept_id INT PRIMARY KEY,
    dept_name VARCHAR(50) NOT NULL,
    building VARCHAR(50),
    budget DECIMAL(12, 2) CHECK (budget > 0)
);

CREATE TABLE Instructor (
    instructor_id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    dept_id INT,
    salary DECIMAL(10, 2),
    FOREIGN KEY (dept_id) REFERENCES Department(dept_id) ON DELETE SET NULL
);

CREATE TABLE Course (
    course_id VARCHAR(10) PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    dept_id INT,
    credits INT CHECK (credits BETWEEN 1 AND 6),
    FOREIGN KEY (dept_id) REFERENCES Department(dept_id)
);

CREATE TABLE Teaches (
    instructor_id INT,
    course_id VARCHAR(10),
    semester VARCHAR(10),
    year INT,
    PRIMARY KEY (instructor_id, course_id, semester, year),
    FOREIGN KEY (instructor_id) REFERENCES Instructor(instructor_id),
    FOREIGN KEY (course_id) REFERENCES Course(course_id)
);
```

---

## High-Frequency University Lab Queries

### 1. Nested Subqueries with Aggregates
**Problem:** Find the names of all instructors whose salary is strictly greater than the average salary of their respective department.
```sql
SELECT I.name, I.salary, D.dept_name
FROM Instructor I
JOIN Department D ON I.dept_id = D.dept_id
WHERE I.salary > (
    SELECT AVG(I2.salary)
    FROM Instructor I2
    WHERE I2.dept_id = I.dept_id
);
```

### 2. Relational Division in SQL
**Problem:** Find all instructors who have taught EVERY course offered by the Computer Science department.
```sql
SELECT I.name
FROM Instructor I
WHERE NOT EXISTS (
    SELECT C.course_id
    FROM Course C
    JOIN Department D ON C.dept_id = D.dept_id
    WHERE D.dept_name = 'Computer Science'
    EXCEPT
    SELECT T.course_id
    FROM Teaches T
    WHERE T.instructor_id = I.instructor_id
);
```

### 3. Window Functions & Ranking
**Problem:** Rank instructors within each department based on their salary without skipping rank numbers on ties.
```sql
SELECT 
    dept_id,
    name,
    salary,
    DENSE_RANK() OVER (PARTITION BY dept_id ORDER BY salary DESC) as salary_rank
FROM Instructor;
```

### 4. Transactions and ACID Rollback
```sql
START TRANSACTION;

UPDATE Account 
SET balance = balance - 5000.00 
WHERE account_no = 101 AND balance >= 5000.00;

-- Check if deduction succeeded, else roll back
UPDATE Account 
SET balance = balance + 5000.00 
WHERE account_no = 202;

COMMIT;
```
