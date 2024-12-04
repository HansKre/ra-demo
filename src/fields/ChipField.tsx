import { Chip } from "@mui/material";
import { useListContext } from "react-admin";
import { hasOwnProperty } from "ts-type-safe";

type Props = {
  source: string;
  suffix?: string;
};

export const ChipField = ({ source, suffix }: Props) => {
  const { data } = useListContext();
  const record = data?.[0];
  if (!record) return null;
  if (!hasOwnProperty(record, source) || !(typeof record[source] === "string"))
    return null;
  return <Chip label={`${record[source]}${suffix ?? ""}`} />;
};
