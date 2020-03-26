import React, { Component } from "react";
import copy from "../../assets/images/copy.svg";
import add from "../../assets/images/add.png";
import thumb3 from "../../assets/images/banner.jpg";
export default class VideoDetail extends Component {
  componentDidMount = () => this.props.modalHeader("Provide Video Detail");
  handleSubmit = e => console.log(this.props.values);

  render() {
    const { values, handleChange } = this.props;
    return (
      <div className="uploadForm">
        <div className="uploadMainContent">
          <div className="tabbedStepForm">
            <div className="first_step">
              <div className="row">
                <div className="col-8">
                  <h5>Details</h5>
                  <form>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">
                        Title (required field)
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Add Video Title Here"
                        onChange={handleChange("title")}
                        defaultValue={values.title}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">
                        Descriptions
                      </label>
                      <textarea
                        className="form-control"
                        placeholder="Tell something video descriptions here"
                        onChange={handleChange("description")}
                        defaultValue={values.description}
                      ></textarea>
                    </div>
                  </form>
                  <h5>Thumbnails</h5>
                  <p className="addionalText">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Harum natus omnis optio quo laborum vero soluta dolore,
                    quibusdam, quod officiis veritatis quis quos. Quae assumenda
                    impedit accusantium inventore aliquam enim!{" "}
                    <a href="/">Read More</a>
                  </p>
                  <div className="row videoThumb">
                    <div className="col-4">
                      <div className="video_thumbnail first-image">
                        <img src={add} className="img-fluid" alt="" />
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="video_thumbnail">
                        <img src={thumb3} className="img-fluid" alt="" />
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="video_thumbnail">
                        <img src={thumb3} className="img-fluid" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="right_col">
                    <h6 className="title_right_top">Preview</h6>
                    <div className="preview_col">
                      <div className="preview_col_img">
                        <div className="prevImg">
                          <video
                            controls
                            autoPlay={false}
                            src={URL.createObjectURL(this.props.videoBlob)}
                          />
                        </div>
                      </div>
                      <div className="preview_meta">
                        <h6>Video URL</h6>
                        <p>
                          <a href="/">
                            https://videoly.ly/xydssdlkd
                            <span className="copyIocn">
                              <img src={copy} alt="" />
                            </span>
                          </a>
                        </p>
                        <h6>File Name</h6>
                        <p className="fileName">new_media_file.mp4</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="nextPrevBtn">
              <button
                onClick={this.handleSubmit}
                className="next btn btn-blue-dark"
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
