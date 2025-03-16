"use client"

interface HeadingProps {
    center?: boolean;
    text:string;
}
const Heading:React.FC<HeadingProps> = ({center,text}) => {

  return (
    <div className={`text-slate-500 px-3 md:px-10 py-3 md:py-5 text-2xl md:text-4xl font-bold ${center ? "text-center" : "text-start"}`}>{text}</div>
  )
}

export default Heading