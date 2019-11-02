const produkt = [
    {b: "p1", p: 5},
    {b: "p2", p: 3},
    {b: "p3", p: 1},
    {b: "p4", p: 2},

]

const list1 = [1,2,3,4];
let list2 = [];



list2 = produkt.filter((n)=>{
    return n.p > 2;
})
    .forEach((n)=>{
        console.log(n);
    })
console.log(list2);
