import { Grid, Paper, Typography } from "@mui/material";
import { memo, useMemo } from "react";
import { ArrayInput, required, SelectInput, TextInput } from "react-admin";
import { roomTypeChoices } from "../../constants";
import { sharedTexts } from "../../providers/i18nProvider";
import { Units } from "../../types";
import { StyledSimpleFormIterator } from "../StyledSimpleFormIterator";
import { TextInputWithPostfix } from "../TextInputWithPostfix";

const containerWithTitleStyles = {
  "& > .MuiGrid-item": { pt: "0.5rem !important" },
};
const titleStyles = { mt: "0.5rem", color: "rgba(0, 0, 0, 0.6)" };

const ProjectsIterator_ = () => {
  // sort apartment types alphabetically by name
  const fliesenRoomTypeChoicesSorted = useMemo(
    () =>
      roomTypeChoices
        .filter((choice) => choice.isFliesen === true)
        .sort((a, b) => a.name.localeCompare(b.name)),
    [],
  );
  return (
    <StyledSimpleFormIterator addPrefix="Wohnung">
      <Paper sx={{ p: 2, mb: 2 }}>
        <TextInput source="name" label="Wohnungsname" validate={required()} />
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextInput
              source="stockwerk"
              label="Stockwerk"
              validate={required()}
            />
          </Grid>
          <Grid item xs={6}>
            <TextInputWithPostfix
              source="wohnFlaeche"
              label="Wohnfläche"
              postfix={Units.qm}
              isRequired
            />
          </Grid>
        </Grid>

        <Typography variant="subtitle2" sx={titleStyles}>
          Parkett
        </Typography>
        <Grid container spacing={2} sx={containerWithTitleStyles}>
          <Grid item xs={12}>
            <TextInputWithPostfix
              source="wohnFlaecheParkett"
              label="Wohnräume"
              postfix={Units.qm}
              isRequired
            />
          </Grid>
        </Grid>

        <Typography variant="subtitle2" sx={titleStyles}>
          {`${sharedTexts.raeumeMitFliesen}*`}
        </Typography>
        <ArrayInput
          source="raeumeMitFliesen"
          label={false}
          sx={{
            // align with Beschreibung-row
            maxWidth: "calc(100% - 28px)",
            "&.RaArrayInput-root": { paddingLeft: "0px" },
          }}
          validate={required()}
        >
          <StyledSimpleFormIterator addPrefix="Raum">
            <Grid container spacing={2} sx={containerWithTitleStyles}>
              <Grid item xs={6} md={4}>
                <SelectInput
                  source="roomType"
                  label="Raum"
                  validate={required()}
                  choices={fliesenRoomTypeChoicesSorted}
                />
              </Grid>
              <Grid item xs={3} md={4}>
                <TextInputWithPostfix
                  source="bodenFlaeche"
                  label="Boden"
                  postfix={Units.qm}
                  isRequired
                />
              </Grid>
              <Grid item xs={3} md={4}>
                <TextInputWithPostfix
                  source="wandFlaeche"
                  label="Wand"
                  postfix={Units.qm}
                  isRequired
                />
              </Grid>
            </Grid>
          </StyledSimpleFormIterator>
        </ArrayInput>
      </Paper>
    </StyledSimpleFormIterator>
  );
};

export const ProjectsIterator = memo(ProjectsIterator_);
