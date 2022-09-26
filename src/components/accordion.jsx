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
            <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion className='accordian'>
            <AccordionSummary expandIcon={<ExpandMoreIcon style={{color: "#fff"}} />} aria-controls="panel2a-content" id="panel2a-header">
            <Typography>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
            </AccordionDetails>
      </Accordion>
      <Accordion className='accordian'>
            <AccordionSummary expandIcon={<ExpandMoreIcon style={{color: "#fff"}} />} aria-controls="panel3a-content" id="panel3a-header">
            <Typography>Accordion 3</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
            </AccordionDetails>
      </Accordion>
      <Accordion className='accordian'>
            <AccordionSummary expandIcon={<ExpandMoreIcon style={{color: "#fff"}} />} aria-controls="panel4a-content" id="panel4a-header">
            <Typography>Accordion 4</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
            </AccordionDetails>
      </Accordion>
      <Accordion className='accordian'>
            <AccordionSummary expandIcon={<ExpandMoreIcon style={{color: "#fff"}} />} aria-controls="panel5a-content" id="panel5a-header">
            <Typography>Accordion 5</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
            </AccordionDetails>
      </Accordion>
    </div>
  );
}
