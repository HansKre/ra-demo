import { Chip } from "@mui/material";
import { FunctionField, Identifier, RaRecord } from "react-admin";

type Props = {
  label: string;
  source: string;
  record?: RaRecord<Identifier> | undefined;
};

export const ChipCountField = ({ label, source, record }: Props) => {
  return (
    <FunctionField
      label={label}
      record={record}
      render={(record) => (
        <Chip
          label={
            record?.[source] && Array.isArray(record?.[source])
              ? record[source].length
              : 0
          }
        />
      )}
    />
  );
};
