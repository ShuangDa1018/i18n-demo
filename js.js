import { injectIntl ,FormattedMessage} from 'react-intl'
class ClassComponet extends Reac.Component {
  render() {
    <div>
      {this.props.intl.formatMessage({ id: 'workFlow.sheZhiBianLiang' })}
      <FormattedMessage id="sceneDispatch.changJingTiaoDu" />
    </div>
  }
}
export default injectIntl(classComponet)
