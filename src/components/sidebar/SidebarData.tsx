import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faLayerGroup,
  faPieChart,
} from "@fortawesome/free-solid-svg-icons";

export const SidebarData = [
  {
    id: 1,
    name: "statistics",
    path: "stats",
    icon: <FontAwesomeIcon icon={faPieChart} />,
  },
  {
    id: 2,
    name: "layouts",
    path: "layouts",
    icon: <FontAwesomeIcon icon={faLayerGroup} />,
  },
];
