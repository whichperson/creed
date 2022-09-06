import React, { useEffect, useState } from 'react';
import trashIcon from '../assets/icons/trash-svgrepo-com.svg';
import aboutIcon from '../assets/icons/information-info-svgrepo-com.svg';
import notepadIcon from '../assets/icons/notepad-notebook-svgrepo-com.svg';
import paintIcon from '../assets/icons/paint-palette-svgrepo-com.svg';
import Notepad from './notepad/Notepad';
import About from './about/About';


const getCurrentDateObject = () => {
    const currentDate = new Date();
    const currentTime = currentDate.toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit' });
    const currentDay = currentDate.toLocaleDateString([ 'en-GB' ]);

    return {
        time: currentTime,
        day: currentDay
    };
};

export default function Desktop() {
    const [ date, _setDate ] = useState(getCurrentDateObject());
    const [ openWindow, _setOpenWindow ] = useState(null);

    const onWindowOpen = (id, ev) => {
        ev.stopPropagation();
        ev.preventDefault();

        _setOpenWindow(id);
    };

    const onWindowClose = (ev) => {
        ev.stopPropagation();
        ev.preventDefault();

        _setOpenWindow(null);
    };

    useEffect(() => {
        setInterval(() => {
            return _setDate(getCurrentDateObject());
        }, 3000);
    }, []);


    return <div id="desktop" className="overflow-hidden h-full">
        <div id="background" className="h-desktop">
            <div className="desktop-icons flex flex-col">
                <div id="trash" className="desktop-item w-50 mx-10 mt-10 h-100 text-center float-left">
                    <div className="desktop-item-icon flex w-45 h-45 justify-center items-center">
                        <img className="desktop-item-icon-svg max-w-45 max-h-45" src={trashIcon}/>
                    </div>
                    <span className="desktop-item-icon-label max-w-110 inline-block font-bold text-white text-[14px] mt-2 p-1 drop-shadow rounded">Trash</span>
                </div>
                <div id="about" className="desktop-item w-50 mx-10 mt-5 h-100 text-center float-left" onClick={(ev) => {
                    return onWindowOpen(2, ev);
                }}>
                    <div className="desktop-item-icon flex w-45 h-45 justify-center items-center">
                        <img className="desktop-item-icon-svg max-w-45 max-h-45" src={aboutIcon}/>
                    </div>
                    <span className="desktop-item-icon-label max-w-110 inline-block font-bold text-white text-[14px] mt-2 p-1 drop-shadow rounded">About</span>
                </div>
            </div>
            {openWindow === 2 && <div className="content absolute bg-white/[0.8] shadow rounded-lg top-0 left-0 bottom-0 right-0 m-auto z-40 h-content w-content top-0 overflow-hidden flex items-center justify-center">
                <About onWindowClose={onWindowClose}/>
            </div>}
            {openWindow === 3 && <div className="content absolute bg-white/[0.8] shadow rounded-lg top-0 left-0 bottom-0 right-0 m-auto z-40 h-content w-content top-0 overflow-hidden flex items-center justify-center">
                <Notepad onWindowClose={onWindowClose}/>
            </div>}
        </div>

        <div id="taskbar" className="fixed h-50 w-full bottom-0 z-50 bg-slate-200/[0.8] flex justify-between overflow-hidden shadow">
            <div className="taskbar-icons w-full justify-center items-center flex">
                <div id="notepad" className={`${openWindow === 3 && 'bg-white/[0.4]'} taskbar-item rounded w-40 h-40 float-left mx-2 overflow-hidden flex items-center justify-center`} onClick={(ev) => {
                    return onWindowOpen(3, ev);
                }}>
                    <div className="taskbar-item-icon h-35">
                        {openWindow !== 3 && <div className="inline-flex shadow items-center justify-center absolute bg-red-500 h-15 w-15 top-2 rounded-full text-xs text-white font-bold">1</div>}
                        <img className="taskbar-item-icon-svg h-full p-1" src={notepadIcon}/>
                    </div>
                </div>
                <div id="notepad" className="taskbar-item rounded w-40 h-40 float-left mx-2 overflow-hidden flex items-center justify-center">
                    <div className="taskbar-item-icon h-35">
                        <img className="taskbar-item-icon-svg h-full p-1" src={paintIcon}/>
                    </div>
                </div>
            </div>

            <div className="taskbar-time flex flex-col text-center float-right justify-center items-center">
                <div>
                    <span className="text-[13px] p-3">{date.time}</span>
                </div>
                <div>
                    <span className="text-[13px] p-3">{date.day}</span>
                </div>
            </div>
        </div>
    </div>;
}
