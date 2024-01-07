import { useState, useEffect } from 'react';
import HoverMenu from './HoverMenu';

const CharacterPortrait = ({ charName, imgLink, rarity, onClick, rarityBackgrounds, showCharNames=true, displayEidolons=false, showRoles=false, onDisplay=false }) => {
  const [name, setName] = useState(charName);
  const [isHovered, setIsHovered] = useState(false);
  const [displayCharName, setDisplayCharName] = useState(true);
  const [eidolonLevel, setEidolonLevel] = useState(0);
  const [roleName, setRoleName] = useState('');

  const handleMouseEnter = () => {setIsHovered(true);}
  const handleMouseLeave = () => {setIsHovered(false);}
  
  useEffect(() => {
    let newName = charName;
    if (charName.includes('Trailblazer')) {
      newName = 'Trailblazer';
    } else if (charName.includes('Imbibitor')) {
      newName = 'Dan Heng IL';
    }
    setName(newName);
  }, [charName]);

  const bg_color = rarityBackgrounds ? rarity === 5 
    ? 'bg-gradient-to-b from-five-star-gold-light to-five-star-gold-dark' 
    : 'bg-gradient-to-b from-four-star-purple-light to-four-star-purple-dark'
  : 'bg-slate-600';
  const bg_classes = `inline-flex flex-col items-center border-slate-950 rounded-2xl cursor-pointer overflow-hidden ${bg_color}`;
  return (
    <>
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
            {displayEidolons &&
              <p className='absolute top-0 right-0 p-1 bg-slate-300/[0.6] font-bold rounded-bl-lg'>E{eidolonLevel}</p>
            }
          </div>
          {showCharNames &&
          <div className='w-32 bg-amber-50'>
            <p className='text-m font-medium text-center py-3 px-1'>{name}</p>
          </div>
          }
        </div>
        {(isHovered && onDisplay) &&
          <HoverMenu 
            eidolonLevel={eidolonLevel}
            setEidolonLevel={setEidolonLevel}
            setDisplayCharName={setDisplayCharName}
            name={name}
            setName={setName}
            roleName={roleName}
            setRoleName={setRoleName}
          />
        }
      </div>

      <div>
        {(showRoles && roleName!=='') &&
        <div className='flex flex-row justify-center max-w-32 mx-auto'>
          <p className='text-black text-center mt-5 font-semibold bg-neutral-300 py-1 px-3 max-w-full	inline-flex flex-shrink rounded-2xl text-wrap'>{roleName}</p>
        </div>
        }
      </div>
    </>
  )
}

export default CharacterPortrait;