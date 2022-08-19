import { useIntl } from 'react-intl'
function CreateSqlTable(props) {
  const intl = useIntl()
  return (
    <TextArea  placeholder={intl.formatMessage({id: 'workFlow.qingShuRuSelectChaXunYuJuChaXun'})}
    />
  )
}
