import React, { Component } from "react";
import VideoRecorder from "react-video-recorder";

export default class RecordPreview extends Component {
  componentDidMount() {
    this.props.modalHeader("Preview Your Video");
  }
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    return (
      <div className="uploadForm">
        <div className="uploadMainContent">
          <div className="preview_video">
            <div className="preview_video_file">
              <VideoRecorder />
            </div>
          </div>
        </div>
        <div className="nextPrevBtn">
          {/* <button className="btn btn-blue-dark redo" onClick={this.back}>
            Redo
          </button> */}
          <button className="next btn btn-blue-dark" onClick={this.continue}>
            Good
          </button>
        </div>
      </div>
    );
  }
}
