import type { NextPage } from 'next'
import Head from 'next/head'
import { Box, Button, Container, List, ListItem, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { FormatQuote } from "@mui/icons-material";

const Span = ({children, ...props}) => <Box display={"inline"} {...props}>{children}</Box>

const Home: NextPage = () => {

  return (
    <div>
      <Head>
        <title>Example Landing Page</title>
        <meta name="description" content="Starting point for new Health Curious Landing Page."/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main>
        {/* Hero */}
        <Box sx={{ ".MuiContainer-root": { py: 3 } }}>
          <Container maxWidth={"sm"}
                     sx={{ ".MuiButton-root": { bgcolor: "#000", ":hover": { bgcolor: "text.secondary" } } }}>
            <Typography variant={"h3"} sx={{ fontWeight: "600", fontSize: "2rem", }}>
              Say goodbye to never-ending lists, and hello to daily bliss
            </Typography>
            <List sx={{ ".MuiTypography-root": { color: "text.secondary" } }}>
              <ListItem>
                <Typography variant={"body1"}>
                  {"⚡️ Whiz through your monstrous to-do list"}
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant={"body1"}>
                  {"⏰ Finish work on time and live a little"}
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant={"body1"}>
                  {"👍 Do the stuff you said you would"}
                </Typography>
              </ListItem>
            </List>
            <Button variant={"contained"}>Give me focus</Button>
            <Box pt={2} sx={{ ".MuiTypography-root": { fontSize: ".6rem", color: "text.secondary" } }}>
              <Typography variant={"body2"}>
                {"Try for free and welcome bliss back into your life!"}
              </Typography>
              <Typography variant={"body2"}>
                {"No credit card upfront."}
              </Typography>
            </Box>
          </Container>

          {/* Quote */}
          <Container maxWidth={"sm"}
                     sx={{
                       display: "flex",
                       flex: 1,
                       flexDirection: "column",
                       alignItems: "center",
                       textAlign: "center"
                     }}>
            <FormatQuote/>
            <Typography variant={"h6"}>
              <i>
                {"...a perfect tool for managing timeboxed working sessions. It’s not too overbearing, and it’s fun and quirky to boot."}
              </i>
            </Typography>

          </Container>

          {/* "As seen on" */}
          <Container maxWidth={"sm"}>
            <Typography variant={"h6"}>As seen on:</Typography>
          </Container>

          {/* Rhetorical questions */}
          <Box sx={{ bgcolor: grey[200], }}>
            <Container maxWidth={"sm"}>
              <List>
                <ListItem>
                  <Typography variant={"body1"}>
                    <Span fontWeight={"600"}>How many times</Span> a day do you tell yourself you need to get stuff done?
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant={"body1"}>
                    How much is procrastination <b>holding you back?</b>
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant={"body1"}>
                    Are opportunities <b>passing you by</b> because you never have enough
                    time for anything?
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant={"body1"}>
                    Failing to manage your time may <b>already be costing</b> you a great deal.
                  </Typography>
                </ListItem>
              </List>
            </Container>
          </Box>
        </Box>
      </main>
    </div>
  )
}

export default Home
