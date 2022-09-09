import React from 'react'
import EditorConfig from "./editor-toolbar.config";
import MyUploadAdapter from './uploadAdapter';
import { darkStyle, lightStyle, editorDefaultStyles } from './style';
import { highlightAllUnder } from "prismjs";
import "./prism.css";
import "./style.css";

/**
 * 
 * @param {object} props 
 * @returns 
 */
export default function Editor(props) {
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
        const CKEditor = require('./build/ckeditor');
        const editorElem = editorRef.current;

        const editorConfig = EditorConfig(props);

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
    }, [
        props.darkMode,
        props.customRenderStyle,
        props.customRenderStyle?.lightStyle,
        props.customRenderStyle?.darkStyle,
    ]);

    React.useEffect(() => {
        if (editor !== null && loaded)
            editor.setData(props.data || "");
    }, [props.data]);

    React.useEffect(() => {
        if (editor && props.setData) {
            props.setData.current = (data) => {
                editor.setData(data);
            }
        }
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
        <div className='customEditor' style={{
            width: '100%',
            height: '100%',
            minHeight: '355px',
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '8px',
            ...props.styles
        }}>

            <style ref={StyleRef}></style>

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
                overflow: 'hidden',
                paddingRight: props.contentSize ? '10px' : '0px',
                paddingLeft: props.contentSize ? '10px' : '0px',
                visibility: (editor || cssLoaded) ? 'visible' : 'hidden',
                borderRadius: '4px',
                marginTop: '3px',
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


Editor.Render = (props) => {

    /*
    props: {
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
        highlightAllUnder(editorRef.current);
    });

    return (
        <div className='customEditor' style={{
            width: '100%',
            height: '100%',
            minHeight: '355px',
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '8px',
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
                borderRadius: '4px',
                marginTop: '3px',
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
                    className="editor ck-restricted-editing_mode_standard ck-blurred ck-content ck ck-editor__editable ck-rounded-corners ck-editor__editable_inline"
                >
                </div>
            </div>


        </div>
    )
}
