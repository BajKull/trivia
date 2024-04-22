import TeamSelectorDndProvider from "providers/dnd/TeamSelectorDndProvider";
import Player from "./components/player-list/Player";
import PlayerList from "./components/player-list/PlayerList";
import { DragOverlay } from "@dnd-kit/core";
import { useAppStore } from "store/store";
import TeamList from "./components/teams/TeamList";

const TeamSelector = () => {
  const draggedPlayer = useAppStore((state) => state.dragged);
  return (
    <TeamSelectorDndProvider>
      <div className="w-full h-full flex justify-center items-center">
        <div className="max-w-screen-2xl max-h-[90%] p-5 w-11/12 h-full flex space-x-5 rounded-xl bg-white/40 shadow-xl backdrop-blur-xl">
          <div className="w-3/4 bg-white/20 rounded-lg">
            <TeamList />
          </div>
          <div className=" w-1/4 bg-white/20 rounded-lg">
            <PlayerList />
          </div>
        </div>
      </div>
      {draggedPlayer && (
        <DragOverlay>
          <Player player={draggedPlayer} notDraggable />
        </DragOverlay>
      )}
    </TeamSelectorDndProvider>
  );
};

export default TeamSelector;
