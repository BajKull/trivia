import TeamSelector from "components/team-selector/TeamSelector";
import Board from "./components/board/Board";
import {
  sampleCategory,
  sampleCategory2,
  sampleCategory3,
  sampleCategory4,
  sampleCategory5,
} from "./questions/sample";
import { useAppStore } from "store/store";

function App() {
  const gameState = useAppStore((state) => state.gameState);
  return (
    <main className="w-full min-h-screen from-cyan-50 via-rose-50 to-indigo-50 shadow-blue-600/50 bg-gradient-to-br">
      {gameState === "teamBuilder" && <TeamSelector />}
      {gameState === "game" && (
        <Board
          data={[
            sampleCategory,
            sampleCategory2,
            sampleCategory3,
            sampleCategory4,
            sampleCategory5,
          ]}
        />
      )}
    </main>
  );
}

export default App;
