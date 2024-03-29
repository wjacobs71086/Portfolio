import React, { useEffect } from 'react'
import { ParallaxBanner } from 'react-scroll-parallax';
import starBanner from '../newbannerIdea.jpeg'
import bugoutIcon from '../bugout_icon.jpg'
import beerIcon from '../beerIcon.png';
import liveList from '../liveList.png';
import './project.css';
import PracticingImg from '../PracticingImg.png'
import Aos from 'aos';
import 'aos/dist/aos.css';


const Project = () => {
useEffect(() => {
  Aos.init({duration: 1500});
}, [])


return (
      <section id='myWork'>
        <ParallaxBanner
          layers={[
            {
              image: `${starBanner}`,
              amount: .2
            }
          ]}
          style={{ height: '300px' }}
        >
        </ParallaxBanner>
        <section className="my-work-section" > 
          <section data-aos="slide-left" className='piece'>
          <h3 className='section-title'>My Work</h3>
            <img className="project-image" src={bugoutIcon} alt="BugOutReadyApp banner" />
            <div className='content'>
              <h3 className="project-title">BugOut Ready</h3>
              <p className="my-work-body"> Having been born in "tornado alley" and living in "wildfire California" I've always understood
              the need to be ready. Developed with JavaScript using React, Express, Node.js, and PostgresQL, this project in progress is meant to spark ideas on how to be ready to bug out in an emergency situation.</p>
              <div className='links'>
                <a className="link" href="https://github.com/wjacobs71086/Bug-Out-Ready-Client" target="newtab">Client Repo</a>
                <a className="link" href="https://github.com/wjacobs71086/Bug-Out-Ready-Server.git" target="newtab">Server Repo</a>
                <a className="link" href="https://bug-out-ready.vercel.app/" target="newtab">Live Site</a>
              </div>
            </div>
          </section>

          <section data-aos="slide-right" className='piece'>
              <img className="project-image bookmark" src={beerIcon} alt="Beer Me Strength App banner" />
            <div className='content'>
              <h3 className="project-title">Beer Me Strength</h3>
              <p className="my-work-body">This front end project is designed to be a beer journal to track your favorite beers. Developed with React.JS.</p>
              <div className='links'>
                <a className="link" href="https://github.com/wjacobs71086/BeerMeStrength" target="newtab">Client Repo</a>
                <a className="link" href="https://wjacobs71086.github.io/BeerMeStrength/" target="newtab">Live Site</a>
              </div>
            </div>
          </section>

        </section>
      </section>
);
}










// export class Project extends Component {
  
//   render() {
//     return (
//       <section id='myWork'>
//         <ParallaxBanner
          
//           layers={[
//             {
//               image: `${starBanner}`,
//               amount: .2
//             }
//           ]}
//           style={{ height: '300px' }}
//         >
//         </ParallaxBanner>
//         <section className="my-work-section" > 
//           <section className='piece'>
//           <h3 className='section-title'>My Work</h3>
//             <img className="project-image" src={bugoutIcon} alt="BugOutReadyApp banner" />
//             <div className='content'>
//               <h3 className="project-title">BugOut Ready</h3>
//               <p className="my-work-body"> Having been born in "tornado alley" and living in "wildfire California" I've always understood
//               the need to be ready. Developed with JavaScript using React, Express, Node.js, and PostgresQL, this project in progress is meant to spark ideas on how to be ready to bug out in an emergency situation.</p>
//               <div className='links'>
//                 <a className="link" href="https://github.com/wjacobs71086/Bug-Out-Ready-Client" target="newtab">Client Repo</a>
//                 <a className="link" href="https://github.com/wjacobs71086/Bug-Out-Ready-Server.git" target="newtab">Server Repo</a>
//                 <a className="link" href="https://bug-out-ready.wjacobs710.now.sh/" target="newtab">Live Site</a>
//               </div>
//             </div>
//           </section>

//           <section className='piece'>
//             <img className="project-image" src={liveList} alt="LiveListApp banner" />
//             <div className='content'>
//               <h3 className="project-title">Live List</h3>
//               <p className="my-work-body"> A project built with a team to help explore new cities and find spots only known to the locals. This app showcases React.js, SQL, RESTFUL api structures, and GoogleMap integration.</p>
//               <div className='links'>
//                 <a className="link" href="https://github.com/thinkful-ei-heron/SocialPlaylist-Client.git" target="newtab">Client Repo</a>
//                 <a className="link" href="https://github.com/thinkful-ei-heron/SocialPlaylist-server.git" target="newtab">Server Repo</a>
//                 <a className="link" href="https://social-playlist.netlify.com" target="newtab">Live Site</a>
//               </div>
//             </div>
//           </section>

//           <section className='piece'>
//               <img className="project-image bookmark" src={beerIcon} alt="Beer Me Strength App banner" />
//             <div className='content'>
//               <h3 className="project-title">Beer Me Strength</h3>
//               <p className="my-work-body">This front end project is designed to be a beer journal to track your favorite beers. Developed with React.JS.</p>
//               <div className='links'>
//                 <a className="link" href="https://github.com/wjacobs71086/BeerMeStrength" target="newtab">Client Repo</a>
//                 <a className="link" href="https://wjacobs71086.github.io/BeerMeStrength/" target="newtab">Live Site</a>
//               </div>
//             </div>
//           </section>

//           <section className='piece bottom'>
//               <img className="project-image spanish" src={PracticingImg} alt="Learning Spanish banner" />
//             <div className='content'>
//               <h3 className="project-title">Habla Español?</h3>
//               <p className="my-work-body"> This app is a simple memorization practice designed to showcase a knowledge of spaced repetition as a learning algorithm. Developed with a team using React, Linked Lists, PostgresQL, and Node.js.</p>
//               <div className='links'>
//                 <a className="link" href="https://github.com/thinkful-ei-heron/spaced-repetition-client-heesu-wesley-zayar" target="newtab">Client Repo</a>
//                 <a className="link" href="https://github.com/thinkful-ei-heron/spaced-repetition-api-heesu-wesley-zayar.git" target="newtab">Server Repo</a>
//                 <a className="link" href="https://spacedrepetition.now.sh/" target="newtab">Live Site</a>
//               </div>
//             </div>
//           </section>
//         </section>
//       </section>
//     )
//   }
// }

export default Project
