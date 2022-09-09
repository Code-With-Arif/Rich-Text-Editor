import React from "react";

interface Props {
    darkMode: Boolean;
    styles: React.CSSProperties;
    toolbarStyles: React.CSSProperties;
    editorStyles: React.CSSProperties;
    customRenderStyle: {
        darkStyle: String;
        lightStyle: String;
    };
    borderColor: String;
    contentSize: {
        height: String;
        width: String;
    };

    data: String;
    setData: React.RefObject;
    uploadUrl: String;
    uploadAuthorization: String;
    customLoader: JSX.Element;
    codeLanguages: Array<String>;
    mentionFeeds: Array<{
        marker: String;
        feed: Function;
        itemRenderer: Function;
    }>;
    extraPlugins: Array<any>;
    autoSaveWaitingTime: Number;

    onAutoSave: Function;
    onWordCountUpdate: Function;
    onFileUpload: Function;
}

declare function Editor(props: Props): JSX.Element;

export declare function Render(props: {
    darkMode: Boolean;
    styles: React.CSSProperties;
    editorStyles: React.CSSProperties;
    customRenderStyle: {
        darkStyle: String;
        lightStyle: String;
    };
    borderColor: String;
    contentSize: {
        height: String;
        width: String;
    };
    data: String;
    customLoader: JSX.Element;
}): JSX.Element;

export default Editor;