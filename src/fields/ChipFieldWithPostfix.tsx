import React from "react";
import { ChipField, ChipFieldProps, useRecordContext } from "react-admin";
import { EMPTY } from "../constants";

type Props = ChipFieldProps & {
  postfix?: string | { singular: string; plural: string };
  asCount?: boolean;
};

export const ChipFieldWithPostfix: React.FC<Props> = ({
  source,
  postfix = "",
  asCount = false,
  ...rest
}) => {
  const record = useRecordContext();

  if (!record || !source || !record[source]) {
    return null;
  }

  const length = Array.isArray(record[source]) ? record[source].length : null;
  const value = asCount && length ? length : record[source];

  let affix;
  if (postfix && typeof postfix === "object") {
    affix = length === 1 ? postfix.singular : postfix.plural;
  } else {
    affix = postfix;
  }

  const displayValue =
    typeof value === "number" && isNaN(value)
      ? value || EMPTY
      : String(value).replace(".", ",");

  return (
    <ChipField
      {...rest}
      source={source}
      record={{
        ...record,
        [source]: `${displayValue} ${affix}`,
      }}
    />
  );
};
