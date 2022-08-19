// import { useIntl } from 'react-intl'
import { intl } from '../i18n.js'

function CreateSqlTable(props) {
  //   const intl = useIntl()
  const changeLanguage = () => {
    let lang = intl.locale
    lang = lang === 'zh' ? 'en' : 'zh'
    intl.locale = lang
    console.log(intl)
    this.setState({ locale: lang });
  }
  return (
    <div>
      {/* <div onClick={changeLanguage}>点击切换语言</div> */}
      <input placeholder={intl.formatMessage({ id: 'help' })} />
      {intl.formatMessage({ id: 'logout' })}
    </div>
  )
}

export default CreateSqlTable
