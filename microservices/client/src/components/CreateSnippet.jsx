import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CreateComment from './CreateComment';

const CreateSnippet = () => {
    const [title, setTitle] = useState("");
    const [code, setCode] = useState("");
    const [snippets, setSnippets] = useState({});

    const createSnippet = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8000/api/v1/snippet", { title, code });
            console.log(res);
        }
        catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        const fetchSnippet = async () => {
            try {
                const res = await axios.get("http://localhost:8002/snippets");
                console.log(res.data);
                setSnippets(res.data);
            }
            catch (e) {
                console.log("error while fetcing snippet", e)
            }
        }

        fetchSnippet();
    }, [])

    return (
        <div className="max-w-4xl mx-auto p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-md mt-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-3 border-gray-200">Create New Snippet</h2>

            <form className="space-y-6" onSubmit={createSnippet}>
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter snippet title"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white shadow-sm"
                    />
                </div>

                <div>
                    <label htmlFor="snippet" className="block text-sm font-medium text-gray-700 mb-1">
                        Code Snippet
                    </label>
                    <textarea
                        id="snippet"
                        placeholder="Write your code snippet here"
                        rows="8"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white shadow-sm"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 font-medium shadow-sm"
                >
                    Save Snippet
                </button>
            </form>

            {Object.values(snippets).length > 0 && (
                <div className="mt-10 space-y-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2 border-gray-200">Your Snippets</h3>
                    {Object.values(snippets).map((snippet, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
                            <h1 className="text-lg font-medium text-blue-700 mb-2">{snippet.title}</h1>
                            <div className="bg-gray-50 p-3 rounded border border-gray-200 font-mono text-sm overflow-x-auto">
                                <pre className="whitespace-pre-wrap break-words">{snippet.code}</pre>
                            </div>
                            <CreateComment snippet={snippet}></CreateComment>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default CreateSnippet;