const BottomBar = () => {
  return (
    <div className='bg-blue-950 grid grid-cols-2'>
      <div className='text-white py-5 px-10'>
        <p>This is a fan-made website. <br></br>It is not affiliated with miHoYo; all assets are property of original owners.</p> { /* disclaimer */ }
      </div>
      <div className='text-white py-5 px-10'>
        <p>Made With:</p>
      </div>
    </div>
  )
}

export default BottomBar;