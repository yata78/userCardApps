function fruitImgUrlTable(fruit){
    const fruitTable = {
        "banana": "https://www.kroger.com/product/images/xlarge/front/0000000004011",
        "pineapple": "https://www.kroger.com/product/images/medium/front/0000000004430",
        "pear": "https://www.producemarketguide.com/media/user_RZKVrm5KkV/22481/forelle-pears_variety-page.png"
    }

    const defaultURL = "https://upload.wikimedia.org/wikipedia/commons/2/2f/Culinary_fruits_front_view.jpg";

    return fruitTable[fruit] !== undefined ? fruitTable[fruit] : defaultURL;
}

function renderFruit(fruit, ele){
    let fruitP = document.createElement("p");
    fruitP.innerHTML = "Our fruit is " + fruit;

    let fruitImg = document.createElement("img");

    fruitImg.src = fruitImgUrlTable(fruit);

    fruitImg.classList.add("fruitImg");

    let fruitDiv = document.createElement("div");

    fruitDiv.classList.add("fruitDiv");
    fruitDiv.append(fruitP);
    fruitDiv.append(fruitImg);

    ele.append(fruitDiv);
}

let fruitContainer = document.getElementById("fruit-container");
renderFruit("banana", fruitContainer);
renderFruit("pear", fruitContainer);
renderFruit("pineapple", fruitContainer);
renderFruit("coconut", fruitContainer);
renderFruit("grape", fruitContainer);