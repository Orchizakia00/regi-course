
# Course Registration

This decription is to let you know about some features of this project.



## Features
- Courses can be selected and left side section can show the selected course title.
- Prices and credits of course will also be seen in the left side.
- Total credits can not be more than 20.
- If the limit exceeds a toast will be shown.
- User can not select a course more than once. If tries then a toast with a message will be shown.
## State Management

1. Course Data State ('courses'):

- The courses state is initialized using the useState hook and is used to store an array of course data fetched from a JSON file. It is populated with data fetched from data.json using the fetch API and the useEffect hook. This data is fetched once when the component mounts.
2. Selected Courses State ('selectedCourses'):

- The selectedCourses state is used to keep track of the courses selected by the user. It is initialized as an empty array and is updated whenever a user selects a course by clicking the "Select" button. The selected course is added to this array.
3. Remaining Credits State ('remaining'):

- The remaining state is used to display the remaining credits that a user can select. It is initially set to 0 and is updated whenever a course is selected or removed from the cart.
4. Total Credit State ('totalCredit'):

- The totalCredit state is used to display the total number of credits selected by the user. It is updated whenever a course is selected or removed from the cart.
5. Total Cost State ('totalCost'):

- The totalCost state is used to display the total cost of the selected courses. It is updated whenever a course is selected or removed from the cart.