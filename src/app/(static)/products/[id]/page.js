import Image from "next/image";

async function getData(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Product({ params }) {
  const id = params.id;
  const product = await getData(id);

  return (
    <>
    
        <div >
          <h5 className=" text-5xl text-slate-900 py-3  text-center" >
            {product.title}
          </h5>
          <p className="px-4 text-xl">
            {product.description}
          </p>
        </div>


    <div className="p-2 sm:flex sm:flex-row justify-around  max-w-4xl mx-auto xs:flex-1 xs:flex-col">
        <div className="relative w-[350px] h-[250px] xs:mx-auto">
          <Image
            className="object-cover flex justify-center rounded-3xl  "
            src={product.thumbnail}
            alt="photo"
            fill={true}

          />
        
        </div>

      <div className="flex  flex-col justify-center text-center mb-2">
            <div className=" mt-5 bg-orange-600 px-3 rounded-md text-white text-2xl">
            Price:  {product.price}$
            </div>
          
            <div>Stock Quntatity:{product.stock}</div>
        
            <div>Brand:{product.brand}</div>
      </div>
  
      </div>
    









      <div className="
        
      xs:hidden
      sm:flex sm:flex-col sm:justify-center sm:align-middl 
      bg-slate-200
      md:flex md:flex-row md:justify-center md:gap-4 ">
        {product.images.map(image=>(
          <div  key={product.id}>
              <Image
            
            className="mx-auto rounded-lg xs:mb-3 "
            src={image}
            width={100}
            height={100}
            alt="photo"
          
          />
          </div>
        ))}
      </div>

    </>
  );
}
