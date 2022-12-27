import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { WavyLink } from "react-wavy-transitions";
import styles from "./faq.module.css";
import Fade from 'react-reveal/Fade';


const items = [
  {
    uuid: "1",
    heading: "Q:HOW DO I PLACE AN ORDER?",
    content:
      "A-You can place orders through our website or by Whatsapp. placing an order takes a few minutes on our website. Simply pick your favorite product from our Shop,click “add to cart” and then on the next page press “proceed to checkout”. Now fill in your personal information and address details then click “Place Order”. Done! Your order is now in our system and will be processed. Nothing else needed on your part.By Whatsapp, it is also very simple just click any Whatsapp link and you will be chatting with one of our customer service agents who will place the order for you",
  },
  {
    uuid: "2",
    heading: "Q-HOW LONG DOES DELIVERY TAKE?",
    content:
      "A- We deliver our products to all territories across Egypt, delivery shall be in 5 working days Inside Cairo & Giza and delivery shall be in 7 working days to the rest of the governorates of Egypt (excluding any public holidays).",
  },
  {
    uuid: "3",
    heading:
      "Q-I DON’T LIKE ORDERING THINGS ONLINE. WHAT IF ANYTHING GOES WRONG?",
    content:
      "A-This is a common concern we receive because unfortunately, a lot of online shops are dishonest. First off, here at InfinityStore, always pay on delivery. When you receive the product, you can check the material but without opening the product and If you did not like it, you can refuse to take it, and payment must be made for the delivery service only.",
  },
  {
    uuid: "4",
    heading: "Q-DO YOU OFFER REFUNDS?",
    content: "A-Yes, we offer refunds for all products.",
  },

  {
    uuid: "5",
    heading:
      "Q-HOW DO I EXCHANGE OR RETURN A PRODUCT AND HOW MUCH DOES IT COST?",
    content:
      "A-You can exchange or return the product within 14 days of receiving it, By Visit your nearest Store.",
  },
  {
    uuid: "6",
    heading: "Q- HOW CAN I TRACK MY ORDER?",
    content:
      "You can track your order status by calling / Texting us: +20 155 1881810 ,Also you’ll receive an email and SMS confirmation once you’ve placed your order.",
  },
];

const FAQ = () => {
  const [active, setActive] = useState(true);

  return (
    <>
    <Fade bottom>
    <div className={styles.faqWrapper}>
      <div className={styles.faqContainer}>
        <h1 className={styles.titlePrimary}>FREQENTLY ASKED QUESTIONS</h1>
        <p className={styles.clarify}>
          Have questions and want fast answers? We’ve made a list of the most
          common questions customers ask us on this page. If you still have
          unanswered questions after reading this, please feel free to reach out
          to us via{" "}
          <WavyLink className="link" to="/contact" color="#000000">
            contact us
          </WavyLink>
          .
        </p>
      </div>
      <div className={styles.line}></div>

      <Accordion
        allowMultipleExpanded
        allowZeroExpanded
        onChange={() => setActive(!active)} // this is to change the icon when the accordion is clicked on it
      >
        {items.map((item) => (
          <AccordionItem key={item.uuid}>
            <AccordionItemHeading>
              <AccordionItemButton className={styles.accordionHead}>
                {item.heading}

                <AccordionItemState >
                  {({ expanded }) =>
                    expanded ? (
                      <FontAwesomeIcon icon={faCircleMinus} className={styles.icon} />
                    ) : (
                      <FontAwesomeIcon icon={faCirclePlus} className={styles.icon} />
                    )
                  }
                </AccordionItemState>
              </AccordionItemButton>
            </AccordionItemHeading>

            <AccordionItemPanel className={styles.accordionContent}>
              {item.content}
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
    </Fade>
    </>
  );
};

export default FAQ;
