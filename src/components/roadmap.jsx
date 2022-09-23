// import * as React from 'react';
// import '../styles/roadmap.css';
// import Timeline from '@mui/lab/Timeline';
// import TimelineItem from '@mui/lab/TimelineItem';
// import TimelineSeparator from '@mui/lab/TimelineSeparator';
// import TimelineConnector from '@mui/lab/TimelineConnector';
// import TimelineContent from '@mui/lab/TimelineContent';
// import TimelineDot from '@mui/lab/TimelineDot';

// export default function Roadmap() {
//   return (
//     <Timeline>
//       <TimelineItem>
//         <TimelineSeparator>
//           <TimelineDot color="secondary" />
//           <TimelineConnector />
//         </TimelineSeparator>
//         <TimelineContent>Eat</TimelineContent>
//       </TimelineItem>
//       <TimelineItem>
//         <TimelineSeparator>
//           <TimelineDot color="success" />
//           <TimelineConnector />
//         </TimelineSeparator>
//         <TimelineContent>Code</TimelineContent>
//       </TimelineItem>
//       <TimelineItem>
//         <TimelineSeparator>
//           <TimelineDot color="info" />
//         </TimelineSeparator>
//         <TimelineContent>Sleep</TimelineContent>
//       </TimelineItem>
//     </Timeline>
//   );
// }


import React from 'react';
// import '../js/roadmapjs.js'
import '../styles/roadmap.css';

function Roadmap() {
  return (
    <div className="">
        <section class="timeline">
            <div class="timeline-line">
                <span class="timeline-innerline"></span>
            </div>

            <ul>
                <li>
                <span class="timeline-point"></span>
                <span class="date">2000</span>
                <p>Lorem, ipsum dolor sit jamet</p>
                </li>
                <li>
                <span class="timeline-point"></span>
                <span class="date">2005</span>
                <p>Lorem, ipsum dolor sit amet</p>
                </li>
                <li>
                <span class="timeline-point"></span>
                <span class="date">2010</span>
                <p>Lorem, ipsum dolor sit amet</p>
                </li>
                <li>
                <span class="timeline-point"></span>
                <span class="date">2015</span>
                <p>Lorem, ipsum dolor sit amet</p>
                </li>
                <li>
                <span class="timeline-point"></span>
                <span class="date">2020</span>
                <p>Lorem, ipsum dolor sit amet</p>
                </li>
            </ul>
        </section>
    </div>
  );
}

export default Roadmap;
