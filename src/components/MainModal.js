import React, { Component, Fragment } from 'react';
import { Modal } from 'react-bootstrap';
import RecordVideo from './Modal/RecordVideo';
import RecordPreview from './Modal/RecordPreview';
import VideoDetail from './Modal/VideoDetail';

export class MainModal extends Component {
  state = { step: 1, modalHeader: '', title: '', description: '' };

  // Process to Next Step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };
  // Back to Previous Step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };
  modalHeader = title => {
    this.setState({
      modalHeader: title
    });
  };
  // Handle input fields changes
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { title, description } = this.state;
    const values = { title, description };

    switch (step) {
      case 1:
        return (
          <Fragment>
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">{this.state.modalHeader}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <RecordVideo modalHeader={title => this.modalHeader(title)} nextStep={this.nextStep} />
            </Modal.Body>
          </Fragment>
        );
      case 2:
        return (
          <Fragment>
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">{this.state.modalHeader}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <RecordPreview modalHeader={title => this.modalHeader(title)} nextStep={this.nextStep} prevStep={this.prevStep} />;
            </Modal.Body>
          </Fragment>
        );
      case 3:
        return (
          <Fragment>
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">{this.state.modalHeader}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <VideoDetail handleChange={this.handleChange} values={values} modalHeader={title => this.modalHeader(title)} />;
            </Modal.Body>
          </Fragment>
        );
      default:
        return (
          <Fragment>
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">{this.state.modalHeader}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <RecordVideo modalHeader={title => this.modalHeader(title)} nextStep={this.nextStep} />
            </Modal.Body>
          </Fragment>
        );
    }
  }
}

export default MainModal;
