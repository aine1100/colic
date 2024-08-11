import imageOne from "../images/date.webp"
const Customer = () => {
  return (
    <div className="pt-10">
        <h1 className="text-[45px] pl-20">Are You One of Our <span className="font-bold">Happy Customers?</span></h1>
        <div className="flex  gap-10 pl-20 pt-10 flex-wrap">
            <div>
                <img src={imageOne} alt="" className="w-[250px] h-[350px] rounded-md" />
            </div>
            <div>
                <img src={imageOne} alt="" className="w-[250px] h-[350px] rounded-md my-10" />
            </div>
            <div>
                <img src={imageOne} alt="" className="w-[250px] h-[350px] rounded-md" />
            </div>
            <div>
                <img src={imageOne} alt="" className="w-[250px] h-[350px] rounded-md my-10" />
            </div>


        </div>
    </div>
  )
}

export default Customer