import { useEditContext, useGetOne } from "react-admin";
import { hasOwnProperty } from "ts-type-safe";
import { GetApartmentById, WQData } from "../types";

export const useGetBemusterungsArtikel = () => {
  const { record: apartment } = useEditContext<GetApartmentById>();

  if (apartment && !hasOwnProperty(apartment, "projectId"))
    console.error(
      "projectId fehlt im apartment-Objekt. Wurde der Hook in einem falschen Kontext verwendet?",
    );

  const {
    isPending,
    error,
    data: { bemusterungs_artikel: bemusterungsArtikel } = {},
  } = useGetOne<WQData>(
    "projects",
    { id: apartment?.projectId },
    { enabled: !!apartment?.projectId },
  );

  return { isPending, error, bemusterungsArtikel };
};
