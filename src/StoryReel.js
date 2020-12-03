import React from 'react';
import Story from './Story';
import "./StoryReel.css";

function StoryReel() {
    return (
        <div className='storyReel'>
          <Story
           image="https://i.redd.it/l5zg5i41s5t41.jpg"
           profileSrc="https://d1qxviojg2h5lt.cloudfront.net/images/01E6ZP2XMPJ1AW1W5T01GYC905/tonydalton400.png"
           title="Tony Dalton"
           />

          <Story
           image="https://api.time.com/wp-content/uploads/2020/05/TIM200525_DOM.Cover_.jpg"
           profileSrc="https://www.gstatic.com/tv/thumb/persons/535486/535486_v9_bb.jpg"
           title="Michael Mando"
           />

          <Story
           image="https://f.hubspotusercontent20.net/hubfs/519224/Images/Christina%20Termini/100%20inspiring%20HispanicLatinx%20scientists%20in%20America/100-inspiring-hispanic-latinx-scientists-in-america-featured.jpg"
           profileSrc="https://www.gstatic.com/tv/thumb/persons/156283/156283_v9_bb.jpg"
           title="Patrick Fabian"
           />

          <Story
           image="https://cdn.theatlantic.com/thumbor/_vm6yoYcEx7gZP89KjekKj2yZUI=/0x701:5000x3571/1920x1102/media/img/2020/07/28/h_15386724/original.jpg"
           profileSrc="https://www.gstatic.com/tv/thumb/persons/273268/273268_v9_ba.jpg"
           title="Rhea Seehorn"
           />

          <Story
           image="https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2018/07/06/105315116-1530895669989gettyimages-485635150.720x405.jpg"
           profileSrc="https://m.media-amazon.com/images/M/MV5BOWM5MDJjYTItMTRkNC00NTQ4LThkNjUtNDY3Mzk0YWMwMTBhXkEyXkFqcGdeQXVyNzQzNDYwMA@@._V1_.jpg"
           title="Bob Odenkirk"
           />

        </div>
    )
}

export default StoryReel
