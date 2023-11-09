import Image from 'next/image';

const Loading = () => {
  return (
    <div className='flex justify-center'>
        <Image width={96} height={384} src='spinner.svg' alt='loading' />
        </div>
  )
}

export default Loading;