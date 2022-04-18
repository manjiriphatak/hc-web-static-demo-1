import type { NextPage } from 'next'
import Head from 'next/head'
import { Box, Button, Container, List, ListItem, Typography, Grid ,CardMedia} from "@mui/material";
import { grey, red } from "@mui/material/colors";
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
            <FormatQuote sx={{color:200, fontSize:"3rem"}}/>
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
          <Container maxWidth={"sm"}>
           <Typography variant={"h2"} sx={{ fontWeight: "600", fontSize: "2rem", textAlign:"center", py:7}}>
          Know the feeling?
           </Typography>
            <Grid container spacing={6} > 
        
              <Grid item sm={6}>
                  <Typography variant={"body1"} sx={{ fontSize: "1.2rem"}}>
                    ➡️  Waking up to a long list of to-dos, some of them <b> nagging</b> you for weeks
                  </Typography>
                </Grid>
                <Grid  item sm={6}>
                  <Typography variant={"body1"} sx={{ fontSize: "1.2rem"}}>
                  ➡️  Your list just gets longer and longer and has become so <b> overwhelming</b> you can't even look at
                  </Typography>
                </Grid>
                <Grid  item sm={6}>
                  <Typography variant={"body1"} sx={{ fontSize: "1.2rem"}}>
                  ➡️ Starting on a list and then  <b>abandoning</b> it to check on *more important* stuff
                  </Typography>
                </Grid>
                <Grid  item sm={6}>
                  <Typography variant={"body1"} sx={{ fontSize: "1.2rem"}}>
                  ➡️ <b>Never starting</b> on anything only to go to bed every night with a monster list — towering over everything you do, day in day out
                  </Typography>
                </Grid>
            </Grid>
          </Container>
          <Container maxWidth={"sm"}>
           <Typography variant={"h2"} sx={{ fontWeight: "600", fontSize: "2rem", textAlign:"center", py:7}}>
           Meet your new best friend
           </Typography>
           <Container sx={{textAlign:"center"}} >
           <img 
           src="/kindpng_1222802.png"
           style={{ maxWidth:"300px"}}/>
           </Container>
           <Typography variant={"h2"} sx={{ fontWeight: "900", fontSize: "2.3rem", textAlign:"center", py:7}}>
           <b>Unlike other task managers,
Llama Life is designed to help you work
<i>THROUGH</i> a list...</b>
           </Typography>
           <Grid container spacing={6} > 
        
              <Grid item sm={6}>
                  <Typography variant={"body1"} sx={{ fontSize: "1.2rem"}}>
                  ⭐️ <b>Transforms</b> your dreaded tasks into bite-sized, manageable chunks of productivity                  </Typography>
                </Grid>
                <Grid  item sm={6}>
                  <Typography variant={"body1"} sx={{ fontSize: "1.2rem"}}>
                  ⭐️ <b>Frees you up </b>from late night sessions trying to finish stuff you didn’t get around to doing                  </Typography>
                </Grid>
                <Grid  item sm={6}>
                  <Typography variant={"body1"} sx={{ fontSize: "1.2rem"}}>
                  ⭐️ Helps you focus on <b>one</b> thing at a time                  </Typography>
                </Grid>
                <Grid  item sm={6}>
                  <Typography variant={"body1"} sx={{ fontSize: "1.2rem"}}>
                  ⭐️ <b>Stops</b> you pondering about what to do next                  </Typography>
                </Grid>
            </Grid>
            <Typography variant={"h2"} sx={{ fontWeight: "900", fontSize: "2.3rem", textAlign:"center", py:7}}>
            ...so you're not just making lists,
you're completing them  🙌

           </Typography>
           <Container 
                     sx={{
                       textAlign: "center"
                     }}>
           <FormatQuote style={{ fill: 'lightgrey',fontSize:"3rem"}}/>
            <Typography variant={"h6"} sx={{fontWeight:"100",fontSize:"1.2rem",paddingBottom:6}}>
              <i>
              I’ve managed to finish all my work early today for the first time in days
           </i>
           <br/>
          <b> ~ Odette, from Tustin, USA   </b>
            </Typography>
            <FormatQuote style={{ fill: 'lightgrey',fontSize:"3rem"}}/>
            <Typography variant={"h6"} sx={{fontWeight:"100",fontSize:"1.2rem",paddingBottom:6}}>
              <i>
              ...a game changer. I’m more productive than ever — even compared to when I was using pomodoro timers           </i>
           <br/>
          <b> ~ Erica in Chatham, USA  </b>
            </Typography>
            <FormatQuote style={{ fill: 'lightgrey',fontSize:"3rem"}}/>
            <Typography variant={"h6"} sx={{fontWeight:"100",fontSize:"1.2rem",paddingBottom:6}}>
              <i>
              A low pressure, but extremely helpful way to keep me on task           </i>
           <br/>
          <b> ~ ADHD-Bri, from Austin, USA   </b>
            </Typography>
            </Container>
            <Typography variant={"h2"} sx={{ fontWeight: "900", fontSize: "2.3rem", textAlign:"center", py:7}}>
            Get ready to live your best life...
           </Typography>
           <Container >
             <img  src="/kindpng_3933381.png" style={{ maxWidth:"500px"}}/>
           </Container>
            <Typography variant={"h2"} sx={{ fontWeight: "900", fontSize: "2.3rem", textAlign:"center", py:7}}>
            Tap the 'play' button for a product demo:
           </Typography>
           <CardMedia 
  component="video"
  height="140"
  src="/production ID_3818213.mp4"
  title="Sample video" 
/>
           </Container>
        </Box>
      </main>
    </div>
  )
}

export default Home
