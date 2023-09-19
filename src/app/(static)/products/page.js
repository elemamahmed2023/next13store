import Image from "next/image";
import pict1 from "../../../../public/assets/members.svg";
import Link from "next/link";
import Button from "@/app/elements/Button/Button";

async function getData() {
  const res = await fetch('https://dummyjson.com/products')
  
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}


export default  async function Products () {
    const data = await getData();
    

  return (
  <div className="flex flex-wrap gap-4 xs:flex-1 xs:justify-center ">
  {data.products.map(item=><>
    <div key={item.id} className="flex flex-col border w-[300px] ml-3 border-slate-400 rounded-lg mt-4 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <Link href={`/products/${item.id}`}>
                <div>
                  <div className="relative w-[250px] h-[200px] mx-auto">
                    <Image
                      className="rounded-xl pt-2"
                      src={item.thumbnail}
                      alt="photo" 
                      fill={true}/>
                      <div className="absolute bg-orange-500 rounded-md top-2 p-[3px] text-white text-[14px] ">
                        {item.price}$</div>
                  </div>
                  
                  <div className="p-2 h-[130px]">
                    <h5 className=" text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                      {item.title}
                    </h5>
                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    {item.description}
                    </p>
                  </div>
                </div>

                <div className="flex justify-between
                 px-2 align-middle py-2">
                  <Button />
                    <div className=" bg-slate-300 rounded-full p-2">{item.stock}</div>
                </div>
                
          </Link>

            

      </div>
  
  </>)}
      
  </div>
  )
}

