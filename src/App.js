import React, {useState, useEffect} from 'react';

import Card from './components/Card';
import './App.scss';

function App() {

  const [cardData, setCardData] = useState({picture:'', text:'', title:''})

  useEffect(() => {
    setTimeout(() => {
      setCardData({
        picture:"https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?cs=srgb&dl=white-and-black-mountain-wallpaper-933054.jpg&fm=jpg",
        title:"Big mountains",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo repellendus nulla quam! Repudiandae sapiente, exercitationem quisquam pariatur autem odit iste ipsam officiis tempore nihil doloribus laborum facere rerum nam at."
      })
    }, 2500)
  }, [])

  return (
    <div className="App">
      <Card {...cardData}
      >
      </Card>
    </div>
  );
}

export default App;
