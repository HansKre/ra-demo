import { useQueryClient } from "@tanstack/react-query";
import { ComponentProps } from "react";
import {
  DeleteWithConfirmButton,
  SaveButton as SaveButtonBase,
  Toolbar,
} from "react-admin";
import { useFormState } from "react-hook-form";
import { useSearchParams } from "react-router-dom";

const SaveButton = () => {
  const { dirtyFields, errors } = useFormState();
  const isValid = Object.keys(errors).length === 0;
  const isDirty = Object.keys(dirtyFields).length > 0;
  return (
    <SaveButtonBase
      label="custom.action.save_and_stay"
      disabled={!isValid || !isDirty}
    />
  );
};

const DeleteButton = () => {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const projectId = searchParams.get("projectId");

  return (
    <DeleteWithConfirmButton
      label="custom.action.delete"
      confirmTitle="custom.action.delete_confirm_title"
      confirmContent="custom.action.delete_confirm_content"
      confirmColor="warning"
      redirect="/"
      size="medium"
      sx={{ px: 2 }}
      mutationOptions={{
        meta: { projectId },
        onMutate: () => {
          void queryClient.invalidateQueries();
        },
      }}
    />
  );
};

type Props = ComponentProps<typeof Toolbar> & {
  showDeleteButton?: boolean;
};

export const FormToolbar = ({ showDeleteButton, ...rest }: Props) => {
  return (
    <Toolbar {...rest} sx={{ justifyContent: "space-between" }}>
      <SaveButton />
      {showDeleteButton && <DeleteButton />}
    </Toolbar>
  );
};

FormToolbar.SaveButton = SaveButton;
