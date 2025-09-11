import { Typography, Grid, Card } from "@mui/material";

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
          item
          xs={12}
          md={8}
          sx={{
            ".font": {
              textAlign: "justify",
              lineHeight: 1.8,
              fontSize: "1.1rem",
              mb: 2,
            },
          }}
        >
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            CHI SONO
          </Typography>

          <Typography variant="body1" className="font">
            Fin da bambino ho sempre desiderato un computer, mi affascinava
            profondamente. Durante un esercizio in palestra in prima media mi
            ruppi la gamba, non fu una bella esperienza, ma il destino volle che
            l’assicurazione della scuola decidesse di risarcirmi. Una volta che
            la mia famiglia fu convinta che possederne uno sarebbe stato un buon
            investimento, acquistammo il primo computer: un Olivetti PC 128S.
            Per quei tempi non era affatto male, e da lì è iniziato tutto.
          </Typography>
          <Typography variant="body1" className="font">
            Da quel momento, l’informatica è diventata parte integrante della
            mia vita. Ricordo ancora quando programmavo in BASIC, creando
            piccoli videogiochi e semplici applicazioni: era il mio modo di
            esplorare e dare forma alla mia curiosità. Alle scuole medie ero
            considerato l'esperto della scuola e il professore di educazione
            tecnica mi faceva chiamare spesso fuori dalla classe durante le
            lezioni per andare a sistemare il computer o altro. Aveva persino
            dedicato un piccolo spazio dove mostravo ai miei compagni qualche
            semplice programma creato sul momento.
          </Typography>

          <Typography variant="body1" className="font">
            Crescendo, ho seguito questa inclinazione, conseguendo una qualifica
            come programmatore e svolgendo uno stage presso l'Acegas a Trieste.
            Nel tempo, sono cresciuto assieme all’evoluzione dei computer:
            assemblando i miei pc da zero, implementadoli, scegliendo e
            acquistando i componenti, imparando ogni volta qualcosa di nuovo.
            Sono sempre stato considerato un punto di riferimento da amici,
            parenti e colleghi, per risolvere problemi, configurare sistemi o
            dare consigli. Successivamente sono stato consulente e venditore in
            un negozio di informatica dove mi occupavo dalla consulenza tecnica
            all’assemblaggio, fino all’assistenza post-vendita. Ogni
            configurazione richiedeva pazienza, e ogni cliente portava con sé
            una sfida diversa.
          </Typography>

          <Typography variant="body1" className="font">
            Nel corso degli anni ho avuto modo di esplorare altri ambiti guidato
            dalla voglia di imparare. Ho lavorato con AutoCAD, approfondendo la
            progettazione tecnica e grafica in alcuni progetti, e mi sono
            dedicato all’audio editing, un’estensione naturale della mia
            passione per la musica. Sono infatti un chitarrista, e la musica è
            da sempre una parte fondamentale della mia vita, che mi ha insegnato
            precisione, concentrazione e creatività.
          </Typography>
          <Typography variant="body1" className="font">
            Questa combinazione tra pensiero logico e profondità creativa ha
            sempre fatto parte del mio modo di essere fin da giovane. Spinto
            dalla volontà di confrontarmi con un contesto stimolante, sono anche
            entrato a far parte del Mensa e per me ha rappresentato una
            opportunità per ottenere alcune conferme.
          </Typography>

          <Typography variant="body1" className="font">
            Da diversi anni, lavoro nel settore bancario, attualmente
            occupandomi di istruttoria per il canale mutui di un importante
            gruppo bancario italiano. È un’attività che richiede precisione,
            capacità di analisi e attenzione ai dettagli, competenze che nel
            tempo ho affinato e che si integrano con il mio background
            informatico, contribuendo a dare continuità e valore al mio
            percorso.
          </Typography>
          <Typography variant="body1" className="font">
            Dal punto di vista informatico, nelle fasi più recenti, mi sono
            formato come full stack developer ottenendo certificazioni e
            realizzando progetti concreti con tecnologie come HTML, CSS,
            JavaScript, React, Vite, Tailwind, Bootstrap, MUI, Node.js, Express,
            MongoDB e Mongoose. Questo percorso mi ha permesso di ampliarmi
            attraverso competenze pratiche nello sviluppo e nella pubblicazione
            di applicazioni web moderne, consolidando ulteriormente la mia
            preparazione.
          </Typography>
          <Typography variant="body1" className="font">
            Attualmente sto concentrando le mie energie sulla realizzazione di
            un portfolio solido e rappresentativo, che metta in luce la mia
            evoluzione e la mia visione come sviluppatore. Una volta completato,
            il mio obiettivo sarà ampliare lo stack tecnico con TypeScript ed
            esplorare ambiti come Python, automazione, machine learning e
            intelligenza artificiale, con l’intento di diventare sempre più
            completo e orientato all’innovazione.
          </Typography>
          <Typography variant="body1" className="font">
            Quello che mi entusiasma, in questo ambito, è vedere come la
            programmazione possa dare forma alle idee e offrire opportunità
            reali. Trovo di ispirazione i risultati raggiunti da realtà come
            Google, Amazon e molte altre, per la loro capacità di trasformare il
            mondo tech, introdurre innovazioni straordinarie e rivoluzionarie.
            Allo stesso modo, mi motiva l’idea di aiutare chi vuole crescere:
            startup, imprese, professionisti. Un progetto digitale ben pensato
            può diventare il punto di svolta per chi ha molto da offrire ma non
            ancora visibilità. È in quel momento che posso fare la differenza.
          </Typography>
          <Typography variant="body1" className="font">
            L'esperienza maturata finora mi ha insegnato il valore del
            dettaglio, dell’organizzazione e della capacità di trovare soluzioni
            anche di fronte a sfide complesse. Affronto ogni progetto con
            autenticità e schiettezza, analizzando a fondo ciò che ho davanti
            per comprenderlo in profondità. Credo che solo così si possano
            creare soluzioni efficaci, capaci di produrre impatti tangibili.
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
}
