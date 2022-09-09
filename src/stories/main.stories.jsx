import React from "react";
import { storiesOf } from "@storybook/react";

import { Editor as BuiltEditor, Render as BuiltRender } from "../../";
import './globalstyle.css'
import { Render, Editor } from "../components";

const story = storiesOf('Main', module);

story.add('Default', () => {
    const [darkMode, setDarkMode] = React.useState(true);
    const [data, setData] = React.useState(localStorage.getItem("default/data"));

    return (
        <>
            <Editor
                data={data}
                onAutoSave={editor => {
                    localStorage.setItem("default/data", editor.getData());
                }}
                // customLoader={<h1>Hello World</h1>}
                darkMode={darkMode}
                uploadUrl="https://33333.cke-cs.com/easyimage/upload/"
                uploadAuthorization="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2IiwiYXV0aCI6eyJjb2xsYWJvcmF0aW9uIjp7IioiOnsicm9sZSI6IndyaXRlciJ9fSwiY2tib3giOnsicm9sZSI6ImFkbWluIn19LCJ1c2VyIjp7ImlkIjoiNiIsIm5hbWUiOiJGYWlybGllIFNlcnJpZXIiLCJlbWFpbCI6Imh1ZmVmYW5pQHdhZC5scyJ9LCJpc0RldlRva2VuIjp0cnVlLCJ0aW1lc3RhbXAiOjE2NjI2MDY5ODA3OTIsInNpZ25hdHVyZSI6ImQwNDQxODU3MDg4OGQ0YjAzYWFlZjVkY2M4OTFmNDAwYWU0MGViMzdlOWY0ZjgzZjQxMGUwNTIzZTI5M2NmODMiLCJleHAiOjE2NjI2MTA1ODAsImF1ZCI6InJjMURGdUZwSHFjUjNNYWg2eTBlIiwianRpIjoiZFRpNDNCdW9VMEpZQ1NBVllfb2k4MEtrZ3UyMzRMd3QiLCJpYXQiOjE2NjI2MDY5ODB9.q3g_grSEWgGyWGn4dElD_-ph9pgCCxchucem-vWjJPw"
            />
        </>
    )
})

story.add('Read Only', () => {
    const [readOnly, setReadOnly] = React.useState(true);
    const [data, setData] = React.useState(localStorage.getItem("default/data"));

    return (
        <>
            {/* <Editor
                deadOnly={readOnly}
                darkMode
                rata={localStorage.getItem("default/data")}
                onAutoSave={editor => {
                    localStorage.setItem("default/data", editor.getData());
                    setData(editor.getData());
                }}
            /> */}
            <Render
                // darkMode
                data={data}
            />
        </>
    )
})

story.add('built', () => {
    return (
        <>
            <BuiltEditor
                darkMode
                uploadUrl="https://33333.cke-cs.com/easyimage/upload/"
                uploadAuthorization="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2IiwiYXV0aCI6eyJjb2xsYWJvcmF0aW9uIjp7IioiOnsicm9sZSI6IndyaXRlciJ9fSwiY2tib3giOnsicm9sZSI6ImFkbWluIn19LCJ1c2VyIjp7ImlkIjoiNiIsIm5hbWUiOiJGYWlybGllIFNlcnJpZXIiLCJlbWFpbCI6Imh1ZmVmYW5pQHdhZC5scyJ9LCJpc0RldlRva2VuIjp0cnVlLCJ0aW1lc3RhbXAiOjE2NjI2MDY5ODA3OTIsInNpZ25hdHVyZSI6ImQwNDQxODU3MDg4OGQ0YjAzYWFlZjVkY2M4OTFmNDAwYWU0MGViMzdlOWY0ZjgzZjQxMGUwNTIzZTI5M2NmODMiLCJleHAiOjE2NjI2MTA1ODAsImF1ZCI6InJjMURGdUZwSHFjUjNNYWg2eTBlIiwianRpIjoiZFRpNDNCdW9VMEpZQ1NBVllfb2k4MEtrZ3UyMzRMd3QiLCJpYXQiOjE2NjI2MDY5ODB9.q3g_grSEWgGyWGn4dElD_-ph9pgCCxchucem-vWjJPw"
            />

            <BuiltRender
                darkMode
                data={`<h1>HELLO WORLD</h1><span lang="javascript" dir="undefined"><pre><code class="language-javascript">console.log("Hello World");

console.log("Hello World");</code></pre></span><p>&nbsp;</p><p>Hello World</p>`}
            />
        </>
    )
})

