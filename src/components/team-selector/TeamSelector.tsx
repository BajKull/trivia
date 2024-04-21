import PlayerList from "./components/player-list/PlayerList";

const TeamSelector = () => {
  return (
    <div className="fixed w-full h-full flex justify-center items-center backdrop-blur-sm">
      <div className="max-w-screen-2xl max-h-[90%] px-5 py-10 w-full h-full flex flex-col bg-white shadow-xl rounded-xl">
        <PlayerList />
      </div>
    </div>
  );
};

export default TeamSelector;
