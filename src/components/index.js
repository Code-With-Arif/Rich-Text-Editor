import React from 'react'
import EditorConfig from "./editor-toolbar.config";
import MyUploadAdapter from './uploadAdapter';
import { darkStyle, lightStyle, editorDefaultStyles } from './style';
import Prism from "prismjs";
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import "prismjs/plugins/toolbar/prism-toolbar.min.css";
import "prismjs/plugins/toolbar/prism-toolbar.min";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min";
import "./prism.css";
import "./style.css";
import "prismjs/components/prism-markup-templating";

import prismComponents from "prismjs/components";

const languages = [ "plane", ...Object.keys(prismComponents.languages).filter(e => ![
    "meta",
    "django"
].includes(e)).sort()];

Object.keys(prismComponents.languages).forEach(e => {
    try {
        if([
            "meta",
            "django"
        ].includes(e)) return;
        require("prismjs/components/prism-"+e);
    } catch (err) {console.log(err);}
});

export function Editor(props) {
    /*
    props: {
        darkMode,
        styles,
        toolbarStyles,
        editorStyles,
        customRenderStyle: {
            darkStyle,
            lightStyle
        },
        borderColor,
        contentSize: {
            height,
            width,
        },

        data,
        setData,
        uploadUrl,
        uploadAuthorization,
        customLoader,
        codeLanguages,
        mentionFeeds,
        extraPlugins,
        autoSaveWaitingTime,
        onAutoSave,
        onWordCountUpdate,
        onFileUpload,
    }
    */

    const [loaded, setLoaded] = React.useState(false);
    const [cssLoaded, setCssLoaded] = React.useState(false);
    const [editor, setEditor] = React.useState(null);
    const editorRef = React.useRef(null);
    const toolBarRef = React.useRef(null);
    const StyleRef = React.useRef(null);

    function MyCustomUploadAdapterPlugin(editor) {
        editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
            function upload(loader) {
                return new MyUploadAdapter(loader, props.uploadUrl, props.uploadAuthorization);
            }

            if (typeof props.onFileUpload === 'function') {
                return props.onFileUpload(loader, (loader) => {
                    return upload(loader);
                });
            } else {
                return upload(loader);
            }
        };
    }

    React.useEffect(() => {
        const CKEditor = require('./ckeditor');
        const editorElem = editorRef.current;

        const editorConfig = EditorConfig({ ...props, languages: (props.codeLanguages || languages)});

        if (editorElem && editorElem.nodeType && !editor) {
            editorElem.innerHTML = "";

            CKEditor.create(editorElem, {
                licenseKey: '',
                ...editorConfig,
                data: props.data || '',
                extraPlugins: [MyCustomUploadAdapterPlugin, ...editorConfig.extraPlugins],
                autosave: {
                    waitingTime: props.autoSaveWaitingTime || 500,
                    save(editor) {
                        if (typeof props.onAutoSave === 'function') {
                            return props.onAutoSave(editor);
                        }
                    }
                },
                wordCount: {
                    onUpdate: stats => {
                        if (typeof props.onWordCountUpdate === "function") {
                            props.onWordCountUpdate(stats);
                        }
                    }
                },
            }).then(editor => {
                setEditor(editor);
                setLoaded(true);

                toolBarRef.current.appendChild(editor.ui.view.toolbar.element);
                toolBarRef.current.querySelector(".ck-toolbar").classList.add('ck-reset_all');

                editor.setData(props.data || "");

                if (props.setData) {
                    props.setData.current = (data) => {
                        editor.setData(data);
                    }
                }

            }).catch(error => {
                console.error(error);
            });
        }
        // eslint-disable-next-line
    }, [
        editorRef,
        toolBarRef,
        MyCustomUploadAdapterPlugin,
    ]);

    React.useEffect(() => {
        if (StyleRef.current) {
            StyleRef.current.textContent = props.darkMode ?
                (props?.customRenderStyle?.darkStyle || darkStyle) + editorDefaultStyles
                :
                (props?.customRenderStyle?.lightStyle || lightStyle) + editorDefaultStyles;
            document.head.appendChild(StyleRef.current);
            setCssLoaded(true);
        }
        // eslint-disable-next-line
    }, [
        props.darkMode,
        props.customRenderStyle,
        props.customRenderStyle?.lightStyle,
        props.customRenderStyle?.darkStyle,
    ]);

    React.useEffect(() => {
        if (editor !== null && loaded)
            editor.setData(props.data || "");
        // eslint-disable-next-line
    }, [props.data]);

    React.useEffect(() => {
        if (editor && props.setData) {
            props.setData.current = (data) => {
                editor.setData(data);
            }
        }
        // eslint-disable-next-line
    }, [props.setData?.current]);

    React.useEffect(() => {
        console.error("'onAutoSave', 'onWordCountUpdate', 'onFileUpload', 'autoSaveWaitingTime' these methods cannot be updated on runtime.");
    }, [
        props.onAutoSave,
        props.onWordCountUpdate,
        props.onFileUpload,
        props.autoSaveWaitingTime
    ])

    return (
        <div className={'customEditor' + ' ' + props.className || ""} style={{
            width: '100%',
            height: '100%',
            minHeight: '355px',
            position: 'relative',
            overflow: 'hidden',
            ...props.styles
        }}>

            <style data-editor ref={StyleRef}></style>

            {(!editor && !cssLoaded) &&
                <div style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    top: 0,
                    left: 0,
                    zIndex: 999,
                    display: 'grid',
                    placeItems: 'center',
                    backgroundColor: props.darkMode ? 'hsl(270, 1%, 29%)' : 'hsl(0deg 0% 100%)',
                    color: props.darkMode ? 'hsl(0, 0%, 100%)' : 'hsl(0deg 0% 0%)',
                    fontFamily: 'system-ui',
                    textAlign: 'center',
                }}>
                    {props.customLoader ??
                        <h2>
                            Loading...
                            <br />
                            Please Keep Patience
                        </h2>
                    }
                </div>
            }

            <div style={{
                width: '100%',
                height: '41px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'row',
                visibility: (editor && cssLoaded) ? 'visible' : 'hidden'
            }}>
                <div id="toolbar" ref={toolBarRef} style={{
                    width: '100%',
                    height: '100%',
                    ...props.toolbarStyles,
                }}></div>
            </div>

            <div style={{
                position: 'relative',
                width: '100%',
                height: !editor ? '100%' : 'calc(100% - 44px )',
                overflow: 'auto',
                padding: props.contentSize ? "0 10px" : "0 1px",
                visibility: (editor || cssLoaded) ? 'visible' : 'hidden',
                borderRadius: '4px',
                marginTop: '3px',
            }}>
                <div ref={editorRef} style={{
                    position: 'relative',
                    width: props.contentSize?.width ?? '100%',
                    margin: '0 auto',
                    minHeight: props.contentSize?.height ?? '100%',
                    borderColor: props.borderColor || '#707070',
                    border: props.contentSize ? '1px solid !important' : 'none',
                    ...props.editorStyles,
                }} onKeyDown={e => {
                    if (e.key.toLowerCase() === 's' && e.ctrlKey) {
                        e.preventDefault();
                        if (editor) {
                            props.onAutoSave(editor);
                        }
                    }
                }}
                    className="editor ck-restricted-editing_mode_standard ck-blurred ck-content ck ck-editor__editable ck-rounded-corners ck-editor__editable_inline"
                >
                </div>
            </div>

        </div>
    )
}

export const Render = (props) => {

    /*
    props: {
        className,
        darkMode,
        styles,
        editorStyles,
        customRenderStyle: {
            darkStyle,
            lightStyle
        },
        borderColor,
        contentSize: {
            height,
            width,
        },

        data,
        customLoader,
    }
    */

    const [cssLoaded, setCssLoaded] = React.useState(false);
    const editorRef = React.useRef(null);
    const StyleRef = React.useRef(null);

    React.useEffect(() => {
        if (StyleRef.current) {
            StyleRef.current.textContent = props.darkMode ?
                (props?.customRenderStyle?.darkStyle || darkStyle) + editorDefaultStyles
                :
                (props?.customRenderStyle?.lightStyle || lightStyle) + editorDefaultStyles;
            document.head.appendChild(StyleRef.current);
            setCssLoaded(true);
        }
    }, [
        props.darkMode,
        props.customRenderStyle,
        props.customRenderStyle?.lightStyle,
        props.customRenderStyle?.darkStyle,
    ]);

    React.useEffect(() => {
        window.Prism = Prism;
        Prism.highlightAllUnder(editorRef.current);
    });

    return (
        <div className={'customEditor' + ' ' + props.className || ""} style={{
            width: '100%',
            height: '100%',
            minHeight: '355px',
            position: 'relative',
            overflow: 'hidden',
            ...props.styles
        }}>

            <style ref={StyleRef}></style>

            {(!cssLoaded) &&
                <div style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    top: 0,
                    left: 0,
                    zIndex: 999,
                    display: 'grid',
                    placeItems: 'center',
                    backgroundColor: props.darkMode ? 'hsl(270, 1%, 29%)' : 'hsl(0deg 0% 100%)',
                    color: props.darkMode ? 'hsl(0, 0%, 100%)' : 'hsl(0deg 0% 0%)',
                    fontFamily: 'system-ui',
                    textAlign: 'center',
                }}>
                    {props.customLoader ??
                        <h2>
                            Loading...
                            <br />
                            Please Keep Patience
                        </h2>
                    }
                </div>
            }

            <div style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                paddingRight: props.contentSize ? '10px' : '0px',
                paddingLeft: props.contentSize ? '10px' : '0px',
                visibility: (cssLoaded) ? 'visible' : 'hidden',
            }}>
                <div ref={editorRef} style={{
                    position: 'relative',
                    width: props.contentSize?.width ?? '100%',
                    margin: '0 auto',
                    height: '100%',
                    overflow: 'auto',
                    minHeight: props.contentSize?.height ?? '100%',
                    borderColor: props.borderColor || '#707070',
                    border: props.contentSize ? '1px solid !important' : 'none',
                    ...props.editorStyles,
                }}
                    dangerouslySetInnerHTML={{ __html: props.data || "" }}
                    className="editor line-numbers ck-restricted-editing_mode_standard ck-blurred ck-content ck ck-editor__editable ck-rounded-corners ck-editor__editable_inline"
                    data-prismjs-copy="COPY"
                    data-prismjs-copy-error="Failed! Try Ctrl+c"
                    data-prismjs-copy-success="COPIED!"
                >
                </div>
            </div>


        </div>
    )
}
