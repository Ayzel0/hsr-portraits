import { useState, useEffect } from 'react';

const PortraitOptions = ({ options, setOptions }) => {
  const [displayEidolons, setDisplayEidolons] = useState(false);
  const [hideCharNames, setHideCharNames] = useState(false);
  const [rarityBackgrounds, setRarityBackgrounds] = useState(true);

  useEffect(() => {
    const newOptions = {...options, 'displayEidolons': displayEidolons};
    setOptions(newOptions);
  }, [displayEidolons])

  useEffect(() => { 
    const newOptions = {...options, 'hideCharNames': hideCharNames};
    setOptions(newOptions);
  }, [hideCharNames])

  useEffect(() => {
    const newOptions = {...options, 'rarityBackgrounds': rarityBackgrounds};
    setOptions(newOptions);
  }, [rarityBackgrounds])

  const handleBackgroundColorChange = (event) => {
    const newOptions = {...options, [event.target.name]: event.target.value};
    setOptions(newOptions);
  }

  const handleBackgroundToneChange = (event) => {
    const newOptions = {...options, [event.target.name]: event.target.value};
    setOptions(newOptions);
  }

  const handleTeamNameChange = (event) => {
    const newOptions = {...options, [event.target.name]: event.target.value};
    setOptions(newOptions);
  }

  return (
    <div className='bg-blue-950'>
      <h1 className='text-4xl font-semibold text-white px-8 pt-5'>Team Portrait Options</h1>
      <div className='px-8 pt-5'>
        <h1 className='text-2xl text-white'>Background Color</h1>
        <select
          name='backgroundColor'
          value={options.backgroundColor || ''}
          onChange={handleBackgroundColorChange}
          className='mt-5'
        >
          <option value='white'>White</option>
          <option value='black'>Black</option>
          <option value='transparent'>Transparent</option>
          <option value='slate'>Slate</option>
          <option value='gray'>Gray</option>
          <option value='zinc'>Zinc</option>
          <option value='neutral'>Neutral</option>
          <option value='stone'>Stone</option>
          <option value='red'>Red</option>
          <option value='orange'>Orange</option>
          <option value='amber'>Amber</option>
          <option value='yellow'>Yellow</option>
          <option value='lime'>Lime</option>
          <option value='green'>Green</option>
          <option value='emerald'>Emerald</option>
          <option value='teal'>Teal</option>
          <option value='cyan'>Cyan</option>
          <option value='sky'>Sky</option>
          <option value='blue'>Blue</option>
          <option value='indigo'>Indigo</option>
          <option value='violet'>Violet</option>
          <option value='purple'>Purple</option>
          <option value='fuchsia'>Fuchsia</option>
          <option value='pink'>Pink</option>
          <option value='rose'>Rose</option>
        </select>
        <select
          name='backgroundTone'
          value={options.backgroundTone || ''}
          onChange={handleBackgroundToneChange}
          className='ml-5 mt-5'
        >
          <option value='50'>50</option>
          <option value='100'>100</option>
          <option value='200'>200</option>
          <option value='300'>300</option>
          <option value='400'>400</option>
          <option value='500'>500</option>
          <option value='600'>600</option>
          <option value='700'>700</option>
          <option value='800'>800</option>
          <option value='900'>900</option>
          <option value='950'>950</option>
        </select>
        <h1 className='text-2xl text-white mt-5'>Team Name</h1>
        <form className='mt-5'>
          <input 
            type='text'
            name='teamName'
            onChange={handleTeamNameChange}
          />
        </form>

        <div className='flex flex-row items-center relative mt-5'> { /* rarity backgrounds select */ }
          <h1 className='text-2xl text-white'>Show Rarity Backgrounds</h1>
          <div className='flex flex-row items-center ml-4 rounded-lg bg-zinc-700 absolute right-48 cursor-pointer'>
            <p 
              className={`text-white px-5 py-2 ${!rarityBackgrounds && 'bg-zinc-500'} rounded-l-lg`}
              onClick={() => setRarityBackgrounds(false)}
            >Off</p>
            <p 
              className={`text-white px-5 py-2 ${rarityBackgrounds && 'bg-zinc-500'} rounded-r-lg`}
              onClick={() => setRarityBackgrounds(true)}
            >On</p>
          </div>
        </div>

        <div className='flex flex-row items-center relative mt-5'> { /* hide character names select */ }
          <h1 className='text-2xl text-white'>Hide Character Names</h1>
          <div className='flex flex-row items-center ml-4 rounded-lg bg-zinc-700 absolute right-48 cursor-pointer'>
            <p 
              className={`text-white px-5 py-2 ${!hideCharNames && 'bg-zinc-500'} rounded-l-lg`}
              onClick={() => setHideCharNames(false)}
            >Off</p>
            <p 
              className={`text-white px-5 py-2 ${hideCharNames && 'bg-zinc-500'} rounded-r-lg`}
              onClick={() => setHideCharNames(true)}
            >On</p>
          </div>
        </div>

        <div className='flex flex-row items-center relative mt-5'> { /* eidolon levels select */}
          <h1 className='text-2xl text-white'>Eidolon Levels</h1>
          <div className='flex flex-row items-center ml-4 rounded-lg bg-zinc-700 absolute right-48 cursor-pointer'>
            <p 
              className={`text-white px-5 py-2 ${!displayEidolons && 'bg-zinc-500'} rounded-l-lg`}
              onClick={() => setDisplayEidolons(false)}
            >Off</p>
            <p 
              className={`text-white px-5 py-2 ${displayEidolons && 'bg-zinc-500'} rounded-r-lg`}
              onClick={() => setDisplayEidolons(true)}
            >On</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortraitOptions;