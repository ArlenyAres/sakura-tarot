import CardContainer from '../components/InstructionsCards/CardContainer';

export default function Instructions() {
  return (
    <>
      <main className='bg-purple-medium'>
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-center sm:text-5xl md:text-5xl lg:text-7xl  text-purple-text py-8">Instrucciones</h1>
          <CardContainer />
        </div>
       
      </main>
    </>
  )
}