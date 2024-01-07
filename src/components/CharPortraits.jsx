import { useState, useEffect } from 'react'
import CharacterSelectPanel from "./CharacterSelectPanel";
import SelectedCharacters from './SelectedCharacterDisplay';
import characters from '../data/characters.json';
import PortraitOptions from './PortraitOptions';

const CharPortraits = () => {
  const [options, setOptions] = useState({
    'backgroundColor': 'slate',
    'backgroundTone': '800',
    'teamName': '',
    'rarityBackgrounds': true,
    'hideCharNames': false,
    'displayEidolons': false,
  })

  const changeOptions = (newOptions) => {
    setOptions(newOptions);
  }

  const [characterList, setCharacterList] = useState([]);

  const onPortraitClick = (charName) => {
    // check whether character is in list
    const charListNames = characterList.map(character => character['Character Name']);

    if (characterList.length < 4 && !charListNames.includes(charName)) {
      setCharacterList([...characterList, characters.find(character => character['Character Name'] === charName)]);
    }

    if (charListNames.includes(charName)) {
      setCharacterList(characterList.filter(character => character['Character Name'] !== charName));
    }
  }

  // debug
  useEffect(() => {
    console.log(characterList);
  }, [characterList]);
  
  return (
    <div>
      <div className='grid grid-cols-2 h-82%'>
        <SelectedCharacters 
          selectedCharacterList={characterList} 
          onPortraitClick={onPortraitClick}
          options={options}
        />
        <PortraitOptions 
          options={options}
          setOptions={changeOptions}
        />
      </div>
      <CharacterSelectPanel 
        onPortraitClick={onPortraitClick}
        characters={characters}
      />
    </div>
  )
}

export default CharPortraits;