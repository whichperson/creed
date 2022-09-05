import React, { useEffect, useState } from 'react';
import Editor from '@monaco-editor/react';
import notepadIcon from '../../assets/icons/notepad-notebook-svgrepo-com.svg';
import closeIcon from '../../assets/icons/close-line.svg';
import lightbulbIcon from '../../assets/icons/lightbulb-fill.svg';
import { useWebSocketConnector, WebSocketConnector } from '../../websocket/websocketconnector';


export default function Notepad() {
    const { webSocketInstance } = useWebSocketConnector()!;

    const [ employee, _setEmployee ] = useState(webSocketInstance.getEmployee);

    const onEditorChange = (value, event) => {
        // send the socket a message
    };

    useEffect(() => {
        _setEmployee(webSocketInstance.getEmployee);
    }, [ webSocketInstance, webSocketInstance.getEmployee ]);

    return (
        <div id="notepad-editor" className="flex flex-col w-full h-full">
            <div className="notepad-editor-header my-2 flex justify-end items-center">
                <div className="h-30 flex p-4 flex-row items-center w-full">
                    <img src={notepadIcon} className="max-h-20 max-w-20 mr-2"/>
                    <span className="text-[16px]">Today's Thot (www.creedthoughts.gov.www/creedthoughts)</span>
                </div>

                <div className="h-30 p-4 flex items-center">
                    <img src={closeIcon} className="max-h-20 max-w-20"/>
                </div>
            </div>
            <div className="notepad-editor-body bg-white p-2 overflow-auto flex justify-center items-center h-full w-full">
                <Editor
                    height="100%"
                    defaultLanguage="plainText"
                    onChange={onEditorChange}
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
