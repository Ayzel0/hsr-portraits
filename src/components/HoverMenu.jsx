const HoverMenu = ({ eidolonLevel, setEidolonLevel }) => {
  const handleEidolonLevelChange = (event) => {
    const value = event.target.value;
    if (value <= 6 && value >= 0) {
      setEidolonLevel(value);
    }
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
      </div>
    </div>
  )
}

export default HoverMenu;