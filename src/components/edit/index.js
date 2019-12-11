import React, { Component, Fragment } from "react";
import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import buttons from "../../config/buttonsConfig";
import '/edit.css';
import PostItem from "../postItem";


class EditList extends Component {
    state = {
      status: "",
      title: this.props.post.title,
      author: this.props.post.author,
      link: this.props.post.author,
      previousDetails: {
        title: this.props.post.title,
        author: this.props.post.author,
        link: this.props.post.author,
      }
    };
    handleEdit = () => this.setState({ status: "edit" });
    handleCancel = () => {
      let { email, phone } = this.state.previousDetails;
      this.setState({ status: "", email, phone });
    };
    handleEmailChange = e => this.setState({ email: e.target.value });
    handlePhoneChange = e => this.setState({ phone: e.target.value });
    render() {
      let activeButtons = buttons.normal;
      let leftButtonHandler = this.handleEdit;
      let rightButtonHandler = this.handleDelete;
      let cardColor = "bg-white";
      if (this.state.status === "edit") {
        cardColor = "bg-primary";
        activeButtons = buttons.edit;
        leftButtonHandler = this.handleSave;
        rightButtonHandler = this.handleCancel;
      }
      return (
        <div className="col-sm-3">
          <div className={`card  ${cardColor}`}>
            <img
              className="card-img-tag center "
              alt={this.props.contact.name}
              src={this.props.contact.picture.thumbnail}
            />
            <div className="card-body">
              <h5 className="card-title ">
                {`${this.props.contact.name.first} ${
                  this.props.contact.name.last
                }`}
              </h5>
              {this.state.status === "edit" ? (
                <Fragment>
                  <p>
                    <input
                      type="text"
                      className="form-control"
                      value={this.state.title}
                      onChange={this.handleTitleChange}
                    />
                  </p>
                  <p>
                    <input
                      type="text"
                      className="form-control"
                      value={this.state.author}
                      onChange={this.handleAuthorChange}
                    />
                  </p>
                  <p>
                    <input
                      type="text"
                      className="form-control"
                      value={this.state.link}
                      onChange={this.handleLinkChange}
                    />
                  </p>
                </Fragment>
              ) : (
                <Fragment>
                  <p>
                    <FontAwesomeIcon icon={["fas", "envelope"]} />
                    <span> {this.props.contact.email}</span>
                  </p>
                  <p>
                    <FontAwesomeIcon icon={["fas", "phone"]} />
                    <span> {this.props.contact.phone} </span>
                  </p>
                </Fragment>
              )}
            </div>
            <div className="card-footer">
              <div
                className="btn-group d-flex btn-group-justified"
                role="group"
                aria-label="..."
              >
                <button
                  type="button"
                  className={"btn w-100 " + activeButtons.leftButtonColor}
                  onClick={leftButtonHandler}
                >
                  {activeButtons.leftButtonVal}
                </button>
                <button
                  type="button"
                  className={"btn w-100 " + activeButtons.rightButtonColor}
                  onClick={rightButtonHandler}
                >
                  {activeButtons.rightButtonVal}
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  export default Post;