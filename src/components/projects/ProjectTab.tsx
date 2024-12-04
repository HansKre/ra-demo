import { ComponentProps } from "react";
import { required, SelectInput, TabbedForm, TextInput } from "react-admin";
import { bauleiterChoices } from "../../constants";

type Props = Omit<ComponentProps<typeof TabbedForm.Tab>, "label">;

export const ProjectTab = (props: Props) => {
  return (
    <TabbedForm.Tab label="Project" {...props}>
      <TextInput source="name" validate={required()} />
      <SelectInput
        source="bauleiter"
        label="BauleiterIn"
        validate={required()}
        choices={bauleiterChoices}
      />
    </TabbedForm.Tab>
  );
};
