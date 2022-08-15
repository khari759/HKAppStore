import './index.css'

const TabItems = props => {
  const {item, clickTabItem, isActive} = props
  const {tabId, displayText} = item

  const selectedTab = () => {
    clickTabItem(tabId)
  }

  const selectedBtn = isActive ? 'active-btn' : ''

  return (
    <li className="list-item">
      <button
        type="button"
        onClick={selectedTab}
        className={`tab-btn ${selectedBtn}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItems
