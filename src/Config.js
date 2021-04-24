function getFileDialog() {
  let fileDialog = document.getElementById("backgroundpick");
  fileDialog.click();
}

function Config() {
  return (
    <div className="App-Config">
      <div id="config-wrapper">
        <div id="picker" class="control-items">
          <p className="Upload-text">Upload the image</p>
          <input id="backgroundpick" type="file" name="" />
          <button
            class="fa fa-upload btn"
            id="btn-upload"
            onClick={getFileDialog}
          >
            <span> POST</span>
          </button>
        </div>

        <div id="picker" class="control-items">
          <button class="fa fa-download btn" id="btn-save">
            <span> SAVE</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Config;
