import ColorPicker from "./ColorPicker";

function getFileDialog() {
  let fileDialog = document.getElementById("backgroundpick");
  fileDialog.click();
}

function ConfigBtn(props) {
  const btnClass = "fa fa-" + props.icon + " btn";
  return (
    <button 
      className={btnClass}
      id={props.id}
      onClick={(props.click)? props.click:undefined}
    >
      <span>{props.text}</span>
    </button>
  )
}

function Fonts() {
  return (
    <div className="dropdown">
      <ConfigBtn icon="font dropbtn" id="select-font" text=" font"/>
      <div className="dropdown-content">
        <p className="fontOption" id='pickfont1'>Cheltenham</p>
        <p className="fontOption" id='pickfont2'>Roboto</p>
        <p className="fontOption" id='pickfont3'>Times New Roman</p>
      </div>
    </div>
  )
}

function Config(props) {
  return (
    <div className="App-Config">
      <div id="config-wrapper">
        <p className="Upload-text">Upload the image</p>
        <input id="backgroundpick" type="file" name="" />
        <div id="picker" className="control-items">
          <ConfigBtn icon="upload" id="btn-upload" text=" POST" click={getFileDialog} />
          <ConfigBtn icon="download" id="btn-save" text=" SAVE" />
          <ConfigBtn icon="plus-circle" id="btn-addText" text=" TEXT"/>
        </div>
        <Fonts />
        <ColorPicker colorState={props.colorState}/>
      </div>
    </div>
  );
}

export default Config;
