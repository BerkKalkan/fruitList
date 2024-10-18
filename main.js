let fruitList = [];

function listFruits(){
    console.log("olusturulan liste:")
    for(const newFruits of fruitList){
        console.log((fruitList.indexOf(newFruits) + 1)+". meyve: "+newFruits)
    }
};

function getInput(){
    let manyFruit = Number(prompt("kac adet meyve gireceksin?"));

    for (let i = 0; i < manyFruit; i++) {
        let newFruit = prompt( i + 1 +". meyveyi gir")
        fruitList.push(newFruit);
    };
    listFruits();
};