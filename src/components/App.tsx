// components
import Dropdown from "@src/components/stories/common/Dropdown";

const App = () => {
  return (
    <>
      <h1>Hello, StoryBook</h1>

      <Dropdown title="드롭다운" list={["사과", "딸기", "바나나"]} />
    </>
  );
};

export default App;
