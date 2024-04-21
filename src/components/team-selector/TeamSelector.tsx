import TeamSelectorDndProvider from "providers/dnd/TeamSelectorDndProvider";
import Player from "./components/player-list/Player";
import PlayerList from "./components/player-list/PlayerList";
import Teams from "./components/teams/Teams";
import { DragOverlay } from "@dnd-kit/core";
import { useAppStore } from "store/store";

const TeamSelector = () => {
  const draggedPlayer = useAppStore((state) => state.dragged);
  return (
    <TeamSelectorDndProvider>
      <div className="fixed w-full h-full flex justify-center items-center backdrop-blur-sm">
        <div className="max-w-screen-2xl max-h-[90%] px-5 py-10 w-11/12 h-full flex space-x-5 bg-white shadow-xl rounded-xl">
          <div className="w-3/4">
            <Teams />
          </div>
          <div className="w-1/4">
            <PlayerList />
          </div>
        </div>
      </div>
      {draggedPlayer && (
        <DragOverlay>
          <Player player={draggedPlayer} notDraggable />
          <p>xd</p>
        </DragOverlay>
      )}
    </TeamSelectorDndProvider>
  );
};

export default TeamSelector;
