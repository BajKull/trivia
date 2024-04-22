import { DndContext, DragEndEvent, DragStartEvent } from "@dnd-kit/core";
import { useAppStore } from "store/store";

interface DndProviderProps {
  children: React.ReactNode;
}

const TeamSelectorDndProvider = ({ children }: DndProviderProps) => {
  const players = useAppStore((state) => state.players);
  const setDragged = useAppStore((state) => state.setDragged);
  const assignPlayerToTeam = useAppStore((state) => state.assignPlayerToTeam);

  const handleDragStart = (event: DragStartEvent) => {
    const player = players.find(({ id }) => id === event.active.id);
    setDragged(player);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    setDragged(undefined);

    const { active: { id: playerId } = {}, collisions } = event;
    const teamId = collisions?.[0]?.id;

    if (!playerId || !teamId) return;

    assignPlayerToTeam(playerId as string, teamId as string);
  };

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      {children}
    </DndContext>
  );
};

export default TeamSelectorDndProvider;
