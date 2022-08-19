import { FormattedMessage ,injectIntl} from 'react-intl'
import React from 'react'
class classC extends React.Component {
  render() {
    return<div>
      <p>
        <FormattedMessage id="help" />
      </p>
    </div>
  }
}
export default injectIntl(classC)
