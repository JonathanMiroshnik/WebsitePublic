import React, { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';

import '../App.css';

function LLMConvo({}) {
    // Markdown text box
    const [value, setValue] = React.useState("**Hello world!!!**");

    // Working with the LLM
    const [data, setData] = useState(null); // To store the output
    const [loading, setLoading] = useState(false); // For the loading state
    const [error, setError] = useState(null); // To store any errors
    const [input, setInput] = useState(''); // To store the user input

    const fetchData = async () => {
        setLoading(true); // Start loading
        setError(null); // Reset error state
        setData(null); // Clear old data
        try {
            const response = await fetch(`/api/get-output?input=${encodeURIComponent(input)}`); // Call your API with input
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json(); // Parse the JSON response
            setData(result.output); // Update the state with new data
        } catch (err) {
            console.error("Error fetching data:", err);
            setError(err.message); // Save the error
        } finally {
            setLoading(false); // Stop loading
        }
    };

    // {data && <p value={data}></p>}

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <div>
                {loading && <p>Loading...</p>}
                {error && <p style={{ color: 'red' }}>Error: {error}</p>}
                {data && <> <MDEditor.Markdown source={data} style={{ whiteSpace: 'pre-wrap' }} > </MDEditor.Markdown></>}
            </div>
            <div>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter your input"
                    style={{ marginBottom: '10px', padding: '5px', width: '200px' }}
                />
            </div>
            <button onClick={fetchData} disabled={loading || !input.trim()}>
                {loading ? "Fetching..." : "Fetch Data"}
            </button>
        </div>
    );
}

export default LLMConvo;