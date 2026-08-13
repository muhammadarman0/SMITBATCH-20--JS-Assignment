// import js from "@eslint/js";
import React, { useEffect, useState } from "react";
// import "./Sidebar.css";

const Sidebar = ({ setSelectRecipe }) => {

    // const menuItems = [
    //     {
    //         id: 1,
    //         icon: "🍔",
    //         name: "Burgers"
    //     },
    //     {
    //         id: 2,
    //         icon: "🍕",
    //         name: "Pizza"
    //     },
    //     {
    //         id: 3,
    //         icon: "🍗",
    //         name: "Chicken"
    //     },
    //     {
    //         id: 4,
    //         icon: "🍝",
    //         name: "Pasta"
    //     },
    //     {
    //         id: 5,
    //         icon: "🥗",
    //         name: "Salads"
    //     },
    //     {
    //         id: 6,
    //         icon: "🍰",
    //         name: "Desserts"
    //     },
    //     {
    //         id: 7,
    //         icon: "🥤",
    //         name: "Drinks"
    //     },
    //     {
    //         id: 8,
    //         icon: "☕",
    //         name: "Coffee"
    //     }
    // ];

    let [recipes, setRecipe] = useState([])

    useEffect(() => {
        const getRecipe = async () => {
            let apiRecipe = await fetch(`http://dummyjson.com/recipes`)
            let data = await apiRecipe.json();

            setRecipe(data.recipes)
        }
        getRecipe()
    }, [])

    return (
        <>
            {console.log(recipes)}
            <aside className="sidebar">

                {/* Restaurant Header */}

                <div className="restaurantHeader">

                    <div className="restaurantLogo">
                        🍽️
                    </div>

                    <div>
                        <h2>Foodie</h2>
                        <span>Restaurant</span>
                    </div>

                </div>


                {/* Menu Heading */}

                <div className="menuHeading">
                    <span>OUR MENU</span>
                    <div></div>
                </div>


                {/* Recipe List */}

                <div className="recipeList">

                    {recipes.map((recipe) => {
                        let id = recipe.id;

                        return (
                            <div onClick={() => { setSelectRecipe(recipe) }}
                                className="recipeItem"
                                key={recipe.id}
                            >

                                <img
                                    src={recipe.image}
                                    alt={recipe.name}
                                />

                                <div className="recipeInfo">

                                    <h3>{recipe.name}</h3>

                                    <p>
                                        {recipe.cuisine}
                                    </p>

                                </div>

                                <span className="arrow">
                                    →
                                </span>

                            </div>)

                    })}

                </div>

            </aside>
        </>
    );
};

export default Sidebar;