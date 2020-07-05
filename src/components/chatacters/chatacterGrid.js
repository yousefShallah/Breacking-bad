import React from 'react'
import CharacterItem from './characterItem';
import loadingLogo from '../../img/spinner.gif';

const ChatacterGrid = ({items, isLoading}) => {
    
  return isLoading ? (<div className="center" > <img className="spinner" src={loadingLogo} /> </div>) : (<section className="cards">
            {items.map(item => (
                <CharacterItem key={item.char_id} item={item} />
            ))}
       </section>)
}
export default ChatacterGrid;
