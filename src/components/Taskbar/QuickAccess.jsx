import { QuickSettingsIcons } from "./Taskbar.styled";

import { statusIcons } from "../windows/Icons";

const StatusIcon = () => {
  return (
    <QuickSettingsIcons>
      {statusIcons &&
        statusIcons.map((icon, index) => (
          <button key={index}>
            <img src={icon.src} alt="Windows Status Icon" />
          </button>
        ))}
    </QuickSettingsIcons>
  );
};

export default StatusIcon;
