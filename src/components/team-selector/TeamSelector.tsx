import PlayerList from "./components/player-list/PlayerList";
import Teams from "./components/teams/Teams";

const TeamSelector = () => {
  return (
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
  );
};

export default TeamSelector;
