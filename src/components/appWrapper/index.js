import React from 'react';
import styles from './appWrapperStyles.scss';
import classNames from 'classnames';

class AppWrapper extends React.Component {
  goBack() {
    window.history.back()
  }
  render () {
    const { backButton, children, title} = this.props
    let backButtonView;

    if (backButton) {
      backButtonView = (
        <button className={styles.backBtn} onClick={this.goBack.bind(this)}>
          <span className={classNames('fa fa-lg fa-angle-left', styles.backArrow)} aria-hidden="true"></span>
          <span className={styles.backText}> Back </span>
        </button>
      );
    }

    return (
      <div className={styles.container}>
        <header>
          { backButtonView }
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
