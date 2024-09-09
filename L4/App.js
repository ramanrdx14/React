import React from "react";
import ReactDOM from "react-dom/client"
//Components Reaquired:

/*
    1. header
       -> logo
       -> nav links

    2. Body
        -> search bar
        -> cards

    3. Footer
        -> links
        -> addaress
        -> contacts
*/
const data = [
    {name:"Arsalan",cuisine:"north-indin chinese",rating:"4.3",distance:"7.2",image:"https://b.zmtcdn.com/data/pictures/chains/2/19418342/ea0909f4b70016f3c3b0104dca9300bc_o2_featured_v2.jpg?output-format=webp"},
    {name:"Punjabi Masala",cuisine:"north-indin chinese",rating:"4.3",distance:"7.2",image:"https://b.zmtcdn.com/data/dish_photos/0a3/1b52d1824ab88de79b0740b8845080a3.jpg?output-format=webp"},
    {name:"Brekers",cuisine:"north-indin chinese",rating:"4.3",distance:"7.2",image:"https://b.zmtcdn.com/data/dish_photos/6de/cf274539440049f131f77e56445976de.jpg?output-format=webp"},
    {name:"Kunfuu Kitch",cuisine:"north-indin chinese",rating:"4.3",distance:"7.2",image:"https://b.zmtcdn.com/data/dish_photos/b21/44ec7cf2a9c4be5cdbfa78e5ba6a6b21.jpg?output-format=webp"},
    {name:"Desi Chow",cuisine:"north-indin chinese",rating:"4.3",distance:"7.2",image:"https://b.zmtcdn.com/data/dish_photos/968/535abe6cbd7c79f864366f9b13aca968.png?output-format=webp q"},
    {name:"Peter Hu?",cuisine:"north-indin chinese",rating:"4.3",distance:"7.2",image:"https://b.zmtcdn.com/data/pictures/2/21209662/6fa81b3770583e62109d3515704d56a4_o2_featured_v2.jpg?output-format=webp"},
    {name:"Del Ti",cuisine:"north-indin chinese",rating:"4.3",distance:"7.2",image:"https://b.zmtcdn.com/data/dish_photos/d50/5bdffa700a2c936fe873de45e0d14d50.jpg"},
    {name:"karims",cuisine:"north-indin chinese",rating:"4.3",distance:"7.2",image:"https://b.zmtcdn.com/data/dish_photos/695/3cf0b0fe75dbcdbc4f691c81d7c9a695.jpeg"},
    {name:"Pakery",cuisine:"north-indin chinese",rating:"4.3",distance:"7.2",image:"https://b.zmtcdn.com/data/dish_photos/54f/a7206691f4791e169b27c40902c9754f.jpg"},
    {name:"Biru Kitchen",cuisine:"north-indin chinese",rating:"4.3",distance:"7.2",image:"https://b.zmtcdn.com/data/dish_photos/09d/f640ee14920c613fdf5e9304d973a09d.jpg"},
    {name:"Tung Fung",cuisine:"north-indin chinese",rating:"4.3",distance:"7.2",image:"https://b.zmtcdn.com/data/dish_photos/182/30905c8994fdff0c2138393350608182.jpg"}
]

const Header = ()=>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://fbcd.co/images/products/3802636c168b62fd041fdec5b263b9a0_resize.png"></img>
            </div>
            <div className="navlinks">
                <ul>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const Card = (resdata)=>{
    const {name,cuisine,image,distance,rating} = resdata.resdata;
    console.log(resdata);
    console.log(name,cuisine,image,distance,rating);
    return (
        <div className="card">
            <img src={image}></img>
            <div>{name}</div>
            <div>{cuisine}</div>
            <div>{rating} stars</div>
            <div>{distance} kilometers</div>
        </div>
    )
}

const Body = ()=>{
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="cardbody">
            {
                data.map(restaurent=><Card resdata={restaurent}></Card>)
            }
            </div>
        </div>
    )
}

const AppLayout = ()=>{
return (
    <div className="applayout">
        <Header></Header>
        <Body></Body>
    </div>
)
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout></AppLayout>)

