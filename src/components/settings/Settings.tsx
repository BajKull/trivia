import { faCog, faForwardStep } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "components/button/Button";
import { useClickOutside } from "hooks/useClickOutside";
import { useRef, useState } from "react";
import { useAppStore } from "store/store";

const Settings = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const nextRound = useAppStore((state) => state.increaseRound);

  const panelRef = useRef<HTMLDivElement>(null);

  useClickOutside(panelRef, () => setIsPanelOpen(false));

  return (
    <div className="absolute top-5 right-5" ref={panelRef}>
      <div className="relative">
        <Button round light onClick={() => setIsPanelOpen((prev) => !prev)}>
          <FontAwesomeIcon icon={faCog} color="white" />
        </Button>
        {isPanelOpen && (
          <div className="bg-glass absolute right-0 top-16">
            <Button light round onClick={nextRound}>
              <FontAwesomeIcon icon={faForwardStep} color="white" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;
