import React, { Component } from "react";
import recordimg from "../../assets/images/camera.png";

export default class RecordVideo extends Component {
  componentDidMount = () => this.props.modalHeader("Video Recorder");

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    return (
      <div className="uploadForm">
        <div className="uploadMainContent">
          <div className="fileUploaderWrapper text-center">
            <div className="uploadIcon">
              <img src={recordimg} className="img-fluid" alt="recorder" />
            </div>
            <div className="uploadBTN recordBtn">
              <h4>Click Here To Record</h4>
              <button
                type="button"
                className="btn btn-blue-dark"
                id="fileUpload"
                onClick={this.continue}
              >
                Record
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
