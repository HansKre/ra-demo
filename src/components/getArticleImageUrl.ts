import { BemusterungsArtikel } from "../types";

export const getArticleImageUrl = (item: BemusterungsArtikel): string => {
  if (!item.bildDateiName) {
    return "";
  }

  if (item.kategorie === "Elektro") {
    return `/assets/elektrosymbole/${item.bildDateiName}.png`;
  }

  return `/assets/${item.bildDateiName}.png`;
};
