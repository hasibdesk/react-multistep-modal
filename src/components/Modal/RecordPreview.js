import React, { Component } from "react";
import VideoRecorder from "react-video-recorder";
export default class RecordPreview extends Component {
  state = { videoBlob: "", good: false };
  componentDidMount = () => this.props.modalHeader("Preview Your Video");

  continue = e => {
    e.preventDefault();
    this.props.handleVideo(this.state.videoBlob);
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
              <VideoRecorder
                isOnInitially
                showReplayControls
                replayVideoAutoplayAndLoopOff
                isReplayVideoInitiallyMuted={false}
                onRecordingComplete={videoBlob => {
                  this.setState({ good: true });
                  this.setState({ videoBlob: videoBlob });
                  this.setState({ recodeIsOpen: false, isRecode: false });
                }}
              />
            </div>
          </div>
        </div>
        <div className="nextPrevBtn">
          {this.state.good === true ? (
            <button className="next btn btn-blue-dark" onClick={this.continue}>
              Use this video
            </button>
          ) : null}
        </div>
      </div>
    );
  }
}
