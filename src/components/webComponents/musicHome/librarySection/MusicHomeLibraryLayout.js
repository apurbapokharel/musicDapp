// import React, { useRef } from 'react';
// import './MusicHomeMainLayout.css'
// import Sidebar from './Sidebar';
// import Footer from './Footer';
// import LibraryBody from './LibraryBody';

// function TheLibrary(props) {
//     const audio = useRef('audio_tag')

//     return (
//         <div className="player">
//             <audio onChange={(e) => console.log(e)} ref={audio} type="audio/mpeg" preload="auto" src="https://www.google.com/search?rlz=1C1NDCM_enNP832NP832&sxsrf=ALeKk03XvPPYf113HqFOZafOE_qirTGqqg:1599735723044&q=Jubin+Nautiyal+Tum+Hi+Aana&stick=H4sIAAAAAAAAAONgVeLVT9c3NMwwzcs1KbEoMuJKLE3JzFcozs9LP8WIKgfjJ5WZGWUUp-XC-Om5lRV5OYblMH5aRkmhSaFBGpxvGp-RbZJiAecbmaVVWlqWwPnxKSmF6SnGcL5ZZUq6cZkljJ9lZpBkllRlCLevosjCotggC0l_SbJpSskjxitM3AIvf9wTljrFNGnNyWuMh5m4BHzy84tTcyqDUnMSS1JTQvKF9LjYXPNKMksqhVS4BKWgRhqkp6SnVxRoMEjxc6EKCfUwcnEHp5aE5Pvmp2SmVQrVClVzcfqm5ialFhX7pwmFcHE55-fkpCaXZObnCblxKUnJ6SfDBfSLUpPzi1Iy89Ljk3NKi0uAeoB2KHARUKMkEsShn6tvYFKUkwZhmZuklVgxaTAqFRil7Lo07RxbnOC8WQwM01o8HKQ0tYS42D2LffKTE3MEdx6WOfD__3t7LWEujpDEivy8_NxKQQYw-GCvpMZZfPtdg3DwNnvBb_cZF2xtVXaQYFZg0GAw9P_xt_7QVD0HW5BKLYamfSsOsbFwMAow8CxilfIqTcrMU_BLLC3JrEzMUQgpzVXwyFRwTMxLBAApdM_FQgIAAA&sa=X&ved=2ahUKEwjjpob8t97rAhXPwjgGHQ4qAlQQri4wKHoECA0QNg" />
//             <div className="player__body">
//                 <Sidebar />
//                 <LibraryBody />
//             </div>
//             <div className="footer">
//                 <Footer audio={audio}/>
//             </div>
//         </div>
//     )
// }

// export default TheLibrary;









import React from 'react';
import './MusicHomeMainLayout.css'
import Sidebar from './Sidebar';
import LibraryBody from './LibraryBody';
import AudioController from './AudioController';

function TheLibrary(props) {
    return (
        <div className="player">
            <div className="player__body">
                <Sidebar />
                {/* <Body /> */}
                {/* {
                    props.showHome ?
                        <div> <Body /> </div>
                :
                    <div> <Body /> </div>
                } */}
                <LibraryBody />
            </div>
            <div className="footer">
                <AudioController />
            </div>
            
        </div>
    )
}

export default TheLibrary;