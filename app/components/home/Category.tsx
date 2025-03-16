"use client"

const Category = () => {
    const categoryList = [
        { name: "Shoes" },
        { name: "Clothes" },
        { name: "Accessories" },
        { name: "Electronics" },
        { name: "Books" },
        { name: "Sports" },
    ]

    return (
        <div className="flex items-center justify-center mx-auto px-3 md:px-10 gap-4 md:gap-10 my-5 md:my-10 whitespace-nowrap overflow-x-auto py-10">
            {categoryList.map((category, index) => (
                <div 
                    key={index} 
                    className="border text-slate-500 rounded-full min-w-[120px] flex items-center justify-center cursor-pointer text-center bg-orange-600 text-white px-4 py-2"
                >
                    {category.name}
                </div>
            ))}
        </div>
    )
}

export default Category