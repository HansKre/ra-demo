import React, { useCallback, useState } from "react";
import { required, TextInput } from "react-admin";

type Props = React.ComponentProps<typeof TextInput> & {
  postfix: string;
  isRequired?: boolean;
};

export const TextInputWithPostfix = ({
  postfix,
  isRequired = false,
  ...rest
}: Props) => {
  const [isEditing, setIsEditing] = useState(false);

  const format = useCallback(
    (value: unknown) => {
      if (
        isEditing ||
        !(typeof value === "string" || typeof value === "number")
      )
        return value;
      const formattedString = String(value).replace(".", ",");
      return postfix ? `${formattedString} ${postfix}` : formattedString;
    },
    [isEditing, postfix],
  );

  const parse = useCallback(
    (value: unknown) =>
      !isEditing && (typeof value === "string" || value === "number")
        ? parseFloat(
            String(value).replace(",", ".").replace(` ${postfix}`, ""),
          ) || 0
        : String(value).replace(",", "."),
    [isEditing, postfix],
  );
  return (
    <TextInput
      {...rest}
      validate={isRequired ? required() : undefined}
      onFocus={() => setIsEditing(true)}
      onBlur={() => setIsEditing(false)}
      format={format}
      parse={parse}
    />
  );
};
