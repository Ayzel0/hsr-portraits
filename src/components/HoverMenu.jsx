const HoverMenu = ({ eidolonLevel, setEidolonLevel, setDisplayCharName, name, setName, roleName, setRoleName }) => {
  const handleEidolonLevelChange = (event) => {
    const value = event.target.value;
    if (value <= 6 && value >= 0) {
      setEidolonLevel(value);
    }
  }

  const handleCharNameChange = (event) => {
    setDisplayCharName(false);
    setName(event.target.value);
  }

  const handleRoleNameChange = (event) => {
    setRoleName(event.target.value);
  }

  return (
    <div className=' bg-transparent absolute pt-2 z-10'>
      <div className='bg-emerald-700 text-white rounded-2xl pb-5'>
        <p className='font-semibold text-xl p-5'>Individual Character Portrait Options</p>
        <form className='text-black flex flex-col'>
          <div className='flex flex-row relative'>
            <p className='text-white mx-5'>Eidolon Level</p>
            <input
              className='absolute right-2'
              type='number'
              min={0}
              max={6}
              value={eidolonLevel}
              onChange={handleEidolonLevelChange}
            />
          </div>
          <div className='flex flex-row mt-2 relative'>
            <p className='text-white mx-5'>Change Name Label</p>
            <input 
              className='absolute right-2'
              type='text'
              value={name}
              onChange={handleCharNameChange}
            />
          </div>
          <div className='flex flex-row mt-2 relative'>
            <p className='text-white mx-5'>Change Role Name</p>
            <input 
              className='absolute right-2'
              type='text'
              value={roleName}
              onChange={handleRoleNameChange}
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default HoverMenu;