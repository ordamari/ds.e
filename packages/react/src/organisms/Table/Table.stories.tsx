import React from 'react';
import Table from './Table';
import '@or.ds.e/scss/lib/Table.css';

type User = {
  id: number;
  firstName: string;
  lastName: string;
  grade: number;
};

const users: User[] = [
  { id: 1, firstName: 'John', lastName: 'Doe', grade: 90 },
  { id: 2, firstName: 'Jane', lastName: 'Smith', grade: 85 },
  { id: 3, firstName: 'Alice', lastName: 'Johnson', grade: 92 },
  { id: 4, firstName: 'Michael', lastName: 'Brown', grade: 88 },
  { id: 5, firstName: 'Emily', lastName: 'Jones', grade: 91 },
  { id: 6, firstName: 'Robert', lastName: 'Miller', grade: 87 },
  { id: 7, firstName: 'Sarah', lastName: 'Davis', grade: 93 },
  { id: 8, firstName: 'William', lastName: 'Garcia', grade: 86 },
  { id: 9, firstName: 'Jessica', lastName: 'Rodriguez', grade: 89 },
  { id: 10, firstName: 'James', lastName: 'Martinez', grade: 94 },
  { id: 11, firstName: 'Jennifer', lastName: 'Hernandez', grade: 87 },
  { id: 12, firstName: 'Andrew', lastName: 'Lopez', grade: 92 },
  { id: 13, firstName: 'Angela', lastName: 'Gonzalez', grade: 90 },
  { id: 14, firstName: 'Anthony', lastName: 'Wilson', grade: 88 },
  { id: 15, firstName: 'Patricia', lastName: 'Anderson', grade: 91 },
  { id: 16, firstName: 'Thomas', lastName: 'Taylor', grade: 87 },
  { id: 17, firstName: 'Elizabeth', lastName: 'Thomas', grade: 93 },
  { id: 18, firstName: 'David', lastName: 'Moore', grade: 86 },
  { id: 19, firstName: 'Rebecca', lastName: 'Martin', grade: 89 },
  { id: 20, firstName: 'Brian', lastName: 'Jackson', grade: 94 },
  { id: 21, firstName: 'Michelle', lastName: 'Thompson', grade: 87 },
  { id: 22, firstName: 'Christopher', lastName: 'White', grade: 92 },
  { id: 23, firstName: 'Stephanie', lastName: 'Harris', grade: 90 },
  { id: 24, firstName: 'Daniel', lastName: 'Clark', grade: 88 },
  { id: 25, firstName: 'Nancy', lastName: 'Robinson', grade: 91 },
  { id: 26, firstName: 'Joshua', lastName: 'Lewis', grade: 87 },
  { id: 27, firstName: 'Sharon', lastName: 'Walker', grade: 93 },
  { id: 28, firstName: 'Charles', lastName: 'Hall', grade: 86 },
  { id: 29, firstName: 'Barbara', lastName: 'Allen', grade: 89 },
  { id: 30, firstName: 'Matthew', lastName: 'Young', grade: 94 },
  { id: 31, firstName: 'Linda', lastName: 'King', grade: 87 },
  { id: 32, firstName: 'Joseph', lastName: 'Wright', grade: 92 },
  { id: 33, firstName: 'Amy', lastName: 'Hill', grade: 90 },
  { id: 34, firstName: 'Richard', lastName: 'Scott', grade: 88 },
  { id: 35, firstName: 'Susan', lastName: 'Green', grade: 91 },
  { id: 36, firstName: 'Paul', lastName: 'Adams', grade: 87 },
  { id: 37, firstName: 'Laura', lastName: 'Baker', grade: 93 },
  { id: 38, firstName: 'Steven', lastName: 'Nelson', grade: 86 },
  { id: 39, firstName: 'Karen', lastName: 'Carter', grade: 89 },
  { id: 40, firstName: 'Edward', lastName: 'Mitchell', grade: 94 },
  { id: 41, firstName: 'Melissa', lastName: 'Perez', grade: 87 },
  { id: 42, firstName: 'Mark', lastName: 'Roberts', grade: 92 },
  { id: 43, firstName: 'Kimberly', lastName: 'Turner', grade: 90 },
  { id: 44, firstName: 'Kevin', lastName: 'Phillips', grade: 88 },
  { id: 45, firstName: 'Donna', lastName: 'Campbell', grade: 91 },
  { id: 46, firstName: 'George', lastName: 'Parker', grade: 87 },
  { id: 47, firstName: 'Carol', lastName: 'Evans', grade: 93 },
  { id: 48, firstName: 'Ronald', lastName: 'Edwards', grade: 86 },
  { id: 49, firstName: 'Lisa', lastName: 'Collins', grade: 89 },
  { id: 50, firstName: 'Kenneth', lastName: 'Stewart', grade: 94 },
];

export default {
  title: 'Organisms/Table',
};

const getLetterGrade = (grade: number) => {
  if (grade >= 90) return 'A';
  if (grade >= 80) return 'B';
  if (grade >= 70) return 'C';
  if (grade >= 60) return 'D';
  return 'F';
};

export const Common = () => <Table<User> data={users.slice(0, 10)} />;

export const keyMap = () => (
  <Table<User>
    data={users.slice(0, 10)}
    keyMap={{
      firstName: 'First Name',
      lastName: 'Last Name',
      grade: 'Grade',
    }}
  />
);

export const sortMap = () => (
  <Table<User>
    data={users.slice(0, 10)}
    sortMap={{
      grade: (a, b) => a - b,
    }}
  />
);

export const renderMap = () => (
  <Table<User>
    data={users.slice(0, 10)}
    renderMap={{
      grade: getLetterGrade,
    }}
  />
);

export const staticPaginator = () => (
  <Table<User>
    data={users}
    staticPaginatorOptions={{
      itemsPerPage: 10,
    }}
  />
);

export const relativePaginator = () => (
  <Table<User>
    data={users.slice(30, 40)}
    relativePaginatorOptions={{
      pages: 5,
      page: 3,
      handlePageChange: (page) => console.log(page),
    }}
  />
);
