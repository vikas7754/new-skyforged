import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./faq.module.scss";

const faqs = [
  {
    question: "What is the purpose of the token pre-sale?",
    answer:
      "The pre-sale aims to raise initial funding for the project's development, marketing, and other essential activities. It also helps build a community of early supporters.",
  },
  {
    question: "How can I participate in the pre-sale?",
    answer:
      "You can participate in the pre-sale by following these steps. If you require help at any point, please reach out to our support staff on Discord through our #support-ticket channel.",
  },
  {
    question: "When does the pre-sale start?",
    answer: "The public pre-sale will start June 24th 4pm UTC.",
  },
  {
    question: "How many stages will there be?",
    answer:
      "The public pre-sale will have a total of 9 stages, each with their own raise, price and token availability. You can find more information about the stages here.",
  },
  {
    question: "How long does each stage last?",
    answer:
      "Stages will last until they're 100% funded. After completion of a stage, the next stage will commence automatically.",
  },
  {
    question: "When can I claim my tokens?",
    answer:
      "Token claiming will be available shortly after the pre-sale concludes. We will announce the exact distribution date and additional information on our official channels.",
  },
  {
    question: "Will there be a lock-up period for the tokens?",
    answer:
      "No. Your tokens will be usable right away. An exchange listing will follow shortly after the pre-sale has concluded.",
  },
  {
    question: "On what exchange will $SKYF be available?",
    answer:
      "Initially, $SKYF will be introduced on Aerodrome Finance. As the project progresses, we will be actively seeking partnerships with various exchanges. Follow us on Twitter to stay up-to-date about topics such as these.",
  },
  {
    question: "Where can I find more information about the project?",
    answer:
      "For more information, visit our home page, read our white paper or take a look at our official channels, you can find all these sources at the footer of the website.",
  },
];

export default function Faqs() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={styles.container}>
      <h2 className="title center padding">FAQS</h2>
      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          className={styles.accordion}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              sx={{ width: "100%", flexShrink: 0 }}
              className={styles.question}
            >
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={styles.answer}>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
