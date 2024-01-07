import { useState } from 'react';
import HoverMenu from './HoverMenu';

const CharacterPortrait = ({ charName, imgLink, rarity, onClick, rarityBackgrounds, hideCharNames=false, displayEidolons=false, onDisplay=false }) => {
  let name = charName;
  const [isHovered, setIsHovered] = useState(false);
  const [eidolonLevel, setEidolonLevel] = useState(0);

  const handleMouseEnter = () => {setIsHovered(true);}
  const handleMouseLeave = () => {setIsHovered(false);}
  
  // trimming bs names
  if (charName.includes('Trailblazer')) {
    name = 'Trailblazer';
  }
  if (charName.includes('Imbibitor')) {
    name = 'Dan Heng IL';
  }

  const bg_color = rarityBackgrounds ? rarity === 5 
    ? 'bg-gradient-to-b from-five-star-gold-light to-five-star-gold-dark' 
    : 'bg-gradient-to-b from-four-star-purple-light to-four-star-purple-dark'
  : 'bg-slate-600';
  const bg_classes = `inline-flex flex-col items-center border-slate-950 rounded-2xl cursor-pointer overflow-hidden ${bg_color}`;
  return (
    <div 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        onClick={() => onClick(charName)} 
        className={bg_classes}
      >
        <div className='relative'>
          <img src={imgLink} className='w-32'/>
          {displayEidolons === true &&
            <p className='absolute top-0 right-0 p-1 bg-slate-300/[0.6] font-bold rounded-bl-lg'>E{eidolonLevel}</p>
          }
        </div>
        {!hideCharNames &&
        <div className='w-32 bg-amber-50'>
          <p className='text-m font-medium text-center py-3'>{name}</p>
        </div>
        }
      </div>
      {(isHovered && onDisplay) &&
        <HoverMenu 
          eidolonLevel={eidolonLevel}
          setEidolonLevel={setEidolonLevel}
        />
      }
    </div>
  )
}

export default CharacterPortrait;