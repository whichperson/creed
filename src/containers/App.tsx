import React from 'react';

export default function App() {
    return (
        <div className="container h-full mx-auto grid place-items-center">
            <div className="w-800 overflow-hidden rounded-lg h-750 bg-white shadow">
                <div className="toolset flex justify-between items-center mx-5 py-3 h-50 border-b border-b-grey-200">
                    <div>
                        <select id="countries"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Choose a country</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>

                    <div>
                        <i className="ri-bold"></i>
                        <i className="ri-italic"></i>
                        <i className="ri-underline"></i>
                    </div>

                    <div>
                        <i className="ri-align-left"></i>
                        <i className="ri-align-center"></i>
                        <i className="ri-align-right"></i>
                    </div>

                    <div>
                        <i className="ri-list-unordered"></i>
                        <i className="ri-list-ordered"></i>
                        <i className="ri-link"></i>
                    </div>
                </div>
                <div className="writer h-full w-full">
                    <input type="text" className="h-full w-full"/>
                </div>
            </div>
        </div>
    );
}
