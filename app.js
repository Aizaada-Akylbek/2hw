//ООП Объектно-ориентированное программирование 

// const fruit={
//     title:'apple', 
//     region:{
//         ja:['stakanchik', 'raechka', 'kitaika'], 
//         ik: ['aport', 'tash alma', 'karlik']
//     },
//     colors:['yellow', 'red', 'green']

// }

// console.log(fruit.title);
// console.log(fruit.region.ja[1]);

// class Fruits{
//     constructor(option){
//         this.title=option.title
//         this.size=option.size
//     }
//     color(color){
//         console.log(`${this.title} is a ${color} color `);
//     }
// }
// class WildFruits extends Fruits {
//     constructor(option){
//         super(option)
//         this.isDanger=option.isDanger
//         this.leaves=option.leaves
//     }
// }
// class HomeFruits extends Fruits{
//     constructor(option){
//         super(option)
//         this.taste=option.taste
//         this.tushum=option.tushum
//     }
// }

// class ImportHomeFruits extends HomeFruits{
//     constructor(option){
//         super(option)
//         this.tree=option.tree
//         this.country=option.country
//     }
// }

// const grape=new ImportHomeFruits({
//     country:'Uzbekistan', 
//     title:'damskie palochki', 
//     size:'small', 
//     taste:'sweet', 
//     tushum:'100 tonna', 
//     tree:true
// })
// console.log(grape);

// const soz=new RegExp('eshek')
const title=document.querySelector('.title')
const input=document.querySelector('input')
const img=document.querySelector('img')

const soz=/eshek/ig
const comment=input.value
const comment1='Salam dos'

console.log(soz.test(comment1));
console.log(comment.match(soz));
console.log(comment.replace(soz, 'dos'))

input.onchange=()=>{
    if(soz.test(input.value)){
        console.log(input.value.replace(soz, '****'));
        title.innerHTML=input.value.replace(soz, '****')
        img.src='https://contenthub-static.grammarly.com/blog/wp-content/uploads/2023/06/bmd-4746.png'

    } else {
        title.innerHTML=input.value

    }
}
