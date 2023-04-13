// Windows Icons
import searchIcon from '../../assets/images/windows-icons/taskbar-search-box.png';
import cromeIcon from '../../assets/images/windows-icons/cromeIcon.png';
import mailIcon from '../../assets/images/windows-icons/mailIcon.png';
import explorerIcon from '../../assets/images/windows-icons/explorerIcon.png';
import msedgeIcon from '../../assets/images/windows-icons/msedgeIcon.png';
import msstoreIcon from '../../assets/images/windows-icons/microsoft-store.png';
import skypeicon from '../../assets/images/windows-icons/skypeicon.png';
import msoffice from '../../assets/images/windows-icons/msoffice.png';

// Pinned Apps - Icons
import clendar from '../../assets/images/windows-icons/calender.png';
import outlook from '../../assets/images/windows-icons/Outlook.png';
import phone from '../../assets/images/windows-icons/phoneIcon.png';
import todoIcon from '../../assets/images/windows-icons/todoIcon.png';
import cortanaIcon from '../../assets/images/windows-icons/cortanaIcon.png';
import spotify from '../../assets/images/windows-icons/spotify.png';
import pinterest from '../../assets/images/windows-icons/pinterest.png';
import netflix from '../../assets/images/windows-icons/netflix.png';
import opera from '../../assets/images/windows-icons/opera.png';
import photoshop from '../../assets/images/windows-icons/photoshop.webp';
import vscodeIcon from '../../assets/images/windows-icons/vscodeIcon.png';
import nodejsIcon from '../../assets/images/windows-icons/nodejsIcon.png';
import ubuntu from '../../assets/images/windows-icons/ubuntu.png';
import weather from '../../assets/images/windows-icons/weather.png';
import itunes from '../../assets/images/windows-icons/itunes.png';
import camera from '../../assets/images/windows-icons/camera.png';

// Recomended Apps - Icons
import msOnedrive from '../../assets/images/windows-icons/msOnedrive.png';
import msword from '../../assets/images/windows-icons/msword.png';
import settingIcon from '../../assets/images/windows-icons/settingIcon.png';
import powerpoint from '../../assets/images/windows-icons/powerpoint.png';
import gethelp from '../../assets/images/windows-icons/gethelp.png';

// Quick Access - Settings (Win + A) (statusIcons)
import wifiIcon from '../../assets/images/windows-icons/wifi.svg';
import volumeIcon from '../../assets/images/windows-icons/volume.svg';
import drpdwnIcon from '../../assets/images/windows-icons/expand-arrow.svg';



export const startMenuIcons = [
    { src: searchIcon }, { src: settingIcon },
    { src: explorerIcon },
    { src: cromeIcon }, { src: vscodeIcon },
    { src: msstoreIcon },
    { src: msoffice }, { src: msword },
    { src: mailIcon }
];


export const statusIcons = [
    { src: drpdwnIcon }, { src: wifiIcon }, { src: volumeIcon }
];


export const pinnedApps = [
    { icon: clendar, name: "Calendar" }, { icon: outlook, name: "Outlook" }, { icon: phone, name: "Your Phone" },
    { icon: todoIcon, name: "Todo" }, { icon: cortanaIcon, name: "Cortana" }, { icon: camera, name: "Camera" },
    { icon: spotify, name: "Spotify" }, { icon: pinterest, name: "Pinterest" }, { icon: skypeicon, name: "Skype" },
    { icon: netflix, name: "Netflix" }, { icon: msedgeIcon, name: "Edge" }, { icon: itunes, name: "ITunes" },
    { icon: opera, name: "Opera" }, { icon: photoshop, name: "Photoshop" }, { icon: vscodeIcon, name: "VSCode" },
    { icon: nodejsIcon, name: "Node JS" }, { icon: ubuntu, name: "Ubuntu" }, { icon: weather, name: "Weather" }
];


export const recommendedItems = [
    { icon: msOnedrive, name: "Onedrive - Personal" }, { icon: msword, name: "MS Word - Blank page" },
    { icon: settingIcon, name: "Settings" }, { icon: powerpoint, name: "PowerPoint - Presentation" },
    { icon: gethelp, name: "Get Help or Send Feedback - Regarding Issues" }
];