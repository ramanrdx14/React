const datas = [
    {id:"1",name:"Arsalan",cuisine:"north-indin chinese",rating:"4.1",distance:"7.2",image:"https://b.zmtcdn.com/data/pictures/chains/2/19418342/ea0909f4b70016f3c3b0104dca9300bc_o2_featured_v2.jpg?output-format=webp"},
    {id:"2",name:"Punjabi Masala",cuisine:"north-indin chinese",rating:"4.3",distance:"7.2",image:"https://b.zmtcdn.com/data/dish_photos/0a3/1b52d1824ab88de79b0740b8845080a3.jpg?output-format=webp"},
    {id:"3",name:"Brekers",cuisine:"north-indin chinese",rating:"4.3",distance:"7.2",image:"https://b.zmtcdn.com/data/dish_photos/6de/cf274539440049f131f77e56445976de.jpg?output-format=webp"},
    {id:"4",name:"Kunfuu Kitch",cuisine:"north-indin chinese",rating:"3.3",distance:"7.2",image:"https://b.zmtcdn.com/data/dish_photos/b21/44ec7cf2a9c4be5cdbfa78e5ba6a6b21.jpg?output-format=webp"},
    {id:"5",name:"Desi Chow",cuisine:"north-indin chinese",rating:"4.3",distance:"7.2",image:"https://b.zmtcdn.com/data/dish_photos/968/535abe6cbd7c79f864366f9b13aca968.png?output-format=webp q"},
    {id:"6",name:"Peter Hu?",cuisine:"north-indin chinese",rating:"4.3",distance:"7.2",image:"https://b.zmtcdn.com/data/pictures/2/21209662/6fa81b3770583e62109d3515704d56a4_o2_featured_v2.jpg?output-format=webp"},
    {id:"7",name:"Del Ti",cuisine:"north-indin chinese",rating:"3.9",distance:"7.2",image:"https://b.zmtcdn.com/data/dish_photos/d50/5bdffa700a2c936fe873de45e0d14d50.jpg"},
    {id:"8",name:"karims",cuisine:"north-indin chinese",rating:"2.3",distance:"7.2",image:"https://b.zmtcdn.com/data/pictures/chains/8/20906898/4f7bd2a0ffe99235a1cb75f524e7a925.jpg?fit=around|300:273&crop=300:273;*,*"},
    {id:"9",name:"Pakery",cuisine:"north-indin chinese",rating:"4.3",distance:"7.2",image:"https://b.zmtcdn.com/data/dish_photos/54f/a7206691f4791e169b27c40902c9754f.jpg"},
    {id:"10",name:"Biru Kitchen",cuisine:"north-indin chinese",rating:"4.3",distance:"7.2",image:"https://b.zmtcdn.com/data/dish_photos/09d/f640ee14920c613fdf5e9304d973a09d.jpg"},
    {id:"11",name:"Tung Fung",cuisine:"north-indin chinese",rating:"3.5",distance:"7.2",image:"https://b.zmtcdn.com/data/dish_photos/182/30905c8994fdff0c2138393350608182.jpg"}
]


const menus = {
    1:{name:"Arsalan",cuisine:"north-indin chinese",rating:"4.1",distance:"7.2",dishes:[
        {name:"EggRoll",price:"200"},{name:"Chow",price:"100"},{name:"Pasta",price:"200"},{name:"Chicken Briyani",price:"350"},{name:"Chicken Kasa",price:"250"},{name:"Paneer Chilli",price:"250"},{name:"Dosa",price:"150"},{name:"Mushroom",price:"190"}
    ]},
    2:{name:"Punjabi Masala",cuisine:"north-indin chinese",rating:"4.3",distance:"7.2",dishes:[
        {name:"EggRoll",price:"200"},{name:"EggRoll",price:"200"},{name:"EggRoll",price:"200"},{name:"EggRoll",price:"200"},{name:"EggRoll",price:"200"},{name:"EggRoll",price:"200"},{name:"EggRoll",price:"200"},{name:"EggRoll",price:"200"}
    ]},
    3:{name:"Brekers",cuisine:"north-indin chinese",rating:"4.3",distance:"7.2",dishes:[
        {name:"EggRoll",price:"200"},{name:"EggRoll",price:"200"},{name:"EggRoll",price:"200"},{name:"EggRoll",price:"200"},{name:"EggRoll",price:"200"},{name:"EggRoll",price:"200"},{name:"EggRoll",price:"200"},{name:"EggRoll",price:"200"}
    ]},
    4:{name:"Kunfuu Kitch",cuisine:"north-indin chinese",rating:"3.3",distance:"7.2",dishes:[
        {name:"EggRoll",price:"200"},{name:"EggRoll",price:"200"},{name:"EggRoll",price:"200"},{name:"EggRoll",price:"200"},{name:"EggRoll",price:"200"},{name:"EggRoll",price:"200"},{name:"EggRoll",price:"200"},{name:"EggRoll",price:"200"}
    ]}
    ,5:{name:"Desi Chow",cuisine:"north-indin chinese",rating:"4.3",distance:"7.2",dishes:[
        {name:"EggRoll",price:"200"},{name:"EggRoll",price:"200"},{name:"EggRoll",price:"200"},{name:"EggRoll",price:"200"},{name:"EggRoll",price:"200"},{name:"EggRoll",price:"200"},{name:"EggRoll",price:"200"},{name:"EggRoll",price:"200"}
    ]}
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

