import { LatLngExpression } from "leaflet";

export interface Place {
  picture: string;
  title: string;
  description: string;
  seeMoreLink: string;
  position: LatLngExpression;
}
