import React, { Component } from "react";
import "antd/dist/antd.css";
import { Upload, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import copy from "../../assets/images/copy.svg";

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
export default class VideoDetail extends Component {
  state = {
    previewVisible: false,
    previewImage: "",
    fileList: []
  };
  componentDidMount = () => this.props.modalHeader("Provide Video Detail");
  handleSubmit = e => console.log(this.props.values);
  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true
    });
  };
  handleChange = ({ fileList }) => this.setState({ fileList });

  render() {
    const { values, handleChange } = this.props;
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <PlusOutlined />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div className="uploadForm">
        <div className="uploadMainContent">
          <div className="tabbedStepForm">
            <div className="first_step">
              <div className="row">
                <div className="col-md-8 order-last">
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
                  <div className="clearfix">
                    <Upload
                      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                      listType="picture-card"
                      fileList={fileList}
                      onPreview={this.handlePreview}
                      onChange={this.handleChange}
                    >
                      {fileList.length >= 8 ? null : uploadButton}
                    </Upload>
                    <Modal
                      visible={previewVisible}
                      footer={null}
                      onCancel={this.handleCancel}
                    >
                      <img
                        alt="example"
                        style={{ width: "100%" }}
                        src={previewImage}
                      />
                    </Modal>
                  </div>
                </div>
                <div className="col-md-4 order-first">
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
