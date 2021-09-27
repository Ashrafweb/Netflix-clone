import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/ExpandLess";
import GetStarted from "./GetStarted";
import "./Accordion.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "60%",
    padding: "50px",
    paddingBottom: "20px",
    paddingLeft: "20%",
    color: "#fff",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: "1.65rem",
    color: "white",
  },
  paragraph: {
    fontSize: "1.5rem",
  },
}));

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <div className={classes.root}>
        <h1 className="headline__text">Frequently Asked Questions</h1>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          className="accordion"
        >
          <AccordionSummary
            expandIcon={<AddIcon className="acc__icon" />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography className={classes.secondaryHeading}>
              What is Netflix?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={classes.paragraph}>
              Netflix is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries, and more on
              thousands of internet-connected devices. You can watch as much as
              you want, whenever you want without a single commercial – all for
              one low monthly price. There's always something new to discover
              and new TV shows and movies are added every week!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className="accordion"
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<AddIcon className="acc__icon" />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography className={classes.secondaryHeading}>
              How much does netflix cost?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={classes.paragraph}>
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
              streaming device, all for one fixed monthly fee. Plans range from
              USD3.99 to USD11.99 a month. No extra costs, no contracts.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className="accordion"
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<AddIcon className="acc__icon" />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography className={classes.secondaryHeading}>
              Where can I watch?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={classes.paragraph}>
              Watch anywhere, anytime, on an unlimited number of devices. Sign
              in with your Netflix account to watch instantly on the web at
              netflix.com from your personal computer or on any
              internet-connected device that offers the Netflix app, including
              smart TVs, smartphones, tablets, streaming media players and game
              consoles. You can also download your favorite shows with the iOS,
              Android, or Windows 10 app. Use downloads to watch while you're on
              the go and without an internet connection. Take Netflix with you
              anywhere.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className="accordion"
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<AddIcon className="acc__icon" />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography className={classes.secondaryHeading}>
              How do I cancel?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={classes.paragraph}>
              Netflix is flexible. There are no pesky contracts and no
              commitments. You can easily cancel your account online in two
              clicks. There are no cancellation fees – start or stop your
              account anytime.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          className="accordion"
          expanded={expanded === "pane24"}
          onChange={handleChange("pane24")}
        >
          <AccordionSummary
            expandIcon={<AddIcon className="acc__icon" />}
            aria-controls="pane24bh-content"
            id="pane24bh-header"
          >
            <Typography className={classes.secondaryHeading}>
              What can I watch on netflix?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={classes.paragraph}>
              Netflix has an extensive library of feature films, documentaries,
              TV shows, anime, award-winning Netflix originals, and more. Watch
              as much as you want, anytime you want.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          className="accordion"
          expanded={expanded === "panel9"}
          onChange={handleChange("panel9")}
        >
          <AccordionSummary
            expandIcon={<AddIcon className="acc__icon" />}
            aria-controls="panel9bh-content"
            id="panel9bh-header"
          >
            <Typography className={classes.secondaryHeading}>
              Is netflix good for kids?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={classes.paragraph}>
              The Netflix Kids experience is included in your membership to give
              parents control while kids enjoy family-friendly TV shows and
              movies in their own space. Kids profiles come with PIN-protected
              parental controls that let you restrict the maturity rating of
              content kids can watch and block specific titles you don’t want
              kids to see.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <GetStarted />
    </>
  );
}
