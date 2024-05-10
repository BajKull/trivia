import TeamSelector from "components/team-selector/TeamSelector";
import Board from "./components/board/Board";
import { useAppStore } from "store/store";
import { akustycznieCategory } from "questions/acoustic";
import { ciekawostkiCategory } from "questions/randomFacts";
import { coDalejCategory } from "questions/whatNext";
import { dzingielCategory } from "questions/jingle";
import { instrumentyCategory } from "questions/instruments";
import { klasycznieCategory } from "questions/classical";
import { muzykaFilmowaCategory } from "questions/movie";
import { oneHitWondersCategory } from "questions/oneHitWonders";
import { poNutceCategory } from "questions/singleNote";
import { teledyskCategory } from "questions/musicVideo";
import Planets from "components/planets/Planets";
import Settings from "components/settings/Settings";

const App = () => {
  const gameState = useAppStore((state) => state.gameState);
  const round = useAppStore((state) => state.round);

  const data =
    round === 1
      ? [
          akustycznieCategory,
          coDalejCategory,
          oneHitWondersCategory,
          poNutceCategory,
          teledyskCategory,
        ]
      : [
          ciekawostkiCategory,
          dzingielCategory,
          instrumentyCategory,
          klasycznieCategory,
          muzykaFilmowaCategory,
        ];

  return (
    <main className="w-full overflow-hidden h-screen from-purple-900/70 via-rose-600/30 to-indigo-900/70 bg-gradient-to-br relative text-slate-800">
      <Planets />
      {gameState === "teamBuilder" && <TeamSelector />}
      {gameState === "game" && (
        <>
          <Board data={data} />
          <Settings />
        </>
      )}
    </main>
  );
};

export default App;
