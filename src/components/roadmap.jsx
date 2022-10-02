import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography'

import '../styles/roadmap.css'

export default function Roadmap() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          {/* <TimelineDot color='#FF6E30' /> */}
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography className='roadmap-text-head' color='#FF6E30'>Phase One</Typography>
          <div className='roadmap-items'>
            <p>Build Discord</p>
            <p>Create Social Channels</p>
            <p>Art Finalized</p>
            <p>White Paper Finalized</p>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          {/* <TimelineDot color="#FF7676" /> */}
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography className='roadmap-text-head' color='#FF7676'>Phase Two</Typography>
          <div className='roadmap-items'>
            <p>Release Website</p>
            <p>Promote Community</p>
            <p>Rarities and Traits Finished</p>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          {/* <TimelineDot color="#7551E9" /> */}
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography className='roadmap-text-head' color="#7551E9">Phase Three</Typography>
          <div className='roadmap-items'>
            <p>Mint Date Released</p>
            <p>Marketing & P.R</p>
            <p>Patners Established</p>
            <p>Merchandise Created</p>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          {/* <TimelineDot color="#FFBD59" /> */}
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography className='roadmap-text-head' color="#FFBD59">Phase Four</Typography>
          <div className='roadmap-items'>
            <p>Hard Marketing Begins</p>
            <p>P.R & Articles Written</p>
            <p>Project Collaboration</p>
            <p>Giveaways & Challenges</p>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          {/* <TimelineDot color="#67B0FF" /> */}
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography className='roadmap-text-head' color="#67B0FF">Phase Five</Typography>
          <div className='roadmap-items'>
            <p>Token Development</p>
            <p>Staking Ready to Launch</p>
            <p>Utilities Confirmed</p>
            <p>Merchandise Shipping</p>
            <p>Marketplace V1 Created</p>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          {/* <TimelineDot color="#39DBB2" /> */}
          {/* <TimelineConnector /> */}
        </TimelineSeparator>
        <TimelineContent>
          <Typography className='roadmap-text-head' color="#39DBB2">Phase Six</Typography>
          <div className='roadmap-items'>
            <p>Mint Site Built & Launch</p>
            <p>Sell Out Equilibrium</p>
            <p>First Event Planned</p>
            <p>Roadmap V2 Created</p>
          </div>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
