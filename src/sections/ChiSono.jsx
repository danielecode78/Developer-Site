import {
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Divider,
  List,
  ListItem,
} from "@mui/material";
import { certifications } from "../utils/certifications";

export default function ChiSono() {
  return (
    <Card
      elevation={3}
      sx={{
        width: "75vw",
        maxWidth: "100%",
        height: "auto",
        mx: "auto",
        mt: "3vh",
        px: "1rem",
        py: "1rem",
        borderRadius: 4,
        backgroundColor: "#f9f9f9",
      }}
    >
      <Grid container spacing={4} alignItems="center">
        <Grid
          sx={{
            ".font": {
              textAlign: "justify",
              lineHeight: 1.8,
              fontSize: "1.1rem",
              mb: 2,
            },
          }}
        >
          <Box sx={{ mb: 5 }}>
            <Typography
              variant="h5"
              color="darkslategray"
              fontWeight={600}
              textAlign="left"
              className="chapters"
            >
              Profilo
            </Typography>

            <Typography variant="body1" className="font">
              Appassionato di informatica fin dall’infanzia, ho trasformato una
              curiosità precoce in un percorso solido e multidisciplinare. Dopo
              aver conseguito una qualifica come programmatore e svolto uno
              stage presso Acegas a Trieste, ho maturato competenze tecniche
              nell’assemblaggio, configurazione e consulenza informatica,
              lavorando anche come tecnico e venditore in negozi specializzati.
            </Typography>

            <Typography variant="body1" className="font">
              Nel tempo ho ampliato il mio profilo, esplorando ambiti come la
              progettazione tecnica con AutoCAD e l’audio editing, alimentato
              dalla mia passione per la musica, in quanto chitarrista. Questa
              combinazione tra pensiero analitico e creatività mi ha portato a
              sviluppare soluzioni efficaci e personalizzate.
            </Typography>

            <Typography variant="body1" className="font">
              Attualmente lavoro nel settore bancario, occupandomi di
              istruttoria mutui per un primario gruppo italiano. L’attività
              richiede precisione, capacità di analisi e attenzione al
              dettaglio, competenze che si integrano con il mio background
              tecnico e rafforzano la mia affidabilità professionale.
            </Typography>
          </Box>
          <Box sx={{ mb: 5 }}>
            <Typography
              variant="h5"
              color="darkslategray"
              fontWeight={600}
              textAlign="left"
              className="chapters"
            >
              Visione e motivazione
            </Typography>

            <Typography variant="body1" className="font">
              Credo nel potere della tecnologia come leva per trasformare idee
              in opportunità concrete. Mi ispirano le realtà che innovano, come
              Google e Amazon, e mi motiva l’idea di supportare startup, imprese
              e professionisti nella creazione di soluzioni digitali che
              generino impatto e visibilità.
            </Typography>
          </Box>
          <Box sx={{ mb: 5 }}>
            <Typography
              variant="h5"
              color="darkslategray"
              fontWeight={600}
              textAlign="left"
              className="chapters"
            >
              Soft skills
            </Typography>

            <Box component="ul" sx={{ listStyleType: "square", pl: 3 }}>
              <Typography component="li" className="font">
                Pensiero analitico e orientamento al dettaglio
              </Typography>
              <Typography component="li" className="font">
                Capacità di problem solving anche in contesti complessi
              </Typography>
              <Typography component="li" className="font">
                Comunicazione chiara e approccio autentico
              </Typography>
              <Typography component="li" className="font">
                Organizzazione e precisione
              </Typography>
              <Typography component="li" className="font">
                Attitudine all’apprendimento continuo
              </Typography>
              <Typography component="li" className="font">
                Sono membro del Mensa, un riconoscimento che riflette la mia
                predisposizione all’analisi e alla riflessione profonda
              </Typography>
              <Typography component="li" className="font">
                Ogni progetto che affronto è guidato dalla volontà di
                comprendere a fondo, creare valore e generare soluzioni
                tangibili
              </Typography>
            </Box>
          </Box>
          <Typography
            variant="h5"
            color="darkslategray"
            fontWeight={600}
            textAlign="left"
            className="chapters"
          >
            Certificazioni & Formazione
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 3,
              justifyContent: "center",
              mt: 2,
            }}
          >
            {certifications?.length > 0 &&
              certifications.map((item, index) => (
                <Card
                  key={index}
                  sx={{
                    flex: "1 1 300px",
                    maxWidth: 400,
                    boxShadow: 3,
                    borderRadius: 3,
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h5"
                      color="navy"
                      gutterBottom
                      fontWeight={600}
                    >
                      {item.category}
                    </Typography>
                    <Divider sx={{ mb: 2 }} />

                    {item.providers.map((provider, pIndex) => (
                      <Box key={pIndex} sx={{ mb: 2 }}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            mb: 1,
                            border: "1px solid #a67c00",
                            p: 1,
                            borderRadius: 2,
                          }}
                        >
                          <Box
                            component="img"
                            src={provider.logo}
                            alt={`${provider.name} logo`}
                            sx={{
                              height: 20,
                            }}
                          />
                        </Box>
                        <List>
                          {provider.courses.map((cert, cIndex) => (
                            <ListItem
                              key={cIndex}
                              sx={{
                                display: "flex",
                                alignItems: "flex-start",
                                gap: 2,
                              }}
                            >
                              <Typography
                                variant="body2"
                                sx={{ mb: 1 }}
                                // fontWeight={cert.specialization && 600}
                              >
                                {cert.title}
                              </Typography>
                              {cert.specialization && (
                                <Box
                                  component="img"
                                  src="images/specialization.png"
                                  sx={{
                                    width: "100px",
                                  }}
                                />
                              )}
                            </ListItem>
                          ))}
                        </List>
                      </Box>
                    ))}
                  </CardContent>
                </Card>
              ))}
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}
