import './FirstChannel.css'

const FirstChannel = () => {

  const obj = {
    color: 'red',
    background: 'white',
  }

  return (
    <div>
      <h1 style={{ color: 'pink', background: 'black', fontSize: 50 }} >This is para 1</h1>
      <h2 style={obj}> This is para 2 </h2>
      <h1 className="rafay">This is para 3</h1>
    </div>
  )
}

export default FirstChannel
