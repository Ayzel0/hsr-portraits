const PortraitOptions = ({ options, setOptions }) => {
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

  const handleRarityBackgroundsChange = (event) => {
    const newOptions = {...options, [event.target.name]: event.target.checked};
    setOptions(newOptions);
  }

  const handleHideNamesChange = (event) => {
    const newOptions = {...options, [event.target.name]: event.target.checked};
    setOptions(newOptions)
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
        <h1 className='text-2xl text-white mt-5'>Rarity Background Colors</h1>
        <form className='mt-5'>
          <input 
            type='checkbox'
            name='rarityBackgrounds'
            onChange={handleRarityBackgroundsChange}
            checked={options.rarityBackgrounds}
          />
        </form>
        <h1 className='text-2xl text-white mt-5'>Hide Character Names</h1>
        <form>
          <input 
            type='checkbox'
            name='hideCharNames'
            onChange={handleHideNamesChange}
            checked={options.hideCharNames}
          />
        </form>
      </div>
    </div>
  )
}

export default PortraitOptions;