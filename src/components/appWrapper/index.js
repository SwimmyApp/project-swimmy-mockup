import React from 'react';
import styles from './style.css';

class AppWrapper extends React.Component {
  goBack() {
    window.history.back()
  }
  render () {
    const { backButton, children, title} = this.props
    return (
      <div className={styles.container}>
        <header>
          {backButton ? <button onClick={this.goBack.bind(this)}>back</button> : ''}
          <h1 className={styles.titleText}>{title}</h1>
        </header>
        {children}
      </div>
    )
  }
};

const { bool, node, string } = React.PropTypes

AppWrapper.propTypes = {
  children: node,
  title: string,
  backButton: bool
};

AppWrapper.defaultProps = {
  backButton: false
}
export default AppWrapper;
