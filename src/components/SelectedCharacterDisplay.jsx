import CharacterPortrait from "./CharacterPortrait";
import downloadjs from 'downloadjs';
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';

const SelectedCharacters = ({ selectedCharacterList, onPortraitClick, options }) => {
  const handleCaptureClick = async (imageType) => {
    const node = document.getElementById('capture-box');
    imageType === 'png' ?

    // download as png
    htmlToImage.toPng(node)
      .then((dataUrl) => {
        downloadjs(dataUrl, options['teamName'] + '.png');
      })
    :
    
    // download as svg
    htmlToImage.toSvg(node)
      .then((dataUrl) => {
        downloadjs(dataUrl, options['teamName'] + '.svg');
      })
  }

  const charactersExist = selectedCharacterList.length > 0 ? true : false;
  const uniqueColors = ['transparent', 'white', 'black'] // colors which don't have a tone
  const backgroundColor = uniqueColors.includes(options['backgroundColor']) 
    ? 'bg-' + options['backgroundColor']
    : 'bg-' + options['backgroundColor'] + '-' + options['backgroundTone']
  const displayBoxOptions = charactersExist ? `inline-block rounded-3xl ${backgroundColor}` : '';

  return (
    <div className='bg-blue-950 flex flex-col'>
      <h1 className='text-4xl font-semibold text-white px-5 pt-5'>Selected Characters</h1>
      <div id='capture-box' className='inline-block p-5'>
        {charactersExist ?
        <div className={displayBoxOptions}>
          {(charactersExist && options['teamName'].length > 0) && <h1 className='text-3xl font-semibold text-white px-8 pt-5'>{options['teamName']}</h1>}
          <div className='flex flex-row gap-4 p-8 items-center'> {/* selected characters panel */}
            {selectedCharacterList.map((character) => (
              <div key={character['Character Name']}>
                <CharacterPortrait 
                  charName={character['Character Name']}
                  imgLink={character['Image Path']}
                  rarity={character['Rarity']}
                  onClick={() => onPortraitClick(character['Character Name'])}
                  rarityBackgrounds={options['rarityBackgrounds']}
                />
              </div>
            ))}
          </div>
        </div>
        :
        <div className='flex items-center justify-center h-80'>
          <h1 className='text-white text-2xl font-mono bg-slate-800 p-16 rounded-xl'>Team will appear here!</h1>
        </div>
        }
      </div>
      {charactersExist &&
      <div className='block'>
        <button 
          onClick={() => handleCaptureClick('png')}
          className='bg-zinc-600 p-5 cursor-pointer text-white hover:bg-zinc-500 rounded-lg ml-16 mb-8'
        >Download as PNG</button>
        <button 
          onClick={() => handleCaptureClick('svg')}
          className='bg-zinc-600 p-5 cursor-pointer text-white hover:bg-zinc-500 rounded-lg ml-8 mb-8'
        >Download as SVG</button>
      </div>
      }
    </div>
  )
}

export default SelectedCharacters;