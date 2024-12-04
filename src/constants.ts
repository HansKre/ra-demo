import {
  VerlegeArtFliese,
  VerlegeArtParkett,
  VerlegeRichtungBodenFliese,
  VerlegeRichtungParkett,
} from "./types";

export const EMPTY = "-";

export const Routes = {
  root: "/",
  projects: "/projects",
};

export const Collections = {
  projects: "projects",
  article: "article",
};

export const appName = "Test App";

export const renderDelay = 500;

export const bauleiterChoices = [
  { id: "manager1", name: "Manager 1" },
  { id: "manager2", name: "Manager 2" },
  { id: "manager3", name: "Manager 3" },
  { id: "manager4", name: "Manager 4" },
];

export const roomTypeChoices = [
  { id: "roomType0", name: "Abstellraum", isFliesen: true },
  { id: "roomType1", name: "Duschbad", isFliesen: true },
  { id: "roomType2", name: "Gäste WC", isFliesen: true },
  { id: "roomType3", name: "Vollbad", isFliesen: true },
  { id: "roomType4", name: "Wannenbad", isFliesen: true },
  { id: "roomType5", name: "Flur", isFliesen: true },
  { id: "roomType6", name: "Küche", isFliesen: true },
  { id: "roomType7", name: "Gesamte Wohnung", isFliesen: false },
] as const;

export const verlegeArtChoices = [
  { id: VerlegeArtFliese.kreuzverband, name: "Kreuzverband" },
  { id: VerlegeArtFliese.drittelverband, name: "Drittelverband" },
];

export const verlegeRichtungBodenflieseChoices = [
  {
    id: VerlegeRichtungBodenFliese.senkrechtZurBadezimmerTuer,
    name: "Senkrecht zur Badezimmer-Tür",
  },
  {
    id: VerlegeRichtungBodenFliese.waagerechtZurBadezimmerTuer,
    name: "Waagerecht zur Badezimmer-Tür",
  },
  { id: VerlegeRichtungBodenFliese.ohne, name: "60x60 (ohne)" },
];

export const parkettVerlegeRichtungChoices = [
  { id: VerlegeRichtungParkett.senkrechtZurWET, name: "senkrecht zur WET" },
  { id: VerlegeRichtungParkett.waagrechtZurWET, name: "waagrecht zur WET" },
];

export const parkettVerlegeArtChoices = [
  { id: VerlegeArtParkett.fisch, name: "Fischgräte" },
  { id: VerlegeArtParkett.standard, name: "Standard" },
];
