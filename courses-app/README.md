Task description

The whole task is to write a small React application that allows users to manage a list of courses with features like creating, deleting, and viewing course information. Additionally, the application will have authorization functionality to ensure secure access to the application's features.

The main goal of the task for this week is to create application's skeleton - set of some simple components for the app.

You can choose the design at your discretion.
It is important to keep the layout (the arrangement of elements on the page).

STAFF DEBUG INFO
Application's initial view:
Initial view

STAFF DEBUG INFO
Project structure requirements
Rename App.tsx to App.jsx / App.tsx. App - main app file.

Delete unnecessary files:

src/App.test.js
src/logo.svg
src/reportWebVitals.js
all files in the public folder EXCEPT public/index.html and manifest.json
Delete default code in files:
scr/App.jsx
src/App.css
You can do like this:

function App() {
return <div>React</div>;
}

export default App;
Delete unnecessary import and function call in the index.js file

import reportWebVitals from './reportWebVitals';
...
reportWebVitals();
Result in the browser: Initial localhost view

TIP
If you use App.tsx you need to fix its import in the index.js file js import App from './App.tsx';

Create folders and files for each component. Follow the architecture below:
src
|-- common
| |--Button
| | |** Button.jsx/.tsx
| |  
 | |**Input
| | |** Input.jsx/.tsx  
 | | |
| |** //any common components you want to add
|
|-- components
| |-- CourseInfo
| | |** CourseInfo.jsx/.tsx
| |  
 | |-- Courses
| | |** components
| | |** CourseCard
| | |** CourseCard.jsx/.tsx
| | |** SearchBar (extra task)
| | | |** SearchBar.jsx/.tsx
| | |** Courses.jsx/.tsx
| |
| |** // any components you want to add
| |
| |-- EmptyCourseList
| | |** EmptyCourseList.jsx/.tsx
| |
| |-- Header
| | |** Header.jsx/.tsx
| | |** components
| | |** Logo
| | |** Logo.jsx/.tsx
| |
|-- helpers
| |
| |--getCourseDuration.js/.ts // a helper to format course duration  
 | |
| |--formatCreationDate.js/.ts // to format date that we will receive from server  
 | |
| |** // any helpers you want to add
|
|-- constants.js/.ts // file with mocked data
|
|-- App.jsx/.tsx
|-- App.css
|-- index.js
|\_ ...

CAUTION
The presented architecture is required for use, BUT you can add files and folders at your discretion.

Further, you can use any way to add styles to components (styled components, Bootstrap, CSS modules etc). Also, you can use preprocessors like SASS instruction.
TIP
It's recommended to keep each component's style file in their appropriate folders.
