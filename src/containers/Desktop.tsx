import React, { useEffect, useState } from 'react';
import trashIcon from '../assets/icons/trash-svgrepo-com.svg';
import aboutIcon from '../assets/icons/information-info-svgrepo-com.svg';
import notepadIcon from '../assets/icons/notepad-notebook-svgrepo-com.svg';
import paintIcon from '../assets/icons/paint-palette-svgrepo-com.svg';
import Notepad from './notepad/Notepad';

export default function Desktop() {
    const getCurrentDateObject = () => {
        const currentDate = new Date();
        const currentTime = currentDate.toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit' });
        const currentDay = currentDate.toLocaleDateString([ 'en-GB' ]);

        return {
            time: currentTime,
            day: currentDay
        };
    };

    const [ date, _setDate ] = useState(getCurrentDateObject());

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
                <div id="about" className="desktop-item w-50 mx-10 mt-5 h-100 text-center float-left">
                    <div className="desktop-item-icon flex w-45 h-45 justify-center items-center">
                        <img className="desktop-item-icon-svg max-w-45 max-h-45" src={aboutIcon}/>
                    </div>
                    <span className="desktop-item-icon-label max-w-110 inline-block font-bold text-white text-[14px] mt-2 p-1 drop-shadow rounded">About</span>
                </div>
            </div>
            <div className="content absolute bg-white/[0.8] shadow rounded-lg top-0 left-0 bottom-0 right-0 m-auto z-40 h-content w-content top-0 overflow-hidden flex items-center justify-center">
                <Notepad/>
            </div>
        </div>

        <div className="taskbar fixed h-50 w-full bottom-0 z-50 bg-slate-200/[0.8] flex justify-between overflow-hidden shadow">
            <div className="taskbar-icons w-full justify-center flex">
                <div id="notepad" className="taskbar-item w-45 h-45 float-left p-2 mx-2 overflow-hidden">
                    <div className="taskbar-item-icon rounded h-35">
                        <img className="taskbar-item-icon-svg w-full h-full" src={notepadIcon}/>
                    </div>
                </div>
                <div id="paint" className="taskbar-item w-45 h-45 float-left p-2 mx-2 overflow-hidden">
                    <div className="taskbar-item-icon rounded h-35">
                        <img className="taskbar-item-icon-svg w-full h-full" src={paintIcon}/>
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
