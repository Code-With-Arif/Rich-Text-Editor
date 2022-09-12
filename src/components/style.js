export const darkStyle = `

:root {
    /* Overrides the border radius setting in the theme. */
    --ck-border-radius: 4px !important;
  
    /* Overrides the default font size in the theme. */
    --ck-font-size-base: 14px !important;
  
    /* Helper variables to avoid duplication in the colors. */
    --ck-custom-background: hsl(270, 1%, 29%) !important;
    --ck-custom-foreground: hsl(255, 3%, 18%) !important;
    --ck-custom-border: hsl(300, 1%, 22%) !important;
    --ck-custom-white: hsl(0, 0%, 100%) !important;
  
    /* -- Overrides generic colors. ------------------------------------------------------------- */
  
    --ck-color-base-foreground: var(--ck-custom-background) !important;
    --ck-color-focus-border: hsl(208, 90%, 62%) !important;
    --ck-color-text: hsl(0, 0%, 98%) !important;
    --ck-color-shadow-drop: hsla(0, 0%, 0%, 0.2) !important;
    --ck-color-shadow-inner: hsla(0, 0%, 0%, 0.1) !important;
  
    /* -- Overrides the default .ck-button class colors. ---------------------------------------- */
  
    --ck-color-button-default-background: var(--ck-custom-background) !important;
    --ck-color-button-default-hover-background: hsl(270, 1%, 22%) !important;
    --ck-color-button-default-active-background: hsl(270, 2%, 20%) !important;
    --ck-color-button-default-active-shadow: hsl(270, 2%, 23%) !important;
    --ck-color-button-default-disabled-background: var(--ck-custom-background) !important;
  
    --ck-color-button-on-background: var(--ck-custom-foreground) !important;
    --ck-color-button-on-hover-background: hsl(255, 4%, 16%) !important;
    --ck-color-button-on-active-background: hsl(255, 4%, 14%) !important;
    --ck-color-button-on-active-shadow: hsl(240, 3%, 19%) !important;
    --ck-color-button-on-disabled-background: var(--ck-custom-foreground) !important;
  
    --ck-color-button-action-background: hsl(168, 76%, 42%) !important;
    --ck-color-button-action-hover-background: hsl(168, 76%, 38%) !important;
    --ck-color-button-action-active-background: hsl(168, 76%, 36%) !important;
    --ck-color-button-action-active-shadow: hsl(168, 75%, 34%) !important;
    --ck-color-button-action-disabled-background: hsl(168, 76%, 42%) !important;
    --ck-color-button-action-text: var(--ck-custom-white) !important;
  
    --ck-color-button-save: hsl(120, 100%, 46%) !important;
    --ck-color-button-cancel: hsl(15, 100%, 56%) !important;
  
    /* -- Overrides the default .ck-dropdown class colors. -------------------------------------- */
  
    --ck-color-dropdown-panel-background: var(--ck-custom-background) !important;
    --ck-color-dropdown-panel-border: var(--ck-custom-foreground) !important;
  
    /* -- Overrides the default .ck-splitbutton class colors. ----------------------------------- */
  
    --ck-color-split-button-hover-background: var(--ck-color-button-default-hover-background) !important;
    --ck-color-split-button-hover-border: var(--ck-custom-foreground) !important;
  
    /* -- Overrides the default .ck-input class colors. ----------------------------------------- */
  
    --ck-color-input-background: var(--ck-custom-background) !important;
    --ck-color-input-border: hsl(257, 3%, 43%) !important;
    --ck-color-input-text: hsl(0, 0%, 98%) !important;
    --ck-color-input-disabled-background: hsl(255, 4%, 21%) !important;
    --ck-color-input-disabled-border: hsl(250, 3%, 38%) !important;
    --ck-color-input-disabled-text: hsl(0, 0%, 78%) !important;
  
    /* -- Overrides the default .ck-labeled-field-view class colors. ---------------------------- */
  
    --ck-color-labeled-field-label-background: var(--ck-custom-background) !important;
  
    /* -- Overrides the default .ck-list class colors. ------------------------------------------ */
  
    --ck-color-list-background: var(--ck-custom-background) !important;
    --ck-color-list-button-hover-background: var(--ck-color-base-foreground) !important;
    --ck-color-list-button-on-background: var(--ck-color-base-active) !important;
    --ck-color-list-button-on-background-focus: var(--ck-color-base-active-focus) !important;
    --ck-color-list-button-on-text: var(--ck-color-base-background) !important;
  
    /* -- Overrides the default .ck-balloon-panel class colors. --------------------------------- */
  
    --ck-color-panel-background: var(--ck-custom-background) !important;
    --ck-color-panel-border: var(--ck-custom-border) !important;
  
    /* -- Overrides the default .ck-toolbar class colors. --------------------------------------- */
  
    --ck-color-toolbar-background: var(--ck-custom-background) !important;
    --ck-color-toolbar-border: var(--ck-custom-border) !important;
  
    /* -- Overrides the default .ck-tooltip class colors. --------------------------------------- */
  
    --ck-color-tooltip-background: hsl(252, 7%, 14%) !important;
    --ck-color-tooltip-text: hsl(0, 0%, 93%) !important;
  
    /* -- Overrides the default colors used by the ckeditor5-image package. --------------------- */
  
    --ck-color-image-caption-background: hsl(0, 0%, 97%) !important;
    --ck-color-image-caption-text: hsl(0, 0%, 20%) !important;
  
    /* -- Overrides the default colors used by the ckeditor5-widget package. -------------------- */
  
    --ck-color-widget-blurred-border: hsl(0, 0%, 87%) !important;
    --ck-color-widget-hover-border: hsl(43, 100%, 68%) !important;
    --ck-color-widget-editable-focus-background: var(--ck-custom-white) !important;
  
    /* -- Overrides the default colors used by the ckeditor5-link package. ---------------------- */
  
    --ck-color-link-default: hsl(190, 100%, 75%) !important;
}

.customEditor {
    color-scheme: dark;
}

.ck-button {
    cursor: pointer !important
}
.ck-button.ck-disabled {
    cursor: default !important;
}
.ck.ck-button.ck-on, a.ck.ck-button.ck-on {
    color: #70ffe9 !important;
    background-color: hsl(270deg 1% 22%) !important;
}
.ck.ck-list__item .ck-button:hover:not(.ck-disabled) {
    background-color: var(--ck-color-button-default-hover-background) !important
}

`;

export const lightStyle = `

:root {
    /* Overrides the border radius setting in the theme. */
    --ck-border-radius: 4px !important;
  
    /* Overrides the default font size in the theme. */
    --ck-font-size-base: 14px !important;

    /* Helper variables to avoid duplication in the colors. */
    --ck-custom-background: hsl(0deg 0% 100%) !important;
    --ck-custom-foreground: hsla(0, 0%, 78%, .3) !important;
    /* --ck-custom-border: hsl(300, 1%, 22%) !important; */
    --ck-custom-white: hsl(0deg 0% 0%) !important;
}

.customEditor {
    color-scheme: light;
}

.ck-button {
    cursor: pointer !important
}
.ck-button.ck-disabled {
    cursor: default !important;
}
.ck.ck-button.ck-on, a.ck.ck-button.ck-on {
    color: #70ffe9 !important;
}
.ck.ck-list__item .ck-button:hover:not(.ck-disabled) {
    background-color: var(--ck-color-button-default-hover-background) !important
}

.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable) {
    box-shadow: none !important;
}

`;

export const editorDefaultStyles = `
::selection {
    background: #00ffd78f !important;
}
.ck.ck-button:active, .ck.ck-button:focus, a.ck.ck-button:active, a.ck.ck-button:focus {
    border: none !important;
    box-shadow: none !important;
    outline: none !important;
}
.editor {
    background-color: var(--ck-custom-background) !important;
    color: var(--ck-custom-white) !important;
    font-family: system-ui !important;
}
.editor h2, .editor h3, .editor h4 {
    line-height: 2 !important;
}
.editor ul, .editor ol {
    margin-left: 30px !important;
}
.editor ul li, .editor ol li {
    line-height: 1.3 !important;
    font-size: 14px !important;
    font-weight: 500 !important;
}
.editor p {
    line-height: 1.3 !important;
    font-size: 14px !important;
    font-weight: 500 !important;
}
.editor a {
    color: #58a6ff !important;
    text-decoration: none !important;
}
.editor a:hover {
    text-decoration: underline !important;
}
.editor .image img {
    overflow: hidden;
    box-shadow: 0px 0px 10px 0px #000;
    border-radius: 10px;
}
.editor .image:has(figcaption) img {
    border-radius: 10px 10px 0 0;
}
.editor .image > figcaption {
    padding: 0.5em !important;
    box-shadow: 0px 0px 10px 0px #000;
    border-radius: 0 0 10px 10px;
}
.editor span[lang] {
    margin: 4px !important;
    display: flow-root !important;
    border-radius: 8px !important;
    position: relative !important;
}
.editor pre {
    width: auto !important;
    overflow: auto !important;
    white-space: nowrap !important;
    border-radius: 8px !important;
    padding-top: 20px !important;
    border: none !important;
    background-color: hsl(255, 3%, 18%) !important;
    color: hsl(0, 0%, 100%) !important;
}
.editor pre code {
    white-space: pre !important;
}
.editor pre::after {
    content: attr(data-language) !important;
    position: absolute !important;
    top: 1px !important;
    left: 10px !important;
    right: auto !important;
    padding: 1.8px 4.8px !important;
    line-height: 12px !important;
    border-radius: 5px !important;
    font-family: -helvetica, -arial, -tahoma, -verdana, sans-serif !important;
    font-size: 11px !important;
    white-space: nowrap !important;
    text-decoration: none !important;
    text-transform: uppercase !important;
}
.editor .mention {
    background-color: transparent !important;
    position: relative !important;
}
.editor .mention:hover::after {
    content: attr(data-user-email) !important;
    position: absolute !important;
    top: calc(100% + 7px) !important;
    left: 0 !important;
    padding: 5px !important;
    z-index: 9999 !important;
    border-radius: 5px !important;
}
.editor .media {
    max-width: 600px !important;
    margin: 0 auto !important;
}
.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable) {
    border: 1px solid transparent !important;
    box-shadow: none !important;
}
.copy-to-clipboard-button {
    padding: 5px 10px !important;
    cursor: pointer;
}
.code-toolbar {
    display: grid;
}
.ck.ck-editor__editable_inline>:first-child {
    margin-top: 0px !important;
}
.ck.ck-editor__editable_inline>:last-child {
    margin-bottom: 0px !important;
}
`;