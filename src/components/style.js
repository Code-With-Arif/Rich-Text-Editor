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
.ck.ck-list__item .ck-button:hover:not(.ck-disabled) {
    background-color: var(--ck-color-button-default-hover-background) !important
}

.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable) {
    box-shadow: none !important;
}

`;

export const editorDefaultStyles = `
::selection {
    background: #1db79f !important;
}
.editor {
    background-color: var(--ck-custom-background);
    color: var(--ck-custom-white);
    font-family: system-ui;
}
.editor h2, .editor h3, .editor h4 {
    line-height: 2;
}
.editor ul, .editor ol {
    margin-left: 30px;
}
.editor ul li, .editor ol li {
    line-height: 1.3;
    font-size: 14px;
    font-weight: 500;
}
.editor p {
    line-height: 1.3;
    font-size: 14px;
    font-weight: 500;
}
.editor a {
    color: #58a6ff;
    text-decoration: none;
}
.editor a:hover {
    text-decoration: underline;
}
.editor .image &gt;
figcaption {
    padding: 0.2em;
}
.editor span[lang] {
    margin: 4px;
    display: flow-root;
    border-radius: 8px;
    position: relative;
    background-color: var(--ck-custom-foreground);
    color: var(--ck-custom-white);
}
.editor span[lang] pre {
    width: auto;
    overflow: auto;
    white-space: nowrap;
    border-radius: 8px;
    padding-top: 20px;
    border: none;
    background-color: transparent;
    color: var(--ck-custom-white);
}
.editor span[lang] pre::after {
    display: none;
}
.editor span[lang] pre code {
    white-space: pre;
}
.editor span[lang]::after {
    content: attr(lang);
    position: absolute;
    top: 1px;
    left: 10px;
    padding: 1.8px 4.8px;
    line-height: 12px;
    border-radius: 5px;
    font-family: -helvetica, -arial, -tahoma, -verdana, sans-serif;
    font-size: 11px;
    white-space: nowrap;
    text-decoration: none;
    text-transform: uppercase;
}
.editor .mention {
    background-color: transparent;
    position: relative;
}
.editor .mention:hover::after {
    content: attr(data-user-email);
    position: absolute;
    top: calc(100% + 7px);
    left: 0;
    padding: 5px;
    z-index: 9999;
    border-radius: 5px;
}
.editor .ck-widget.media {
    max-width: 600px;
    margin: 0 auto;
}
.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable) {
    border: 1px solid transparent;
    box-shadow: none;
}
`;