import Form from "./Form";

export default function FormSection() {
  return (
    <div className=' bg-gray-200 w-full flex flex-row gap-3 justify-between py-24 px-6'>
      <div className=" w-2/6">
        <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
          Data to enrich your online business
        </h1>
        <p className='mt-6 text-lg leading-8 text-gray-600'>
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.
        </p>
      </div>
      <Form /> 
    </div>
  );
}
