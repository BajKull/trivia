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
    <main className="w-full overflow-hidden h-screen from-purple-900/70 via-rose-600/30 to-indigo-900/70 bg-gradient-to-br relative text-slate-800">
      <div className="w-40 h-40 rounded-full absolute top-40 left-80 from-purple-400 via-rose-300 to-indigo-400 bg-gradient-to-br shadow-xl shadow-rose-300" />
      <div className="w-96 h-96 rounded-full absolute top-60 right-96 from-purple-400 via-rose-300 to-indigo-400 bg-gradient-to-br shadow-xl shadow-rose-300" />
      <div className="w-56 h-56 rounded-full absolute -bottom-32 left-80 from-purple-400 via-rose-300 to-indigo-400 bg-gradient-to-br shadow-xl shadow-rose-300" />
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
