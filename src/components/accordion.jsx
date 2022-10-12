import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Faqs() {
  return (
    <div>
        <Accordion className='accordian'>
            <AccordionSummary expandIcon={<ExpandMoreIcon style={{color: "#fff"}} />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>What are the utilities?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                We are building a bridge between web2 and web3 as a store where our community members can make purchase using worth os NFT and crypto, also creating a way of rewards fro everyone in the community. Daily raffle, merch and ataking will also be built along side.
            </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion className='accordian'>
            <AccordionSummary expandIcon={<ExpandMoreIcon style={{color: "#fff"}} />} aria-controls="panel2a-content" id="panel2a-header">
            <Typography>What is the mint price?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                TBA
            </Typography>
            </AccordionDetails>
      </Accordion>
      <Accordion className='accordian'>
            <AccordionSummary expandIcon={<ExpandMoreIcon style={{color: "#fff"}} />} aria-controls="panel3a-content" id="panel3a-header">
            <Typography>What is the launch date?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                TBA
            </Typography>
            </AccordionDetails>
      </Accordion>
      <Accordion className='accordian'>
            <AccordionSummary expandIcon={<ExpandMoreIcon style={{color: "#fff"}} />} aria-controls="panel4a-content" id="panel4a-header">
            <Typography>What is the total supply</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                TBA
            </Typography>
            </AccordionDetails>
      </Accordion>
      <Accordion className='accordian'>
            <AccordionSummary expandIcon={<ExpandMoreIcon style={{color: "#fff"}} />} aria-controls="panel5a-content" id="panel5a-header">
            <Typography>Is the Whitelist token or wallet based?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                TBA
            </Typography>
            </AccordionDetails>
      </Accordion>
    </div>
  );
}
