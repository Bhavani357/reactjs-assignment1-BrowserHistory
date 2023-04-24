import './index.css'

const SearchHistoryItem = props => {
  const {eachItemDetails, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachItemDetails
  const onDeleteItem = () => {
    deleteItem(id)
  }

  return (
    <li className="li-container">
      <p className="time">{timeAccessed}</p>
      <div className="li-items-container">
        <img src={logoUrl} alt="domain logo" className="logo" />
        <div className="paras-container">
          <p className="span">{title}</p>
          <p className="paragraph">{domainUrl}</p>
        </div>
        <div>
          <button
            type="button"
            className="button"
            data-testid="delete"
            onClick={onDeleteItem}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
              className="delete-button"
            />
          </button>
        </div>
      </div>
    </li>
  )
}
export default SearchHistoryItem
