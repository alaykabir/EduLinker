import '../pages/Student/style.css';

export const NavBar = () => {
  return (
    <>
      <div id="navbar">
        <h1 id="header">Student</h1>
        <ul>
          <li>
            <a href="/student">Home</a>
          </li>

          <li>
            <a href="/student/gradesheet">Gradesheet</a>
          </li>
        </ul>
      </div>
    </>
  );
};
