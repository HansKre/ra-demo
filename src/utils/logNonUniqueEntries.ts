type ItemWithId = {
  id: string | null | undefined;
};

const DUMMY = "null-empty-or-undefined";

export function logNonUniqueEntries(arr: ItemWithId[]): void {
  const idCounts: Record<string, number> = {};
  const duplicates: ItemWithId[] = [];

  arr.forEach((item) => {
    const idKey = item.id ?? DUMMY;
    idCounts[idKey] = (idCounts[idKey] || 0) + 1;
  });

  arr.forEach((item) => {
    const idKey = item.id ?? DUMMY;
    if (idCounts[idKey] > 1) {
      duplicates.push(item);
    }
  });

  if (duplicates.length > 0) {
    console.error("Non-unique entries found:", duplicates);
  } else if (idCounts[DUMMY]) {
    console.error(
      "At least one entry with invalid id found:",
      arr.find((item) => !item.id),
    );
  }
}
