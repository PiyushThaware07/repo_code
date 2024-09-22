"use client"
// components/CodeEditor.js
import dynamic from 'next/dynamic';

// Dynamically load Monaco with SSR disabled
const MonacoEditor = dynamic(() => import('@monaco-editor/react'), { ssr: false });

const CodeEditor = () => {
    // Define the custom theme with specific color rules for console.log("Hello World")
    const handleEditorWillMount = (monaco) => {
        monaco.editor.defineTheme('customTheme', {
            base: 'vs-dark', // Use the dark theme as the base
            inherit: true,   // Inherit default Monaco styles and override some values
            rules: [
                // { token: 'comment', foreground: '#3b82f6', fontStyle: 'italic' }, // Green for comments, italics for style
                // { token: 'identifier.js', foreground: '#FFFFFF' }, // White for identifiers like 'console'
                // { token: 'delimiter.parenthesis.js', foreground: '#FFFFFF' }, // White for parentheses
                // { token: 'function.js', foreground: '#FFFFFF' }, // Blue for function calls like 'log'
                { token: 'string.js', foreground: '#FFFFFF' }, // Yellow for strings like 'Hello World'
                { token: 'keyword.js', foreground: '#3b82f6' }, // Optional: Orange for keywords
            ],

            // #3b82f6
            colors: {
                'editor.background': '#000000',  // Pure black background
                'editor.foreground': '#FFFFFF',  // White default text
                'editorCursor.foreground': '#FFFFFF',  // White cursor
                'editorLineNumber.foreground': '#555555',  // Gray line numbers
                'editorLineNumber.activeForeground': '#FFFFFF',  // White active line number
                'editor.selectionBackground': '#444444',  // Dark gray for selection
            }
        });
    };



    return (
        <div style={{ height: '300px' }}>
            <MonacoEditor
                height="100%"
                language="javascript"
                beforeMount={handleEditorWillMount}  // Define the custom theme before editor mounts
                theme="customTheme"  // Apply the custom theme
                defaultValue={data}  // Example code
                options={{ readOnly: false }}  // Set editor to editable if needed
            />
        </div>
    );
};

export default CodeEditor;
    const data = `// program to find the factorial of a number

// take input from the user
const number = parseInt(prompt('Enter a positive integer: '));

// checking if number is negative
if (number < 0) {
    console.log('Error! Factorial for negative number does not exist.');
}

// if number is 0
else if (number === 0) {
    console.log("The factorial of is 1.");
}

// if number is positive
else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log("The factorial of");
}`
