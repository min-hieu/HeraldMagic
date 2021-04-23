import downloadImg from './assets/download.svg'

function Config() {
    return (
        <div className="App-Config">
            <div id="config-wrapper">
                <div id="picker" class="control-items">
                    <p className="Upload-text">
                        Upload the image
                    </p>
                    <div class="button-wrapper">
                        <span class="label">
                            Upload File
                        </span>
                        <input type="file" name="upload" id="bg-picker" class="upload-box" placeholder="Upload File"/>
                    </div>
                </div>
                
                <div id="picker" class="control-items">
                    <a href="" class="fa fa-download" id="saver"><span> SAVE</span></a>
                </div>
            </div>
        </div>
        
    )
}

export default Config;