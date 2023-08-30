/* Components */
import { Providers } from "@/lib/providers";
import { Nav } from "./components/Nav";

/* Instruments */
import styles from "./styles/layout.module.css";
import "./styles/globals.css";
import Header from "./components/Header";
import { Box } from "@mui/material";

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <Header />
          <Box
            component="main"
            sx={{
              height: "100vh",
              backgroundColor: (theme) => theme.palette.grey[900],
            }}
          >
            {props.children}
          </Box>
        </body>
      </html>
    </Providers>
  );
}
