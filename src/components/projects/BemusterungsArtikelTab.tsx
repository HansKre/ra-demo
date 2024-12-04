import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { ComponentProps, memo, useEffect, useState } from "react";
import {
  ArrayInput,
  BooleanInput,
  NumberInput,
  required,
  TabbedForm,
  TextInput,
} from "react-admin";
import { useWatch } from "react-hook-form";
import { renderDelay } from "../../constants";
import { ImageField } from "../../fields";
import { BemusterungsArtikel, Units } from "../../types";
import { CenteredCircularProgress } from "../CenteredCircularProgress";
import { getArticleImageUrl } from "../getArticleImageUrl";
import { PlaceholderImg } from "../PlaceholderImg";

type Props = Omit<ComponentProps<typeof TabbedForm.Tab>, "label">;

const BemusterungsArtikelTab_ = (props: Props) => {
  return (
    <TabbedForm.Tab label="Articles" path="bemusterungs_artikel" {...props}>
      <ArrayInput source="bemusterungs_artikel" label={false}>
        <GroupedAccordionIterator />
      </ArrayInput>
    </TabbedForm.Tab>
  );
};

type FormSchema = {
  bemusterungs_artikel: BemusterungsArtikel[];
};

const GroupedAccordionIterator = () => {
  const katalog = useWatch<FormSchema, "bemusterungs_artikel">({
    name: "bemusterungs_artikel",
  });

  // Group items by kategorie
  const [groupedArticles, groupedArticlesSet] =
    useState<Record<string, Array<BemusterungsArtikel & { index: number }>>>();
  useEffect(() => {
    setTimeout(() => {
      const reduced = katalog?.reduce(
        (acc, curr, index) => {
          const kategorie = curr.kategorie || "Uncategorized";
          if (!acc[kategorie]) acc[kategorie] = [];
          acc[kategorie].push({ ...curr, index });
          return acc;
        },
        {} as Record<string, Array<BemusterungsArtikel & { index: number }>>,
      );
      groupedArticlesSet(reduced);
    }, renderDelay);
  }, [katalog]);

  if (!katalog || !groupedArticles) return <CenteredCircularProgress />;

  return (
    <Box>
      {Object.entries(groupedArticles).map(([group, articles]) => (
        <Accordion key={group}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">{group}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {articles.map((article) => (
              <Card key={article.index} sx={{ marginBottom: "1rem" }}>
                <CardContent
                  sx={{
                    "& .MuiFormHelperText-root": {
                      visibility: "hidden",
                      display: "none",
                    },
                    "& .Mui-readOnly": {
                      cursor: "not-allowed",
                      "&::before": {
                        borderBottom: "none",
                      },
                    },
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={8}>
                      <TextInput
                        source={`${article.index}.bezeichnung`}
                        label="Bezeichnung"
                        readOnly
                      />
                      <TextInput
                        source={`${article.index}.artNr`}
                        label="Artikelnummer"
                        readOnly
                      />
                      <NumberInput
                        source={`${article.index}.preis`}
                        label={`Preis in € / ${Units.qm}`}
                        validate={required()}
                        defaultValue={0}
                        parse={(value: unknown) => value ?? 0}
                      />
                      <BooleanInput
                        source={`${article.index}.ausgeblendet`}
                        label="ausgeblendet"
                      />
                    </Grid>
                    <Grid
                      container
                      item
                      xs={4}
                      alignContent="center"
                      justifyContent="center"
                    >
                      {article.bildDateiName ? (
                        <ImageField
                          url={getArticleImageUrl(article)}
                          alt={article.bezeichnung}
                        />
                      ) : (
                        <PlaceholderImg />
                      )}
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export const BemusterungsArtikelTab = memo(BemusterungsArtikelTab_);
