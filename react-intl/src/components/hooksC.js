// import { useIntl } from 'react-intl'
import { intl } from '../i18n.js'
function CreateSqlTable(props) {
//   const intl = useIntl()
  return (
    <div>
        <input placeholder={intl.formatMessage({id: 'help'})}
    />
    {intl.formatMessage({id:'logout'})}
        {/* {this.props.intl.formatMessage({id:'help'})} */}
    </div>
    
  )
}

export default CreateSqlTable