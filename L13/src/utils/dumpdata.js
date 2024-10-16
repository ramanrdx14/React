const datas = [
    {id:"1",permoted:false,name:"Arsalan",cuisine:"north-indin chinese",rating:"4.1",distance:"3.45",image:"https://b.zmtcdn.com/data/pictures/chains/2/19418342/ea0909f4b70016f3c3b0104dca9300bc_o2_featured_v2.jpg?output-format=webp"},
    {id:"2",permoted:true,name:"Punjabi Masala",cuisine:"north-indin chinese",rating:"5.78",distance:"7.2",image:"https://b.zmtcdn.com/data/dish_photos/0a3/1b52d1824ab88de79b0740b8845080a3.jpg?output-format=webp"},
    {id:"3",permoted:false,name:"Brekers",cuisine:"north-indin chinese",rating:"4.3",distance:"7.22",image:"https://b.zmtcdn.com/data/dish_photos/6de/cf274539440049f131f77e56445976de.jpg?output-format=webp"},
    {id:"4",permoted:true,name:"Kunfuu Kitch",cuisine:"north-indin chinese",rating:"3.3",distance:"1.2",image:"https://b.zmtcdn.com/data/dish_photos/b21/44ec7cf2a9c4be5cdbfa78e5ba6a6b21.jpg?output-format=webp"},
    {id:"5",permoted:true,name:"Desi Chow",cuisine:"north-indin chinese",rating:"4.3",distance:"5.2",image:"https://b.zmtcdn.com/data/dish_photos/968/535abe6cbd7c79f864366f9b13aca968.png?output-format=webp q"},
    {id:"6",permoted:false,name:"Peter Hu?",cuisine:"north-indin chinese",rating:"4.3",distance:"11.2",image:"https://b.zmtcdn.com/data/pictures/2/21209662/6fa81b3770583e62109d3515704d56a4_o2_featured_v2.jpg?output-format=webp"},
    {id:"7",permoted:false,name:"Del Ti",cuisine:"north-indin chinese",rating:"3.9",distance:"7.2",image:"https://b.zmtcdn.com/data/dish_photos/d50/5bdffa700a2c936fe873de45e0d14d50.jpg"},
    {id:"8",permoted:false,name:"karims",cuisine:"north-indin chinese",rating:"2.3",distance:"3.2",image:"https://b.zmtcdn.com/data/pictures/chains/8/20906898/4f7bd2a0ffe99235a1cb75f524e7a925.jpg?fit=around|300:273&crop=300:273;*,*"},
    {id:"9",permoted:false,name:"Pakery",cuisine:"north-indin chinese",rating:"4.3",distance:"12.2",image:"https://b.zmtcdn.com/data/dish_photos/54f/a7206691f4791e169b27c40902c9754f.jpg"},
    {id:"10",permoted:false,name:"Biru Kitchen",cuisine:"north-indin chinese",rating:"4.3",distance:"7.2",image:"https://b.zmtcdn.com/data/dish_photos/09d/f640ee14920c613fdf5e9304d973a09d.jpg"},
    {id:"11",permoted:false,name:"Tung Fung",cuisine:"north-indin chinese",rating:"3.5",distance:"9.2",image:"https://b.zmtcdn.com/data/dish_photos/182/30905c8994fdff0c2138393350608182.jpg"}
]


const menus = {
        1: {
          name: "Arsalan",
          cuisine: "North Indian Chinese",
          rating: "4.1",
          distance: "7.2",
          dishes: [
            {
              "Veg": [
                { name: "Paneer Chilly", price: 250 ,image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/692849f35effd3621838790c1389c02f",rating:"4.8",orderCount:70},
                { name: "Dal Makhni", price: 300 ,image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/wfq92zk3kss0vbdgoulf",rating:"3.7",orderCount:70},
                { name: "Mushroom Masala", price: 240 ,image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/4/16/83b08127-229e-4ea0-b0cf-2efa874a2fb1_aab16e87-df31-4905-ba09-e8db428eebfd.jpeg",rating:"4.2",orderCount:70}
              ]
            },
            {
              "Non-Veg": [
                { name: "Chicken Biryani", price: 450 ,image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/7/23/caef69bd-ae44-429a-bd6a-834ab66af8fb_c90a9537-4a3f-4ee1-b073-87033f50eadd.JPG",rating:"4.8",orderCount:70},
                { name: "Mutton Rogan Josh", price: 600 ,image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/13/0f26fc1d-4055-4700-84df-503c9473ea59_049e26a5-47b6-4c7a-85a5-7e4159f254ff.jpg",rating:"4.2",orderCount:70},
                { name: "Fish Curry", price: 500 ,image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/nkgmotigo3crhistijm4",rating:"4.4",orderCount:70}
              ]
            },
            {
              "Rolls": [
                { name: "Veg Roll", price: 150 ,image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/0e3e61c292fcc398b3a53cbd2a3ea8ab",rating:"4.2",orderCount:70},
                { name: "Chicken Roll", price: 200 ,image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/e33b232690d715d740431f779291335f",rating:"2.2",orderCount:70},
                { name: "Mutton Roll", price: 250 ,image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/f733b22e41a211d4761278de977bc0e3",rating:"4.8",orderCount:70}
              ]
            },
            {
              "Ice-Creams": [
                { name: "Vanilla", price: 100 ,image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/xabycavczleyuwdln6ot",rating:"5",orderCount:70},
                { name: "Chocolate", price: 120 ,image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/6/71c232d4-4d08-4abf-b57d-b3380a90921c_900653.jpg",rating:"5",orderCount:70},
                { name: "Strawberry", price: 150 ,image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/b9f3278aa437785772e368cfe584b342",rating:"5",orderCount:70}
              ]
            }
          ]
        },
        2: {
          name: "Bistro",
          cuisine: "Italian",
          rating: "4.5",
          distance: "5.0",
          dishes: [
            {
              "Veg": [
                { name: "Margherita Pizza", price: 400 },
                { name: "Pasta Primavera", price: 350 },
                { name: "Caprese Salad", price: 300 }
              ]
            },
            {
              "Non-Veg": [
                { name: "Chicken Alfredo", price: 500 },
                { name: "Beef Lasagna", price: 600 },
                { name: "Shrimp Scampi", price: 550 }
              ]
            },
            {
              "Rolls": [
                { name: "Italian Wrap", price: 200 },
                { name: "Chicken Fajita Roll", price: 250 }
              ]
            },
            {
              "Ice-Creams": [
                { name: "Pistachio", price: 120 },
                { name: "Tiramisu", price: 180 }
              ]
            }
          ]
        },
        3: {
          name: "Sushi Spot",
          cuisine: "Japanese",
          rating: "4.8",
          distance: "3.5",
          dishes: [
            {
              "Veg": [
                { name: "Avocado Roll", price: 250 },
                { name: "Veg Tempura", price: 300 }
              ]
            },
            {
              "Non-Veg": [
                { name: "Salmon Sashimi", price: 500 },
                { name: "Tuna Nigiri", price: 450 }
              ]
            },
            {
              "Rolls": [
                { name: "Dragon Roll", price: 600 },
                { name: "California Roll", price: 400 }
              ]
            },
            {
              "Ice-Creams": [
                { name: "Green Tea", price: 150 },
                { name: "Mochi Ice Cream", price: 200 }
              ]
            }
          ]
        },
        4: {
          name: "Curry House",
          cuisine: "Indian",
          rating: "4.2",
          distance: "6.5",
          dishes: [
            {
              "Veg": [
                { name: "Paneer Butter Masala", price: 350 },
                { name: "Chana Masala", price: 220 }
              ]
            },
            {
              "Non-Veg": [
                { name: "Butter Chicken", price: 450 },
                { name: "Lamb Vindaloo", price: 550 }
              ]
            },
            {
              "Rolls": [
                { name: "Kathi Roll", price: 180 }
              ]
            },
            {
              "Ice-Creams": [
                { name: "Mango", price: 120 },
                { name: "Kulfi", price: 150 }
              ]
            }
          ]
        },
        5: {
          name: "Pasta Palace",
          cuisine: "Italian",
          rating: "4.4",
          distance: "4.0",
          dishes: [
            {
              "Veg": [
                { name: "Fettuccine Alfredo", price: 400 },
                { name: "Penne Arrabbiata", price: 350 }
              ]
            },
            {
              "Non-Veg": [
                { name: "Chicken Carbonara", price: 500 },
                { name: "Salmon Linguine", price: 600 }
              ]
            },
            {
              "Rolls": [
                { name: "Veg Spring Roll", price: 150 }
              ]
            },
            {
              "Ice-Creams": [
                { name: "Hazelnut", price: 120 }
              ]
            }
          ]
        },
        6: {
          name: "Tex-Mex Grill",
          cuisine: "Mexican",
          rating: "4.6",
          distance: "5.5",
          dishes: [
            {
              "Veg": [
                { name: "Vegetarian Tacos", price: 250 },
                { name: "Chili Cheese Nachos", price: 200 }
              ]
            },
            {
              "Non-Veg": [
                { name: "Chicken Quesadilla", price: 300 },
                { name: "Beef Burrito", price: 400 }
              ]
            },
            {
              "Rolls": [
                { name: "Chili Roll", price: 180 }
              ]
            },
            {
              "Ice-Creams": [
                { name: "Coconut", price: 150 }
              ]
            }
          ]
        },
        7: {
          name: "Burger Town",
          cuisine: "American",
          rating: "4.3",
          distance: "8.0",
          dishes: [
            {
              "Veg": [
                { name: "Veggie Burger", price: 200 },
                { name: "Sweet Potato Fries", price: 150 }
              ]
            },
            {
              "Non-Veg": [
                { name: "Cheeseburger", price: 350 },
                { name: "Chicken Wings", price: 300 }
              ]
            },
            {
              "Rolls": [
                { name: "Chicken Roll", price: 220 }
              ]
            },
            {
              "Ice-Creams": [
                { name: "Mint Chocolate Chip", price: 120 }
              ]
            }
          ]
        },
        8: {
          name: "Mediterranean Diner",
          cuisine: "Mediterranean",
          rating: "4.7",
          distance: "4.5",
          dishes: [
            {
              "Veg": [
                { name: "Hummus Platter", price: 250 },
                { name: "Falafel Wrap", price: 300 }
              ]
            },
            {
              "Non-Veg": [
                { name: "Grilled Chicken Shawarma", price: 400 },
                { name: "Lamb Kebab", price: 500 }
              ]
            },
            {
              "Rolls": [
                { name: "Pita Roll", price: 180 }
              ]
            },
            {
              "Ice-Creams": [
                { name: "Baklava Ice Cream", price: 200 }
              ]
            }
          ]
        },
        9: {
          name: "Baker's Delight",
          cuisine: "Bakery",
          rating: "4.8",
          distance: "3.0",
          dishes: [
            {
              "Veg": [
                { name: "Veg Sandwich", price: 100 },
                { name: "Stuffed Bread", price: 150 }
              ]
            },
            {
              "Non-Veg": [
                { name: "Chicken Sandwich", price: 200 },
                { name: "Tuna Salad", price: 250 }
              ]
            },
            {
              "Rolls": [
                { name: "Veg Roll", price: 100 },
                { name: "Chicken Roll", price: 150 }
              ]
            },
            {
              "Ice-Creams": [
                { name: "Vanilla Cone", price: 70 },
                { name: "Chocolate Sundae", price: 120 }
              ]
            }
          ]
        },
        10: {
          name: "Spicy Delights",
          cuisine: "Indian",
          rating: "4.2",
          distance: "6.2",
          dishes: [
            {
              "Veg": [
                { name: "Paneer Tikka", price: 350 },
                { name: "Palak Paneer", price: 300 }
              ]
            },
            {
              "Non-Veg": [
                { name: "Spicy Chicken Curry", price: 500 },
                { name: "Fish Tikka", price: 400 }
              ]
            },
            {
              "Rolls": [
                { name: "Spicy Roll", price: 200 }
              ]
            },
            {
              "Ice-Creams": [
                { name: "Choco Chip", price: 150 }
              ]
            }
          ]
        },
        11: {
          name: "Noodle House",
          cuisine: "Asian",
          rating: "4.5",
          distance: "3.7",
          dishes: [
            {
              "Veg": [
                { name: "Veg Noodles", price: 300 },
                { name: "Spring Rolls", price: 200 }
              ]
            },
            {
              "Non-Veg": [
                { name: "Chicken Chow Mein", price: 400 },
                { name: "Prawn Fried Rice", price: 500 }
              ]
            },
            {
              "Rolls": [
                { name: "Asian Roll", price: 250 }
              ]
            },
            {
              "Ice-Creams": [
                { name: "Mango Sorbet", price: 130 }
              ]
            }
          ]
        },
        12: {
          name: "Taco Fiesta",
          cuisine: "Mexican",
          rating: "4.1",
          distance: "7.0",
          dishes: [
            {
              "Veg": [
                { name: "Veg Tacos", price: 220 },
                { name: "Guacamole", price: 150 }
              ]
            },
            {
              "Non-Veg": [
                { name: "Fish Tacos", price: 400 },
                { name: "Chicken Fajitas", price: 500 }
              ]
            },
            {
              "Rolls": [
                { name: "Spicy Chicken Roll", price: 230 }
              ]
            },
            {
              "Ice-Creams": [
                { name: "Churros Ice Cream", price: 180 }
              ]
            }
          ]
        },
        13: {
          name: "Healthy Eats",
          cuisine: "Healthy",
          rating: "4.6",
          distance: "5.8",
          dishes: [
            {
              "Veg": [
                { name: "Quinoa Salad", price: 300 },
                { name: "Grilled Veggies", price: 250 }
              ]
            },
            {
              "Non-Veg": [
                { name: "Grilled Chicken Salad", price: 400 },
                { name: "Salmon Bowl", price: 500 }
              ]
            },
            {
              "Rolls": [
                { name: "Veg Wrap", price: 200 }
              ]
            },
            {
              "Ice-Creams": [
                { name: "Frozen Yogurt", price: 150 }
              ]
            }
          ]
        },
        14: {
          name: "Dim Sum Palace",
          cuisine: "Chinese",
          rating: "4.3",
          distance: "4.1",
          dishes: [
            {
              "Veg": [
                { name: "Veg Dumplings", price: 300 },
                { name: "Tofu Stir Fry", price: 350 }
              ]
            },
            {
              "Non-Veg": [
                { name: "Pork Dumplings", price: 400 },
                { name: "Chili Chicken", price: 450 }
              ]
            },
            {
              "Rolls": [
                { name: "Spring Roll", price: 150 }
              ]
            },
            {
              "Ice-Creams": [
                { name: "Lychee Ice Cream", price: 130 }
              ]
            }
          ]
        },
        15: {
          name: "Sweet Tooth",
          cuisine: "Desserts",
          rating: "4.9",
          distance: "2.5",
          dishes: [
            {
              "Veg": [
                { name: "Cheesecake", price: 250 },
                { name: "Chocolate Cake", price: 300 }
              ]
            },
            {
              "Non-Veg": [
                { name: "Pecan Pie", price: 350 }
              ]
            },
            {
              "Rolls": [
                { name: "Cinnamon Roll", price: 180 }
              ]
            },
            {
              "Ice-Creams": [
                { name: "Rocky Road", price: 200 }
              ]
            }
          ]
        }
      }      


export const menu = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(menus);
        }, 500);
})
}

export const data = ()=>{
    return new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve(datas);
            }, 500);
    })
}

