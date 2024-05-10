import "./App.css";
import MyComponent from "./ex1";

const App = () => {
  return (
    <div className="title-name">
      <MyComponent name={"곰돌이사육사"}>리액트</MyComponent>
    </div>
  );
};

export default App;
