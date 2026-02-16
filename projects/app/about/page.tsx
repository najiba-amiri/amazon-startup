import React from 'react'
import Image from 'next/image'
const team=[
    {name:"haider Rezai",role:"CEO"},
    {name:"haider Rezai",role:"CEO"},
    {name:"haider Rezai",role:"CEO"},

]
function page() {
  return (
    <div>
        <section className="container bg-yellow-500 text-white py-20 text-center px-4 rounded-lg shadow-md">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </section>

        <section className="container py-16 px-4 max-w-6x1 mx-auto grid md:grid-cols-2 ">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md" >
                <h2 className='font-bold text-center'>Our Mission</h2>
                <p className="text-center">To provide high-quality products and services that exceed customer expectations.</p>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h2 className='font-bold text-center'>Our Vision</h2>
                <p className="text-center">To be the leading provider of innovative solutions in our industry.</p>
            </div>
        </section>

        <section>
            <div className="container py-16 px-4 max-w-6x1 mx-auto">
                <h1 className="text-center text-3xl font-bold mb-8">our Team</h1>
                <div className="grid md:grid-cols-4gap-6">
                 {team.map((member,i)=>(
                <div key={i} className="bg-white p-6 rounded-lg shadow border-t-4 border-green-600 text-center ">
                    <Image src="/amazon.jpg" alt="Logo" width={100} height={50} className="mx-auto"/>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
                 ))
                 }   
                </div>
            </div>
        </section>
    </div>
  )
}

export default page