// src/component/Card.jsx

import React from "react";
import { useLocation } from "react-router-dom";

// Multiple card data
const cardData = [
    {
        title: "UI/UX Review Check",
        description:
            "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to 'Naviglio' where you can enjoy the main night life in Barcelona.",
        imageUrl:
            "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        buttonText: "Read More",
    },
    {
        title: "Mountain Adventures",
        description:
            "Explore the breathtaking mountains of the Swiss Alps, where adventure awaits for all hiking enthusiasts.",
        imageUrl:
            "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        buttonText: "Discover More",
    },
    {
        title: "Beach Getaway",
        description:
            "Relax and unwind at a beautiful beachside resort. Perfect for families and solo travelers alike.",
        imageUrl:
            "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        buttonText: "Plan Your Stay",
    },
];

const Card = ({ title, description, imageUrl, buttonText }) => {
    return (
        <div className="max-w-xs w-full mx-auto bg-white shadow-md rounded-lg overflow-hidden mb-6">
            <div className="relative h-56">
                <img
                    src={imageUrl}
                    alt="Card image"
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
                <p className="text-sm text-gray-600 mt-2">{description}</p>
            </div>
            <div className="p-4 pt-0">
                <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

const CardList = () => {
    const location = useLocation();

    // Filter or manipulate card data based on the route
    const filteredData =
        location.pathname === "/adventures"
            ? cardData.filter((card) => card.title.includes("Adventure"))
            : cardData;

    return (
        <div className="p-8 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filteredData.map((data, index) => (
                <Card
                    key={index}
                    title={data.title}
                    description={data.description}
                    imageUrl={data.imageUrl}
                    buttonText={data.buttonText}
                />
            ))}
        </div>
    );
};

export default CardList;
