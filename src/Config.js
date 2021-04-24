function getFileDialog() {
  let fileDialog = document.getElementById("backgroundpick");
  fileDialog.click();
}

function Config() {
  return (
    <div className="App-Config">
      <div id="config-wrapper">
        <p className="Upload-text">Upload the image</p>
        <input id="backgroundpick" type="file" name="" />

        <div id="picker" className="control-items">
          <button
            className="fa fa-upload btn"
            id="btn-upload"
            onClick={getFileDialog}
          >
            <span> Post</span>
          </button>
          <button className="fa fa-download btn" id="btn-save">
            <span> SAVE</span>
          </button>
          <button className="fa fa-plus-circle btn" id="btn-addText">
            <span> Text</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Config;
