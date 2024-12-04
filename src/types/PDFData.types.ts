type Kategorie = "Sanitär" | "Fliesen" | "Böden";
type RaumTyp =
  | "Duschbad"
  | "Vollbad"
  | "Wannenbad"
  | "Gäste WC"
  | "Gesamte Wohnung";

export type Produkt = {
  kategorie: Kategorie;
  raumTyp?: RaumTyp; // Only for sanitary products
  bild: string; // Path or URL to the image. /assets/{..}.png
  titel: string; // Product name
  beschreibung: string; // Product description
  anzahl: number; // Number of units
  preis: number; // Price per unit
};

export type PDFData = {
  angebotsnummer: string;
  angebotsdatum: string;
  wohnung: string;
  erwerber: string;
  produkte: Produkt[];
};

export type ProduktGruppe = {
  kategorie: Kategorie;
  raumTyp?: RaumTyp;
  produkte: Array<[string, string, string, number, string]>;
};
