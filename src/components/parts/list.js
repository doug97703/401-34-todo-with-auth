import React, {useContext, useState, useEffect} from 'react'
import { SettingsContext } from '../context/settings';
import { When } from '../if';
import Auth from '../auth/auth'

export default props => {
  const settings = useContext(SettingsContext)

  const [ currentPage, setPage ] = useState(1);
  const [ currentPageStyle, setCurrentPageStyle ] = useState({ 1: {display: 'block'} })
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    let newPage = {[currentPage]: {display: "block"}}
    setCurrentPageStyle( newPage )
  }, [currentPage])

  useEffect(() => {
    let filteredList = props.todoList.filter( item => !(item.complete && settings.completed === 'hide'))
    setItemList(filteredList)
  }, [props.todoList, settings])

  const setStyle = i => {
    let page = i + 1 < settings.perPage ? '1' : `${Math.ceil((i + 1) / settings.perPage)}`
    return currentPageStyle[page] || {display: 'none'}
  }

  return (
    <div>
      <div id="page-buttons">
        <When condition={currentPage > 1} >
        <button id="previous" className="pagination" onClick={() => setPage(currentPage - 1)}>previous</button> 
        </When>
        <When condition={(Math.ceil(itemList.length / settings.perPage)) > currentPage} >
        <button id="next" className="pagination" onClick={() => setPage(currentPage + 1)}>next</button>
        </When>
      </div>
      <ul>
        {itemList.map( (item,i) => (
          <li style={setStyle(i)} id={i+1 < settings.perPage ? '1' : `${Math.ceil((i+1)/settings.perPage)}`} className={`complete-${item.complete.toString()}`} key={item._id}>
            <div>
              <span onClick={() => props.toggleComplete(item._id)}>{item.text}</span>
              <button onClick={() => props.toggleDetails(item._id)}>Details</button>
              <Auth capability="delete">
                <button onClick={() => props.delete(item._id)}>Delete</button>
              </Auth>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
