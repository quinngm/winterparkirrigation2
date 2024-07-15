import Form from "./Form";

export default function FormSection() {
  return (
    <div className=' bg-gray-200 w-full flex flex-row gap-3 justify-between py-24 px-10'>
      <div className=" w-2/6">
        <h1 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
          Preserving Our Community's Beauty, One Yard at a Time.
        </h1>
        <p className='mt-6 text-lg leading-8 text-gray-600'>
          Choosing the right partner to enhance the value & enjoyment of your yard is a significant decision. We are grateful for the opportunity to earn your trust & business. 
        </p>
      </div>
      <Form /> 
    </div>
  );
}
