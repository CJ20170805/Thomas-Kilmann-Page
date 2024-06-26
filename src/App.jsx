import anime from 'animejs';
import './App.css'
import { useState } from 'react';
import { useEffect } from 'react';
import closeIcon from './assets/close.png';
import a1 from './assets/a1.png';
import a2 from './assets/a2.png';
import a3 from './assets/a3.png';
import a4 from './assets/a4.png';
import a5 from './assets/a5.png';

function App() {

  let [lineAnimationComplete, setLineAnimationComplete] = useState(false);
  let [textAnimationComplete, setTextAnimationComplete] = useState(false);
  let [videoPopupVisible, setVideoPopupVisible] = useState(false);
  let [videoUrl, setVideoUrl] = useState('https://www.youtube.com/embed/2L7jhCyMhLc?si=YxVBtZJjEvCgMdAU');

  useEffect(() => {
    if (lineAnimationComplete) return;

    playLineAnimation();

  }, [])

  function playLineAnimation() {
    anime({
      targets: '.verticalLine',
      keyframes: [
        { height: '0%', opacity: 0 },
        { height: '50%', opacity: 1 },
        { height: '99.5%', opacity: 1 }
      ],
      duration: 3000,
      easing: 'linear',
      loop: false,
      complete: function () {
        anime({
          targets: '.horizontalLine',
          keyframes: [
            { width: '0%', opacity: 0.1 },
            { width: '10%', opacity: 0.8 },
            { width: '20%', opacity: 1 },
            { width: '30%', opacity: 1 },
            { width: '40%', opacity: 1 },
            { width: '50%', opacity: 1 },
            { width: '60%', opacity: 1 },
            { width: '70%', opacity: 1 },
            { width: '80%', opacity: 1 },
            { width: '90%', opacity: 1 },
            { width: '100%', opacity: 1 }
          ],
          duration: 3000,
          easing: 'linear',
          loop: false,
          complete: function () {
            setLineAnimationComplete(true)
          }
        })
      }
    })
  }

  useEffect(() => {
    if (!lineAnimationComplete) return;

    animateLineText()

  }, [lineAnimationComplete])


  function animateLineText() {
    anime({
      targets: '.verticalText',
      left: '-50px',
      opacity: 1,
      duration: 2000,
      easing: 'spring(1, 80, 10, 0)',
    })

    anime({
      targets: '.horizontalText',
      bottom: '12px',
      opacity: 1,
      duration: 2000,
      easing: 'spring(1, 80, 10, 0)',
      complete: function () {
        setTextAnimationComplete(true);
      }
    })

  }

  function showVideo(url) {
    setVideoPopupVisible(true);
    setVideoUrl(url);
    anime({
      targets: '.video-popup',
      opacity: 1,
      duration: 500,
      easing: 'linear',
    })
  }

  function closePopup() {
    setVideoPopupVisible(false);

    anime({
      targets: '.video-popup',
      opacity: 0,
      duration: 500,
      easing: 'linear',
    })
  }

  return (
    <>
      <h1 className='title'>Thomas Kilmann Conflict Management Model</h1>
      <h2 className='lineText verticalText'>ASSERTIVENESS</h2>
      <h2 className='lineText horizontalText'>COOPERATIVENESS</h2>
      <div className="flex-layout">
        <hr className='verticalLine' />
        <div className="mainBox">
          <div className="videoRow">
            <div className="videoElement" onClick={() => showVideo('https://www.youtube.com/embed/RiGMy_nKe5I?si=0QMOi50T6gEqnSYB')}>
              {/* video goes here */}
              <img src={a3} alt="" />
              <h3 className='tit'>Competing Style</h3>
            </div>
            <div className="videoElement" onClick={() => showVideo('https://www.youtube.com/embed/BRrMNdej9VQ?si=KOaE6g8VjsicxUxN')}>
              {/* video goes here */}
              <img src={a4} alt="" />
              <h3 className='tit'>Collaborative Style</h3>
            </div>
          </div>
          <div className="videoRow">
            <div className="videoElement" onClick={() => showVideo('https://www.youtube.com/embed/aTitHXBRmPc?si=mNki9Vd_evRmLGHy')}>
              {/* video goes here */}
              <img src={a2} alt="" />
              <h3 className='tit'>Compromising Style</h3>
            </div>
          </div>
          <div className="videoRow">
            <div className="videoElement" onClick={() => showVideo('https://www.youtube.com/embed/W697UY8hXWM?si=l1Kk1iBjOe_yB09z')}>
              {/* video goes here */}
              <img src={a5} alt="" />
              <h3 className='tit'>Avoiding Style</h3>
            </div>
            <div className="videoElement" onClick={() => showVideo('https://www.youtube.com/embed/v7KH87y5nhA?si=s8VHpt-aT0zyM76B')}>
              {/* video goes here */}
              <img src={a1} alt="" />
              <h3 className='tit'>Accommodating Style</h3>
            </div>
          </div>
        </div>
        <hr className='horizontalLine' />
      </div>

      <div className={`video-popup ${videoPopupVisible ? 'showVideoPopup' : ''}`}>
        <div className="video-popup-inner">
          <div className="video-desc">
            <span></span>
            <img className="close-button" onClick={closePopup} src={closeIcon} alt="" />
          </div>
          <div className="video-popup-content">
            {videoPopupVisible &&
              <iframe src={videoUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
