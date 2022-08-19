import { FormattedMessage, injectIntl } from 'react-intl'
import { intl } from '../i18n.js'
import React from 'react'
class classC extends React.Component {
     changeLanguage  () {
        let lang = intl.locale
        lang = lang === 'zh' ? 'en' : 'zh'
        intl.locale = lang
        console.log(intl)
        // this.setState({ locale: lang });
      }
  render() {
    return (
      <div>
      <div onClick={this.changeLanguage}>点击切换语言</div>
        <p>
          <FormattedMessage id="help" />
      {this.props.intl.formatMessage({id:'personalCenter'})}
        </p>
      </div>
    )
  }
}
export default injectIntl(classC)
