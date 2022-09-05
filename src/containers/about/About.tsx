import React from 'react';
import aboutIcon from '../../assets/icons/information-info-svgrepo-com.svg';
import closeIcon from '../../assets/icons/close-line.svg';
import creed from '../../assets/creed_the_office.jpg';

export default function About({ onWindowClose }) {
    return (
        <div id="window-about" className="flex flex-col w-full h-full">
            <div className="notepad-editor-header my-2 flex justify-end items-center">
                <div className="h-30 flex p-4 flex-row items-center w-full">
                    <img src={aboutIcon} className="max-h-20 max-w-20 mr-2"/>
                    <span className="text-[16px]">Who did this?</span>
                </div>

                <div className="h-30 p-4 flex items-center" onClick={onWindowClose}>
                    <img src={closeIcon} className="max-h-20 max-w-20"/>
                </div>
            </div>
            <div className="about-window-body bg-white p-2 overflow-auto flex items-center flex-col h-full w-full">
                <div className="shadow mt-5">
                    <img src={creed} className="rounded-lg h-150 w-150 object-cover h-full w-full"/>
                </div>
                <div className="mt-6 flex flex-col text-center">
                    <span className="text-[24px] font-bold">Welcome to Creed Thots</span>
                    <span>[v1.0.0:alpha]</span>
                </div>
                <div className="mt-6 text-left flex flex-col max-w-800">
                    <span className="text-[18px]">This is a work in progress, made with lots of love. Things right now don't work properly, but I plan to fix and add more features. You can find the project on my Github<a className="font-bold text-blue-500" href="https://github.com/whichperson" target="_blank"> (@whichperson)</a>.</span>
                    <span className="mt-3 italic text-center">(If you'd like to contribute, the easiest way is to make a pull request)</span>
                </div>
            </div>

            <div className="notepad-editor-status my-1 items-center flex">
                <div className="h-25 flex items-center p-2 w-full">
                </div>
            </div>
        </div>
    );
}
