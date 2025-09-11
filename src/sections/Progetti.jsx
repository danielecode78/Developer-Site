import {
  ImageList,
  ImageListItem,
  useMediaQuery,
  useTheme,
  ImageListItemBar,
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
} from "@mui/material";

const itemData = [
  {
    img: `${import.meta.env.BASE_URL}/images/EasyToDoPreview.png`,
    title: "EasyToDo",
    description:
      "Semplice e intuitiva app web per creare categorie e liste di cose da fare.",
    link: "https://danielecode78.github.io/EasyToDo/",
  },
  {
    img: `${import.meta.env.BASE_URL}/images/GoodTimeLogPreview.png`,
    title: "GoodTimeLog",
    description:
      "Diaro social per condividere esperienze vissute: ristoranti, gite, musei, natura,.",
    link: "https://goodtimelog.onrender.com/",
  },
  {
    img: `${import.meta.env.BASE_URL}/images/comingsoon.png`,
    title: "Work In Progress...",
  },
  {
    img: `${import.meta.env.BASE_URL}/images/comingsoon.png`,
    title: "Work In Progress...",
  },
  {
    img: `${import.meta.env.BASE_URL}/images/comingsoon.png`,
    title: "Work In Progress...",
  },
  {
    img: `${import.meta.env.BASE_URL}/images/comingsoon.png`,
    title: "Work In Progress...",
  },
];

export default function Progetti() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isSm = useMediaQuery(theme.breakpoints.down("md"));
  const Big = useMediaQuery("(max-width:2000px)");

  const cols = isXs ? 1 : isSm ? 2 : Big ? 3 : 4;

  return (
    <>
      <ImageList cols={cols}>
        {itemData.map((item) => (
          <ImageListItem
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
            key={item.img}
          >
            <Card
              variant="outlined"
              sx={{
                flexGrow: 1,
                m: 1,
                borderRadius: 3,
                transition: "transform 0.3s, box-shadow 0.3s",
                transformOrigin: "center",
                ":hover": {
                  transform: "scale(1.03)",
                  boxShadow: 6,
                },
              }}
            >
              <CardActionArea
                sx={{ height: "100%" }}
                onClick={() => {
                  if (item.link) {
                    window.open(item.link, "_blank");
                  }
                }}
              >
                <CardMedia
                  component="img"
                  image={item.img}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    borderRadius: 3,
                  }}
                />
                <CardContent>
                  <ImageListItemBar
                    title={item.title}
                    subtitle={<span>{item.description}</span>}
                    position="below"
                    sx={{
                      ".MuiImageListItemBar-title": {
                        fontSize: "1.4rem",
                        paddingBottom: "0.5rem",
                      },
                      ".MuiImageListItemBar-subtitle": {
                        whiteSpace: "normal",
                        textAlign: "justify",
                        display: "block",
                        fontSize: "1rem",
                        color: "#3f3737ff",
                        lineHeight: 1.4,
                      },
                      ".MuiImageListItemBar-titleWrapBelow": {
                        alignItems: "flex-start",
                      },
                    }}
                  />
                </CardContent>
              </CardActionArea>
            </Card>
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
}
