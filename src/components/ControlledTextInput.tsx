import { ComponentProps, useEffect } from "react";
import { TextInput, useInput } from "react-admin";

type Props = ComponentProps<typeof TextInput> & {
  value: string;
};
export const ControlledTextInput = ({
  label,
  source,
  value,
  ...rest
}: Props) => {
  const { id, field } = useInput({ source, defaultValue: value });

  useEffect(() => {
    if (field.value !== value) {
      field.onChange(value);
    }
  }, [value, field]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { ref, ...restField } = field;

  return (
    <TextInput
      label={label}
      source={source}
      id={id}
      {...restField}
      {...rest}
      readOnly
      sx={{
        "& .Mui-disabled:before": {
          borderBottomStyle: "unset",
        },
        "& .MuiFilledInput-root.Mui-disabled": {
          fontWeight: "bold",
          color: "rgba(0, 0, 0, 0.87)",
          backgroundColor: "rgba(0, 0, 0, 0.06)",
          "& > input": {
            WebkitTextFillColor: "unset",
          },
        },
        "& .MuiInputLabel-root.Mui-disabled > span": {
          color: "rgba(0, 0, 0, 0.6)",
        },
      }}
    />
  );
};
