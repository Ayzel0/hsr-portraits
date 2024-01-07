const HoverMenu = ({ eidolonLevel, setEidolonLevel, displayCharName, setDisplayCharName, setName, roleName, setRoleName }) => {
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
        
        <div className='text-black flex flex-row'> { /* adjust eidolon level */ }
          <p className='text-white mx-5'>Eidolon Level</p>
          <form>
            <input 
              type='number'
              min={0}
              max={6}
              onChange={handleEidolonLevelChange}
            />
          </form>
        </div>

        <div className='text-black flex flex-row mt-5'> { /* adjust character name */ }
          <p className='text-white mx-5'>Change Name Label</p>
          <form>
            <input 
              type='text'
              onChange={handleCharNameChange}
            />
          </form>
        </div>

        <div className='text-black flex flex-row mt-5'> { /* adjust role name */ }
          <p className='text-white mx-5'>Change Role Name</p>
          <form>
            <input 
              type='text'
              onChange={handleRoleNameChange}
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default HoverMenu;