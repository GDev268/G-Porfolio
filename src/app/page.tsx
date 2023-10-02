import Image from 'next/image'
import Container from '../components/Container/container'

export default function Home() {
  const squareStyle = {
    width: '50px',
    height: '12800px',
    backgroundColor: 'red',
    position: 'absolute',
    top: '100px', // Adjust the top position as needed
    left: '20px', // Adjust the left position as neededi
  };



  return (
    <main className="">
      <Container/> 
      <div style={squareStyle}/>
    </main>
  )
}
