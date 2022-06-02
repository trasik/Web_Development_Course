import "./styles.css";
import Heading from "./Heading";
import List from "./List";

const fName = "Torendra";
const lName = "Rasik";
const randomNum = Math.floor(Math.random() * 100) + 1;
const todayDate = new Date();

const timeHeadingStyle = {
  color: "red",
};

const timeHeading = () => {
  const currentHour = todayDate.getHours();
  if (currentHour >= 12 && currentHour < 18) {
    timeHeadingStyle.color = "green";
    return "Good Afternoon";
  } else if (currentHour >= 18 && currentHour <= 24) {
    timeHeadingStyle.color = "blue";
    return "Good Evening";
  } else {
    timeHeadingStyle.color = "red";
    return "Good Morning";
  }
};

function App() {
  return (
    <div className="App">
      <Heading />
      <h2>My Favorite Foods</h2>
      <List />
      <p>Your lucky number is: {randomNum}</p>

      <h1 style={timeHeadingStyle}>{timeHeading()}</h1>
      <p>Created by: {`${fName} ${lName}`}</p>
      <p>Copyright: {todayDate.getFullYear()}</p>
    </div>
  );
}

export default App;
