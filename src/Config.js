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

function Config(props) {
  return (
    <div className="App-Config">
      <div id="config-wrapper">
        <p className="Upload-text">Upload the image</p>
        <input id="backgroundpick" type="file" name="" />
        <div id="picker" className="control-items">
          <ConfigBtn icon="upload" id="btn-upload" text=" POST" click={getFileDialog} />
          <ConfigBtn icon="download" id="btn-save" text=" SAVE" click='' />
          <ConfigBtn icon="plus-circle" id="btn-addText" text=" TEXT" click='' />
        </div>
        <ColorPicker colorState={props.colorState}/>
      </div>
    </div>
  );
}

export default Config;
