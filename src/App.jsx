import './App.css'
import NumberInput from './NumberInput'

function App() {
  return (
    <>
      <div className='bg-[#211f1f] h-screen flex flex-col justify-center'>
        <h1 className='text-3xl font-bold text-purple-400 mx-auto'>Different Number Inputs</h1>
        <NumberInput type="currency" />
        <NumberInput type="percentage" />
        <NumberInput type="regular" />
      </div>

    </>
  )
}

export default App
