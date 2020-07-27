/* eslint-disable react/jsx-no-bind */
/* eslint-disable prefer-const */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.mounted = true;
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick, false);
    document.addEventListener('touchend', this.handleDocumentClick, false);
  }

  componentWillUnmount() {
    this.mounted = false;
    document.removeEventListener('click', this.handleDocumentClick, false);
    document.removeEventListener('touchend', this.handleDocumentClick, false);
  }

  handleMouseDown(event) {
    if (this.props.onFocus && typeof this.props.onFocus === 'function') {
      this.props.onFocus(this.state.isOpen);
    }
    if (event.type === 'mousedown' && event.button !== 0) return;
    // event.stopPropagation();
    // event.preventDefault();

    if (!this.props.disabled) {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }

  parseValue(value, options) {
    let option;
    if (typeof value === 'string') {
      for (var i = 0, num = options.length; i < num; i++) {
        if (options[i].type === 'group') {
          const match = options[i].items.filter((item) => item.value === value);
          if (match.length) {
            option = match[0];
          }
        } else if (
          typeof options[i].value !== 'undefined' &&
          options[i].value === value
        ) {
          option = options[i];
        }
      }
    }

    return option || value;
  }

  setValue(value, label) {
    let newState = {
      isOpen: false
    };
    this.setState(newState);
  }

  handleDocumentClick(event) {
    if (this.mounted) {
      if (!ReactDOM.findDOMNode(this).contains(event.target)) {
        if (this.state.isOpen) {
          this.setState({ isOpen: false });
        }
      }
    }
  }

  render() {
    const {
      baseClassName,
      controlClassName,
      placeholderClassName,
      menuClassName,
      arrowClassName,
      arrowClosed,
      arrowOpen,
      className,
      children
    } = this.props;

    const disabledClass = this.props.disabled ? 'Dropdown-disabled' : '';

    const dropdownClass = classNames({
      [`${baseClassName}-root`]: true,
      [className]: !!className,
      'is-open': this.state.isOpen
    });
    const controlClass = classNames({
      [`${baseClassName}-control`]: true,
      [controlClassName]: !!controlClassName,
      [disabledClass]: !!disabledClass
    });
    const placeholderClass = classNames({
      [`${baseClassName}-placeholder`]: true,
      [placeholderClassName]: !!placeholderClassName
    });
    const menuClass = classNames({
      [`${baseClassName}-menu`]: true,
      [menuClassName]: !!menuClassName
    });
    const arrowClass = classNames({
      [`${baseClassName}-arrow`]: true,
      [arrowClassName]: !!arrowClassName
    });

    const value = <div className={placeholderClass}>{this.props.title}</div>;
    const menu = this.state.isOpen ? (
      <div
        className={menuClass}
        aria-expanded='true'
        onClick={() => {
          this.setState({ isOpen: false });
        }}
      >
        {children}
      </div>
    ) : null;

    return (
      <div className={dropdownClass}>
        <div
          className={controlClass}
          onMouseDown={this.handleMouseDown.bind(this)}
          onTouchEnd={this.handleMouseDown.bind(this)}
          aria-haspopup='listbox'
        >
          {value}
          <div className={`${baseClassName}-arrow-wrapper`}>
            {arrowOpen && arrowClosed ? (
              this.state.isOpen ? (
                arrowOpen
              ) : (
                arrowClosed
              )
            ) : (
              <span className={arrowClass} />
            )}
          </div>
        </div>
        {menu}
      </div>
    );
  }
}

Dropdown.defaultProps = { baseClassName: 'Dropdown' };
export default Dropdown;
