import { useState, useEffect } from 'react';
import characters from '../data/characters.json'
import elements from '../data/elements.json';
import paths from '../data/paths.json';
import CharacterPortrait from './CharacterPortrait';
import FilterButton from './FilterButton';

const CharacterSelectPanel = ({ onPortraitClick, characters }) => {
  const [activeElements, setActiveElements] = useState(elements.map(element => element['Element']));
  const [activePaths, setActivePaths] = useState(paths.map(path => path['Path']));

  const changeActiveElements = (element) => {
    if (activeElements.includes(element)) {
      setActiveElements(activeElements.filter(activeElement => activeElement !== element));
    }
    else {
      setActiveElements([...activeElements, element])
    }
  }

  const changeActivePaths = (path) => {
    if (activePaths.includes(path)) {
      setActivePaths(activePaths.filter(activePath => activePath !== path));
    } 
    else {
      setActivePaths([...activePaths, path]);
    }
  }

  return (
    <div className='bg-slate-300 flex flex-col justify-center items-center p-5'>
      <div className='flex flex-row'> {/* element filter */}
      {elements.map((element) => (
        <div className='mx-1 mb-2' key={element['Element']}>
          <FilterButton 
            imageLink={element['Image Link']} 
            onClick={() => changeActiveElements(element['Element'])}
            iconType='element'
          />
        </div>
      ))}
      </div>
      <div className='flex flex-row'> {/* path filter */}
      {paths.map((path) => (
        <div className='mx-1 mb-2' key={path['Path']}>
          <FilterButton 
            imageLink={path['Image Link']}
            onClick={() => changeActivePaths(path['Path'])}
            iconType='path'
          />
        </div>
      ))}
      </div>
      <div className='flex flex-wrap gap-3 justify-center'> {/* character panel div */}
      {characters.map((character) => (
        (activePaths.includes(character['Path']) && activeElements.includes(character['Element'])) &&
        <div key={character['Character Name']}>
          <CharacterPortrait 
            charName={character['Character Name']} 
            imgLink={character['Image Link']} 
            rarity={character['Rarity']} 
            onClick={() => onPortraitClick(character['Character Name'])}
            rarityBackgrounds={true}
          />
        </div>
      ))}
      </div>
    </div>
  )
}

export default CharacterSelectPanel;