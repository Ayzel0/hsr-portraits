const CharacterPortrait = ({ type='default', charName, imgLink, rarity, onClick, rarityBackgrounds }) => {
  let name = charName;
  
  // trimming bs names
  if (charName.includes('Trailblazer')) {
    name = 'Trailblazer';
  }
  if (charName.includes('Imbibitor')) {
    name = 'Dan Heng IL';
  }

  const bg_color = rarityBackgrounds
  ? rarity === 5 ? 'bg-five-star-gold' : 'bg-four-star-purple'
  : 'bg-slate-600';
  const bg_classes = `inline-flex flex-col items-center border-slate-950 rounded-2xl cursor-pointer overflow-hidden ${bg_color}`;
  return (
    <div onClick={() => onClick(charName)} className={bg_classes}>
      <img src={imgLink} className='w-32'/>
      <div className='w-32 bg-amber-50'>
        <p className='text-m font-medium text-center py-3'>{name}</p>
      </div>
    </div>
  )
}

export default CharacterPortrait;