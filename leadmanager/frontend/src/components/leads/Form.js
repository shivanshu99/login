import React, { Component } from 'react';
import axios from 'axios';
import { ProgressBar } from 'react-bootstrap';
import { config } from 'react-transition-group';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import $ from 'jquery';
class Form extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
  };
  state = {
    selectedFile: null,
    uploadPercentage: 0,
  };
  fileSelectedHandler = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
    });
  };
  fileUploadHandler = () => {
    const lead = new FormData();

    lead.append('image', this.state.selectedFile, this.state.selectedFile.name);
    const options = {
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;
        let percent = Math.floor((loaded * 100) / total);
        console.log(`${loaded}kb of ${total}kb | ${percent}%`);

        if (percent < 100) {
          this.setState({ uploadPercentage: percent });
        }
      },
    };
    axios
      .post('/api/leads/', lead, options, config)
      .then((res) => {
        console.log(res);
        this.setState({ selectedFile: res.data.url, uploadPercentage: 100 }, () => {
          setTimeout(() => {
            this.setState({ uploadPercentage: 0 });
          }, 1000);
        });
      })
      .catch((err) => {
        dispatch(returnErrors(err.response.data, err.response.status));
      });
  };

  render() {
    const { uploadPercentage } = this.state;
    const { token } = this.props.auth;
    axios.interceptors.request.use((config) => {
      config.headers.Authorization = `Token ${token}`;
      return config;
    });

    return (
      <div className="App">
        <br></br>
        <h3>Upload images with React</h3>
        <form className="my-3" enctype="multipart/form-data">
          <input type="file" onChange={this.fileSelectedHandler} />
          {uploadPercentage > 0 && (
            <ProgressBar now={uploadPercentage} active label={`${uploadPercentage}%`} />
          )}

          <div>{this.state.token}</div>
          <div className="nav-item my-3">
            <button
              onClick={this.fileUploadHandler}
              className="nav-link btn btn-info btn-sm text-light"
              id="btnShow"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(Form);
