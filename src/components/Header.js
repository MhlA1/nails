import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CallIcon from "@mui/icons-material/Call";
import { Stack } from "@mui/system";
import { Divider, IconButton, Link } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: "flex-start",
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  "@media all": {
    minHeight: 64,
  },
}));

export default function Header() {
  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          boxShadow: "0px 5px 10px black",
        }}
      >
        <StyledToolbar>
          <Typography
            marginTop={2}
            variant="h3"
            component="div"
            sx={{
              flexGrow: 1,
              align: "center",
              fontFamily: "Roboto",
              color: "text.secondary",
            }}
          >
            NAIL
            <Typography
              display="inline"
              sx={{
                writingMode: "vertical-rl",
                letterSpacing: "10px",
                color: "text.secondary",
              }}
            >
              ✦
            </Typography>
            D IT
            <Typography
              variant="h4"
              component="div"
              sx={{
                flexGrow: 1,
                alignSelf: "center",
                fontFamily: "Dancing Script",
              }}
            >
              by Anni
            </Typography>
          </Typography>

          <Stack>
            <Stack
              direction="row"
              marginTop={2}
              divider={<Divider orientation="vertical" flexItem />}
              spacing={1}
            >
              <IconButton
                sx={{
                  "&:hover": {
                    backgroundColor: "#ffffff",

                    boxShadow: "none",
                  },
                }}
                href="tel:2109883993"
              >
                <CallIcon sx={{ color: "limegreen" }} />
              </IconButton>
              <Link href="tel:2109883993" underline="hover" color="inherit">
                <Typography
                  marginTop={0.5}
                  variant="h6"
                  fontWeight={"400"}
                  sx={{
                    alignSelf: "flex-end",
                    color: "text.secondary",
                  }}
                >
                  21-0988-3993
                </Typography>
              </Link>
            </Stack>
            <Divider sx={{ marginTop: 2 }} />
            <Stack
              direction="row"
              marginTop={2}
              divider={<Divider orientation="vertical" flexItem />}
              spacing={1}
            >
              <IconButton
                sx={{
                  "&:hover": {
                    backgroundColor: "#ffffff",

                    boxShadow: "none",
                  },
                }}
                href="https://www.google.com/maps/place/NAIL'D+IT+by+Anni/@37.9243577,23.6948554,17z/data=!3m1!4b1!4m5!3m4!1s0xafec0a33d8961483:0xdcc5eeb411a0426c!8m2!3d37.9243535!4d23.6970441"
              >
                <BusinessIcon sx={{ color: "limegreen" }} />
              </IconButton>
              <Link
                href="https://www.google.com/maps/place/NAIL'D+IT+by+Anni/@37.9243577,23.6948554,17z/data=!3m1!4b1!4m5!3m4!1s0xafec0a33d8961483:0xdcc5eeb411a0426c!8m2!3d37.9243535!4d23.6970441"
                underline="hover"
                color="inherit"
              >
                <Typography
                  marginTop={0.5}
                  variant="h6"
                  fontWeight={"400"}
                  sx={{
                    alignSelf: "flex-end",
                    fontFamily: "Roboto",
                    color: "text.secondary",
                  }}
                >
                  Terpsichoris 22, Paleo Faliro
                </Typography>
              </Link>
            </Stack>
          </Stack>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}
