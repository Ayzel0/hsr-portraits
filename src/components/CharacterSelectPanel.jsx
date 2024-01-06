import { useState, useEffect } from 'react';
import elements from '../data/elements.json';
import paths from '../data/paths.json';
import CharacterPortrait from './CharacterPortrait';
import FilterButton from './FilterButton';
import charactersAlphabetical from '../data/characters_alphabetical.json';
import charactersReleaseDate from '../data/characters_releasedate.json';

const CharacterSelectPanel = ({ onPortraitClick, characters }) => {
  const [activeElements, setActiveElements] = useState(elements.map(element => element['Element']));
  const [activePaths, setActivePaths] = useState(paths.map(path => path['Path']));
  const [activeSort, setActiveSort] = useState('alphabetical');
  const [charList, setCharList] = useState(charactersAlphabetical);

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

  const changeActiveSort = (sortMethod) => {
    setActiveSort(sortMethod);
    sortMethod === 'alphabetical' ? setCharList(charactersAlphabetical) : setCharList(charactersReleaseDate);
  }

  return (
    <div className='bg-slate-300 flex flex-col justify-center items-center p-5'>
      <div className='text-white bg-slate-800 flex flex-row mb-5 rounded-2xl'> { /* sort order */ }
        <p className='p-5'>Sort By:</p>
        <p 
          className={`p-5 cursor-pointer ${activeSort === 'alphabetical' ? 'bg-slate-600' : ''}`}
          onClick={() => changeActiveSort('alphabetical')}
        >Alphabetical</p>
        <p 
          className={`p-5 rounded-r-2xl cursor-pointer ${activeSort === 'release' ? 'bg-slate-600' : ''}`}
          onClick={() => changeActiveSort('release')}
        >Release Date</p>
      </div>
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
      {charList.map((character) => (
        (activePaths.includes(character['Path']) && activeElements.includes(character['Element'])) &&
        <div key={character['Character Name']}>
          <CharacterPortrait 
            charName={character['Character Name']} 
            imgLink={character['Image Path']} 
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