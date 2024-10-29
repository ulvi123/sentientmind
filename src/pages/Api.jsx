import { Link } from "react-router-dom"
import apiImg from "/apiImg.png"


export default function ApiPage(){
    return (
        <div className="min-h-screen bg-black text-white px-4 py-8 md:px-8 lg:px-16">
            <div className="flex flex-row items-center justify-center space-x-8 mt-16 ml-6">
                <div className="flex-1 text-left">
                    <div className="mb-8">
                        <h1 className="text-6xl font-bold mb-4 text-center">Architect with Valkyrie</h1>
                        <p className="text-xl text-gray-300 mb-6 text-center">Create user-facing experiences, new products, and new ways to work with the most advanced AI models on the market.</p>
                    </div>
                    <div className="space-x-4 flex flex-row justify-center">
                        <Link to="#"><button className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-200 transition">Start creating</button></Link>
                        <Link to="#"><button className="border border-white px-6 py-2 rounded-lg hover:bg-white hover:text-black transition">Documentation</button></Link>
                    </div>
                </div>

                <div className="flex-1 flex justify-center">
                    <a href="https://your-link.com" target="_blank" rel="noopener noreferrer">
                        <img src={apiImg} className="max-w-full" alt="Description of image" />
                    </a>
                </div>
            </div>

           
        </div>
    )
}