import React, { Component } from "react";
import VideoRecorder from "react-video-recorder";
import { Player } from "video-react";
export default class RecordPreview extends Component {
  state = {
    videoBlob: "",
    recodeIsOpen: false,
    isRecode: false
  };
  componentDidMount() {
    this.props.modalHeader("Preview Your Video");
  }
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
              {this.state.recodeIsOpen !== true ? (
                <VideoRecorder
                  isOnInitially
                  showReplayControls
                  replayVideoAutoplayAndLoopOff
                  isReplayVideoInitiallyMuted={false}
                  onRecordingComplete={videoBlob => {
                    this.setState({ videoBlob: videoBlob });
                    this.setState({ recodeIsOpen: false, isRecode: false });
                  }}
                />
              ) : (
                <div>False</div>
              )}
              {this.state.recodeIsOpen !== true ? (
                <VideoRecorder
                  isOnInitially
                  showReplayControls
                  replayVideoAutoplayAndLoopOff
                  isReplayVideoInitiallyMuted={false}
                  onRecordingComplete={videoBlob => {
                    this.setState({ videoBlob: videoBlob });
                    this.setState({ recodeIsOpen: false, isRecode: false });
                  }}
                />
              ) : (
                <Player>
                  <source src={URL.createObjectURL(this.state.videoBlob)} />
                </Player>
              )}
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
