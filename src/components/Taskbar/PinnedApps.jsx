import { TaskbarPinnedAppsIcons } from "./Taskbar.styled";

import { startMenuIcons } from "../windows/Icons";

const StartMenuIcon = () => {
  return (
    <TaskbarPinnedAppsIcons>
      {startMenuIcons &&
        startMenuIcons.map((icon, index) => (
          <button key={index}>
            <img src={icon.src} alt="Windows Taskbar Menu Icon" />
          </button>
        ))}
    </TaskbarPinnedAppsIcons>
  );
};

export default StartMenuIcon;
