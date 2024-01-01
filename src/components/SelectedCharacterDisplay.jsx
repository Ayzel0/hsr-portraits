import CharacterPortrait from "./CharacterPortrait";

//TODO: add a removal function to ActionCalc so that characters can be removed when they're clicked

const SelectedCharacters = ({ selectedCharacterList, onPortraitClick, options }) => {
  const charactersExist = selectedCharacterList.length > 0 ? true : false;
  const uniqueColors = ['transparent', 'white', 'black'] // colors which don't have a tone
  const backgroundColor = uniqueColors.includes(options['backgroundColor']) 
    ? 'bg-' + options['backgroundColor']
    : 'bg-' + options['backgroundColor'] + '-' + options['backgroundTone']
  const displayBoxOptions = charactersExist ? `inline-block m-5 rounded-3xl ${backgroundColor}` : '';

  return (
    <div className='bg-blue-950'>
      <h1 className='text-4xl font-semibold text-white px-5 pt-5'>Selected Characters</h1>
      <div className={displayBoxOptions}>
        {(charactersExist && options['teamName'].length > 0) && <h1 className='text-3xl font-semibold text-white px-8 pt-5'>{options['teamName']}</h1>}
        <div className='flex flex-row gap-4 p-8 items-center'> {/* selected characters panel */}
          {selectedCharacterList.map((character) => (
            <div key={character['Character Name']}>
              <CharacterPortrait 
                charName={character['Character Name']}
                imgLink={character['Image Link']}
                rarity={character['Rarity']}
                onClick={() => onPortraitClick(character['Character Name'])}
                rarityBackgrounds={options['rarityBackgrounds']}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SelectedCharacters;