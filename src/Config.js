import downloadImg from './assets/download.svg'

function Config() {
    return (
        <div className="App-Config">
            <div id="config-wrapper">
                <div id="picker" class="control-items">
                    <p className="Upload-text">
                        Upload the image
                    </p>
                    <button class="fa fa-upload btn" id="btn-upload"><span> POST</span></button>
                </div>
                
                <div id="picker" class="control-items">
                    <button class="fa fa-download btn" id="btn-save"><span> SAVE</span></button>
                </div>
            </div>
        </div>
        
    )
}

export default Config