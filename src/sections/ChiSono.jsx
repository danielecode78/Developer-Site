import { Typography, Grid, Card, Box } from "@mui/material";
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
          <Typography variant="h5" fontWeight={600} textAlign="left">
            Profilo
          </Typography>

          <Typography variant="body1" className="font">
            Appassionato di informatica fin dall’infanzia, ho trasformato una
            curiosità precoce in un percorso solido e multidisciplinare. Dopo
            aver conseguito una qualifica come programmatore e svolto uno stage
            presso Acegas a Trieste, ho maturato competenze tecniche
            nell’assemblaggio, configurazione e consulenza informatica,
            lavorando anche come tecnico e venditore in negozi specializzati.
          </Typography>

          <Typography variant="body1" className="font">
            Nel tempo ho ampliato il mio profilo, esplorando ambiti come la
            progettazione tecnica con AutoCAD e l’audio editing, alimentato
            dalla mia passione per la musica, in quanto chitarrista. Questa
            combinazione tra pensiero analitico e creatività mi ha portato a
            sviluppare soluzioni efficaci e personalizzate, diventando un punto
            di riferimento per colleghi, amici e clienti.
          </Typography>

          <Typography variant="body1" className="font">
            Attualmente lavoro nel settore bancario, occupandomi di istruttoria
            mutui per un primario gruppo italiano. L’attività richiede
            precisione, capacità di analisi e attenzione al dettaglio,
            competenze che si integrano con il mio background tecnico e
            rafforzano la mia affidabilità professionale.
          </Typography>

          <Typography variant="h5" fontWeight={600} textAlign="left">
            Competenze tecniche
          </Typography>

          <Typography variant="body1" className="font">
            Negli ultimi anni mi sono formato come full stack developer,
            ottenendo certificazioni e realizzando progetti concreti con
            tecnologie quali:
          </Typography>

          <Box component="ul" sx={{ listStyleType: "square", pl: 3 }}>
            <Typography component="li" className="font">
              Frontend: HTML, CSS, JavaScript, React, Vite, Tailwind, Bootstrap,
              MUI
            </Typography>
            <Typography component="li" className="font">
              Backend: Node.js, Express
            </Typography>
            <Typography component="li" className="font">
              Database: MongoDB, Mongoose
            </Typography>
          </Box>

          <Typography variant="body1" className="font">
            Sto attualmente lavorando alla costruzione di un portfolio
            professionale che rappresenti la mia evoluzione come sviluppatore. I
            prossimi obiettivi includono l’integrazione di TypeScript,
            l’approfondimento di Python, automazione, machine learning e
            intelligenza artificiale, con l’intento di diventare sempre più
            completo e orientato all’innovazione.
          </Typography>

          <Typography variant="h5" fontWeight={600} textAlign="left">
            Visione e motivazione
          </Typography>

          <Typography variant="body1" className="font">
            Credo nel potere della tecnologia come leva per trasformare idee in
            opportunità concrete. Mi ispirano le realtà che innovano, come
            Google e Amazon, e mi motiva l’idea di supportare startup, imprese e
            professionisti nella creazione di soluzioni digitali che generino
            impatto e visibilità.
          </Typography>

          <Typography variant="h5" fontWeight={600} textAlign="left">
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
              Ogni progetto che affronto è guidato dalla volontà di comprendere
              a fondo, creare valore e generare soluzioni tangibili
            </Typography>
          </Box>

          <Typography variant="h5" fontWeight={600} textAlign="left">
            Certificazioni
          </Typography>

          <Box
            component="ul"
            sx={{
              listStyleType: "square",
              pl: 3,
              columnCount: { xs: 1, xl: 2 },
            }}
          >
            {certifications?.length > 0 &&
              certifications.map((item) => (
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Typography component="li" className="font">
                    {item.title}
                  </Typography>
                  <Box
                    component="img"
                    src={`${import.meta.env.BASE_URL}/images/${
                      item.provider
                    }.png`}
                    alt="freeCodeCamp badge"
                    height={20}
                    sx={{
                      mb: 2,
                      border: "1px solid gray",
                      borderRadius: 1,
                    }}
                  />
                </Box>
              ))}
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}
