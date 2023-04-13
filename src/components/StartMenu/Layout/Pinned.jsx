import { SectionPinnedTitle, SectionPinnedApps } from "./Layout.styled";

import { pinnedApps } from "../../windows/Icons";

const Pinned = () => {
  const RightArrow = (
    <svg
      className="bi bi-chevron-right"
      height="16"
      width="16"
      fill="currentColor"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
        fillRule="evenodd"
      />
    </svg>
  );

  return (
    <>
      <SectionPinnedTitle>
        <header>
          <h4 className="title">Pinned</h4>
          <button type="button">All apps {RightArrow}</button>
        </header>
      </SectionPinnedTitle>
      <SectionPinnedApps>
        <menu className="pinnedApps">
          {pinnedApps &&
            pinnedApps.map((appItem) => (
              <div key={appItem.name} className="appItem">
                <img src={appItem.icon} className="icon" alt={appItem.name} />
                <p className="name">{appItem.name}</p>
              </div>
            ))}
        </menu>
      </SectionPinnedApps>
    </>
  );
};

export default Pinned;
