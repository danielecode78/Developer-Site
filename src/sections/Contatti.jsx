import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import {
  Box,
  TextField,
  Button,
  Typography,
  Card,
  FormControlLabel,
  Checkbox,
  useMediaQuery,
} from "@mui/material";

const RECAPTCHA_SITE_KEY = "6LdQTsQrAAAAAP3gWLnnaoMpZu2eBG8yYBQmQY2t";

export default function Contatti() {
  const formRef = useRef();
  const captchaRef = useRef(null);
  const [captchaToken, setCaptchaToken] = useState(null);
  const isMobile = useMediaQuery("(max-width: 600px)");
  const recaptcha = useMediaQuery("(max-width: 365px)");

  const sendEmail = (e) => {
    e.preventDefault();
    if (!captchaToken) {
      alert("Verifica il CAPTCHA prima di inviare.");
      return;
    }

    emailjs
      .sendForm("service_rnwoeub", "template_hjmy53b", formRef.current, {
        publicKey: "c8Vv91uoRzMX8WujR",
      })
      .then(
        () => {
          alert("Email inviata con successo!");
          formRef.current.reset();
          setCaptchaToken(null);
          captchaRef.current.reset();
        },
        (error) => {
          console.error("Errore nell'invio:", error);
        }
      );
  };

  return (
    <Card
      variant="outlined"
      sx={{
        mt: 6,
        mx: "auto",
        p: 2,
        borderRadius: "0.5rem",
        maxWidth: "600px",
      }}
    >
      <Box
        component="form"
        variant="outlined"
        ref={formRef}
        onSubmit={sendEmail}
        sx={{ display: "grid", gap: 2, width: "100%" }}
      >
        <Typography
          variant="h3"
          color="primary"
          sx={{
            fontWeight: "bold",
            fontFamily: "Franklin Gothic Heavy",
            letterSpacing: "0.15em",
            fontSize: isMobile ? "2rem" : "3rem",
          }}
        >
          CONTATTAMI
        </Typography>
        <TextField label="Nome / Ragione sociale" name="user_name" required />
        <TextField label="Cellulare / Fisso" name="cell" required />
        <TextField label="Email" name="user_email" type="email" required />
        <TextField
          label="Messaggio"
          name="message"
          multiline
          minRows={5}
          required
        />
        <Box
          sx={
            recaptcha
              ? {
                  transform: "scale(0.84)",
                  transformOrigin: "0.0",
                  width: "fit-content",
                  overflow: "hidden",
                }
              : ""
          }
        >
          <ReCAPTCHA
            ref={captchaRef}
            sitekey={RECAPTCHA_SITE_KEY}
            onChange={(token) => setCaptchaToken(token)}
          />
        </Box>
        <FormControlLabel
          control={<Checkbox required />}
          label="Acconsento al trattamento dei dati personali ai sensi del GDPR"
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            fontWeight: "bold",
          }}
        >
          Invia
        </Button>
      </Box>
    </Card>
  );
}
