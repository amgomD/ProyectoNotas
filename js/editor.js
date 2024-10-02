function enableEditMode(){
    editortext.document.designMode = 'On';
}
document.addEventListener('click', function(event) {
    if ( event.target !== textarea) {
        editortext.document.designMode = 'Off';
    }

    
});
function execCmd(command){
    editortext.document.execCommand(command,false,null);
}
function execCommandWithArg(command,arg){
    editortext.document.execCommand(command,false,arg);
}

