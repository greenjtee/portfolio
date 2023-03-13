import marathon_photo from '../images/half-marathon.JPG'

export default function Home() {
   return (
      <div className="home">
         <div className="home-left">
            <div className="home-text">
               I am a Senior studying Computer Engineering.
               My expertise is in <strong>software develoment</strong> and <strong>embedded systems</strong>.
               Some of my hobbies outside of class are:
               <ul>
                  <li>Running</li>
                  <li>Lifting</li>
                  <li>Video games (Rocket League)</li>
                  <li>Server administration</li>
               </ul>
            </div>
            <div className="home-images">
               <div className="home-image-text">
                  <img alt="Texas Independence Relay - Come and Take It" className="home-image" src="https://lonestarrelays.com/wp-content/uploads/2021/04/TIR_Logo_MHLightOnDark-1-1-2048x2015.png"></img>
                  <h4>My favorite race</h4>
               </div>
               <div className="home-image-text">
                  <img alt="Rocket League shield" className="home-image" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Frocketleague%2Fimages%2F6%2F64%2FRocket_League_shield_(blue).png%2Frevision%2Flatest%3Fcb%3D20170617140228&f=1&nofb=1&ipt=69a1b4f3c22013bd72eb21fb4c6d2bb8f49be2e9b18e4f950291925e784c5620&ipo=images"></img>
                  <h4>Rocket League</h4>
               </div>
               <div className="home-image-text">
                  <img style={{"width": "120px", "padding": "8px"}} alt="Visual studio code logo" className="home-image-no-line" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fuser-images.githubusercontent.com%2F674621%2F71187801-14e60a80-2280-11ea-94c9-e56576f76baf.png&f=1&nofb=1&ipt=be92305ee18db7706e4b38de96dd20002783fd2b3dd8646ba28f8868bb530e62&ipo=images"></img>
                  <img style={{"width": "40px", "padding": "8px"}} alt="Plus sign" className="home-image-no-line" src="https://caravel-harness.readthedocs.io/en/latest/_images/plus.png"></img>
                  <img style={{"width": "120px", "padding": "8px"}} alt="VIM Logo" className="home-image" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freebiesupply.com%2Flogos%2Flarge%2F2x%2Fvim-logo-png-transparent.png&f=1&nofb=1&ipt=3e7517650913b3da0d11df9bbb229ba01c348ee691cedfe5d0498c72e16830b5&ipo=images"></img>
                  <h4>Visual Studio Code + Vim, my editing setup</h4>
               </div>
            </div>
         </div>
         <div className="home-right">
            <img alt="Aerial view of marathon runners" className="home-half-image" src={marathon_photo}></img>
            <h4 style={{ "paddingLeft": "60px" }}>My first half-marathon, I promise I am in this picture somewhere...</h4>
         </div>
      </div>
   );
}
