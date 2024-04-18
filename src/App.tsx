import Board from "./components/board/Board";
import {
  sampleCategory,
  sampleCategory2,
  sampleCategory3,
  sampleCategory4,
  sampleCategory5,
} from "./questions/sample";

function App() {
  return (
    <>
      <Board
        data={[
          sampleCategory,
          sampleCategory2,
          sampleCategory3,
          sampleCategory4,
          sampleCategory5,
        ]}
      />
    </>
  );
}

export default App;
