import {
  faAngleRight,
  faCog,
  faTachometerAlt,
  faFile,
  faSearchLocation,
  faLocationArrow,
  faComments,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

const navItems = [
  {
    title: "Places",
    path: "/portal/place",
    icon: faLocationArrow,
  },
  {
    title: "Extras",
    path: "#",
    icon: faComments,
    children: [
      {
        title: "Extras/Children",
        path: "/portal/query",
        icon: "",
      },
    ],
  },
];

export { navItems };
