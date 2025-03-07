import Image from 'next/image'

export default function TeamName({
  name,
  position,
}: {
  name: string
  position: 'right' | 'left'
}) {
  return (
    <div
      className={`flex items-center ${
        position === 'left' ? '' : 'flex-row-reverse'
      }`}
    >
      <Image
        priority
        src='/icons/starIcon.svg'
        height={25}
        width={25}
        alt='Star Icon'
      />
      <div className={`ml-2 ${position === 'left' ? '' : 'mr-2'}`}>
        <span className='font-semibold text-white'>{name}</span>
      </div>
    </div>
  )
}
