import './indesx.css'
import {Component} from 'react'

import SearchHistoryItem from '../SearchHistoryItem'

class SearchHistory extends Component {
  state = {searchInput: '', itemsList: ''}

  onChangeResult = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteItem = id => {
    const {initialHistoryList} = this.props

    this.setState({itemsList: initialHistoryList})

    const {itemsList} = this.state
    const filteredData = itemsList.filter(each => each.id !== id)

    this.setState({itemsList: filteredData})

    if (itemsList === '') {
      ;<p>Empty History View</p>
    } else {
      this.setState({itemsList: initialHistoryList})
    }
  }

  render() {
    const {initialHistoryList} = this.props
    const {searchInput, itemsList} = this.state

    const filterdResults = initialHistoryList.filter(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="top-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="image-logo"
          />
          <div className="input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-logo"
            />
            <div className="vl-line" />
            <input
              type="search"
              placeholder="Search history"
              className="input"
              onChange={this.onChangeResult}
            />
          </div>
        </div>
        <ul className="ul-container">
          {filterdResults.map(each => (
            <SearchHistoryItem
              eachItemDetails={each}
              key={each.id}
              deleteItem={this.deleteItem}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default SearchHistory
