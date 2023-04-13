import { useState } from "react";

import { Wrapper, MenuButton, TaskbarLeftSection } from "./Taskbar.styled";

import { StartMenu } from "../StartMenu/StartMenuLayout.styled";

import startIcon from "../../assets/images/windows-icons/startIcon.png";
import weatherIcon from "../../assets/images/windows-icons/weather.png";

import PinnedApps from "./PinnedApps";
import QuickAccess from "./QuickAccess";
import Clock from "./Clock";

import StartMenuLayout from "../StartMenu/StartMenuLayout";

const TaskBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const onShowMenuHandler = () => setShowMenu((showMenu) => !showMenu);

  return (
    <>
      <Wrapper>
        <TaskbarLeftSection>
          <img src={weatherIcon} alt="Windows11 Weather Icon" />
        </TaskbarLeftSection>

        <MenuButton>
          <button type="button" onClick={onShowMenuHandler}>
            <img src={startIcon} alt="Windows Start Icon" />
          </button>
        </MenuButton>

        <PinnedApps />
        <QuickAccess />
        <Clock />

        <StartMenu showMenu={showMenu}>
          <StartMenuLayout />
        </StartMenu>
      </Wrapper>
    </>
  );
};

export default TaskBar;
