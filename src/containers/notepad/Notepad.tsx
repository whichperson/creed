import React, { useEffect, useState } from 'react';
import Editor from '@monaco-editor/react';
import notepadIcon from '../../assets/icons/notepad-notebook-svgrepo-com.svg';
import closeIcon from '../../assets/icons/close-line.svg';
import lightbulbIcon from '../../assets/icons/lightbulb-fill.svg';
import { useWebSocketConnector } from '../../websocket/websocketconnector';


const AYDAN_MESSAGE = 'Hi, bestie! Long time no see, loca! \nI bet I know what you\'re doing right now. You\'re working. Dios mio, I am truly a bruja.' +
    '\n\nI made this for you. It\'s your very own Creed Thoughts journal. You can write all your thoughts and I\'ll be able to read them even while you\'re typing (thanks, websockets!). No more communication via telepathy. Okay, time for my birthday wish, buckle up.' +
    '\n\nFor your 22nd birthday, I wish you content. Not Youtube content, but satisfaction with your life. You will have everything you want because you have all the means and potential to get where you want to be. I often complain about you being obsessed with The Office when in reality I admire your ability to enjoy even the simplest things in life. You\'re the greatest friend. Always there to support me, even when I build walls so high all my bricks collapse and hit you on the head. I close a door in your face only to open another one and find you right behind it. I am truly lucky to have you in my life.' +
    '\n\nWhen I return, I hope we get to have lots of fun being the standup comedians we are. Keep gaslighting, gatekeeping, girlbossing. And slay every day, queen.' +
    '\n\nYour Friend of 5 Years Who Kept Mispronouncing your Name for 4 of Them | Susan From Friends | Coworker | Wannabe Farmer | Gym Buddy | Trauma Buddy | What else?' +
    '\n\n\n\nP.S. Please send me the measurements for the Schrute poster. It\'s another piece of your birthday puzzle.';

export default function Notepad({ onWindowClose }) {
    const { webSocketInstance } = useWebSocketConnector()!;

    const [ employee, _setEmployee ] = useState(webSocketInstance.getEmployee);
    const [ content, _setContent ] = useState(webSocketInstance.getContent);

    const onEditorChange = (value) => {
        webSocketInstance.sendContent(value);
    };

    useEffect(() => {
        const currentEmployee = webSocketInstance.getEmployee;
        if (currentEmployee != null) {
            _setEmployee(currentEmployee);
        } else {
            setInterval(() => {
                _setEmployee(null);
            }, 15000);
        }
    }, [ webSocketInstance, webSocketInstance.getEmployee ]);

    useEffect(() => {
        const currentContent = webSocketInstance.getContent;
        if (currentContent != null) {
            _setContent(currentContent);
        }
    }, [ webSocketInstance, webSocketInstance.getContent ]);


    return (
        <div id="notepad-editor" className="flex flex-col w-full h-full">
            <div className="notepad-editor-header my-2 flex justify-end items-center">
                <div className="h-30 flex p-4 flex-row items-center w-full">
                    <img src={notepadIcon} className="max-h-20 max-w-20 mr-2"/>
                    <span className="text-[16px]">It's my best friend's birthday! (www.creedthoughts.gov.www/creedthoughts)</span>
                </div>

                <div className="h-30 p-4 flex items-center" onClick={onWindowClose}>
                    <img src={closeIcon} className="max-h-20 max-w-20"/>
                </div>
            </div>
            <div className="notepad-editor-body bg-white p-2 overflow-auto flex justify-center items-center h-full w-full">
                <Editor
                    height="100%"
                    defaultLanguage="plainText"
                    onChange={onEditorChange}
                    defaultValue={AYDAN_MESSAGE}
                    value={content!!}
                    options={{
                        quickSuggestions: false,
                        fontFamily: 'Ubuntu, sans-serif',
                        fontSize: 16,
                        minimap: {
                            enabled: false
                        },
                        lineNumbers: 'off',
                        glyphMargin: false,
                        folding: false,
                        wordWrap: 'on',
                        codeLens: false,
                        lineDecorationsWidth: 0,
                        lineNumbersMinChars: 0,
                        renderLineHighlight: 'none',
                        renderValidationDecorations: 'off',
                        overviewRulerBorder: false
                    }}
                />
            </div>

            <div className="notepad-editor-status my-1 items-center flex">
                <div className="h-25 flex items-center p-2 w-full">
                    {employee &&
                        <><img src={lightbulbIcon} className="max-h-15 max-w-15 mr-2"/>
                            <span className="text-[13px] italic">{employee.name} {employee.surname} joined</span>
                        </>
                    }
                </div>
            </div>
        </div>
    );
}
