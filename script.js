// For Blog image carousel slider
var left = 1;
var right = 3;
function showBlogs() {
    for (i = left; i <= right; i++) {
        document.getElementById("blog" + i).style.display = "inline-block";
    }
};

function moveRight() {
    if (left <= 3 && right <= 5) {
        document.getElementById("blog" + left).style.display = "none";
        left += 1;
        right += 1;
        for (i = left; i <= right; i++) {
            document.getElementById("blog" + i).style.display = "inline-block";
        }
    }
    else {
        return;
    }
};


function moveLeft() {
    if (left >= 2 && right <= 6) {
        document.getElementById("blog" + right).style.display = "none";
        left -= 1;
        right -= 1;
        for (i = left; i <= right; i++) {
            document.getElementById("blog" + i).style.display = "inline-block";
        }
    }
    else {
        return;
    }
};


//For new arrival section
function showProducts() {
    fetch('products.JSON').then((data) => {
        id = "item${element.id}"
        return data.json();
    }).then((data) => {
        let html = "";
        for (let i = 0; i < 15; i++) {
            html += `
                <div class="item" id="item${data[i].id}">
                <img src="${data[i].image}" alt="">
                <h4>${data[i].description}</h4>
                <h5>$${data[i].price}</h5>
                <button id="${data[i].id}" onclick="addToCart(this.id); redirect(); updateCartTotal()">ADD TO CART</button>
             </div>
                `;
        }
        document.querySelector(".shopitems").innerHTML = html;
    });
}

function showAllProducts() {
    fetch('products.JSON').then((data) => {
        return data.json();
    }).then((data) => {
        let html = "";
        data.forEach(element => {
            html += `
                <div class="item" id="item${element.id}">
                <img src="${element.image}" alt="">
                <h4>${element.description}</h4>
                <h5>$${element.price}</h5>
                <button id="${element.id}" onclick="addToCart(this.id); redirect()">ADD TO CART</button>
             </div>
                `;
        });
        document.querySelector(".shopitems").innerHTML = html;
    });
}

function showWomenProduct() {
    fetch('products.JSON').then((data) => {
        return data.json();
    }).then((data) => {
        let html = "";
        data.forEach(element => {
            let category = element.category;
            category = category.toLowerCase();
            if (category.includes("women")) {
                html += `
                <div class="item" id="item${element.id}">
                <img src="${element.image}" alt="">
                <h4>${element.description}</h4>
                <h5>$${element.price}</h5>
                <button id="${element.id}" onclick="addToCart(this.id); redirect()">ADD TO CART</button>
             </div>
                `;
            }
        });
        document.querySelector(".shopitems").innerHTML = html;
    });
}

function showMenProduct() {
    fetch('products.JSON').then((data) => {
        return data.json();
    }).then((data) => {
        let html = "";
        data.forEach(element => {
            let category = element.category;
            category = category.toLowerCase();
            if (category.includes("men") && !category.includes("women")) {
                html += `
                <div class="item" id="item${element.id}">
                <img src="${element.image}" alt="">
                <h4>${element.description}</h4>
                <h5>$${element.price}</h5>
                <button id="${element.id}" onclick="addToCart(this.id); redirect()">ADD TO CART</button>
             </div>
                `;
            }
        });
        document.querySelector(".shopitems").innerHTML = html;
    });
}

function showAccessories() {
    fetch('products.JSON').then((data) => {
        return data.json();
    }).then((data) => {
        let html = "";
        data.forEach(element => {
            let category = element.category;
            category = category.toLowerCase();
            if (category.includes("accessories")) {
                html += `
                <div class="item" id="item${element.id}">
                <img src="${element.image}" alt="">
                <h4>${element.description}</h4>
                <h5>$${element.price}</h5>
                <button id="${element.id}" onclick="addToCart(this.id); redirect()">ADD TO CART</button>
             </div>
                `;
            }
        });
        document.querySelector(".shopitems").innerHTML = html;
    });
}

//Applying filters for product page
// 1. By Category

function displayByCategory() {
    var choice = document.getElementById("category");
    if (choice.value == "all") {
        fetch('products.JSON').then((data) => {
            return data.json();
        }).then((data) => {
            let html = "";
            data.forEach(element => {
                html += `
                    <div class="item" id="item${element.id}">
                    <img src="${element.image}" alt="">
                    <h4>${element.description}</h4>
                    <h5>$${element.price}</h5>
                    <button id="${element.id}" onclick="addToCart(this.id); redirect()">ADD TO CART</button>
                 </div>
                    `;
            });
            document.querySelector(".shopitems").innerHTML = html;
        });
    }
    else if (choice.value == "men") {
        fetch('products.JSON').then((data) => {
            return data.json();
        }).then((data) => {
            let html = "";
            data.forEach(element => {
                let category = element.category;
                category = category.toLowerCase();
                if (category.includes("men") && !category.includes("women")) {
                    html += `
                    <div class="item" id="item${element.id}">
                    <img src="${element.image}" alt="">
                    <h4>${element.description}</h4>
                    <h5>$${element.price}</h5>
                    <button id="${element.id}" onclick="addToCart(this.id); redirect()">ADD TO CART</button>
                 </div>
                    `;
                }
            });
            document.querySelector(".shopitems").innerHTML = html;
        });
    }

    else if (choice.value == "women") {
        fetch('products.JSON').then((data) => {
            return data.json();
        }).then((data) => {
            let html = "";
            data.forEach(element => {
                let category = element.category;
                category = category.toLowerCase();
                if (category.includes("women")) {
                    html += `
                        <div class="item" id="item${element.id}">
                        <img src="${element.image}" alt="">
                        <h4>${element.description}</h4>
                        <h5>$${element.price}</h5>
                        <button id="${element.id}" onclick="addToCart(this.id); redirect()">ADD TO CART</button>
                     </div>
                        `;
                }
            });
            document.querySelector(".shopitems").innerHTML = html;
        });
    }

    else if (choice.value == "accessories") {
        fetch('products.JSON').then((data) => {
            return data.json();
        }).then((data) => {
            let html = "";
            data.forEach(element => {
                let category = element.category;
                category = category.toLowerCase();
                if (category.includes("accessories")) {
                    html += `
                    <div class="item" id="item${element.id}">
                    <img src="${element.image}" alt="">
                    <h4>${element.description}</h4>
                    <h5>$${element.price}</h5>
                    <button id="${element.id}" onclick="addToCart(this.id); redirect()">ADD TO CART</button>
                 </div>
                    `;
                }
            });
            document.querySelector(".shopitems").innerHTML = html;
        });
    }
}

// 2. By Price
function sortByPrice() {
    var choice = document.getElementById("price");
    if (choice.value == "default") {
        fetch('products.JSON').then((data) => {
            return data.json();
        }).then((data) => {
            let html = "";
            data.forEach(element => {
                html += `
                    <div class="item" id="item${element.id}">
                    <img src="${element.image}" alt="">
                    <h4>${element.description}</h4>
                    <h5>$${element.price}</h5>
                    <button id="${element.id}" onclick="addToCart(this.id); redirect()">ADD TO CART</button>
                 </div>
                    `;
            });
            document.querySelector(".shopitems").innerHTML = html;
        });
    }
    else if (choice.value == "ascending") {
        fetch('products.JSON').then((data) => {
            return data.json();
        }).then((data) => {
            data.sort(function (a, b) { return a.price - b.price });
            let html = "";
            data.forEach(element => {
                html += `
                    <div class="item" id="item${element.id}">
                    <img src="${element.image}" alt="">
                    <h4>${element.description}</h4>
                    <h5>$${element.price}</h5>
                    <button id="${element.id}" onclick="addToCart(this.id); redirect()">ADD TO CART</button>
                 </div>
                    `;
            });
            document.querySelector(".shopitems").innerHTML = html;
        });
    }
    else if (choice.value == "descending")
        fetch('products.JSON').then((data) => {
            return data.json();
        }).then((data) => {
            data.sort(function (a, b) { return b.price - a.price });
            let html = "";
            data.forEach(element => {
                html += `
                    <div class="item" id="item${element.id}">
                    <img src="${element.image}" alt="">
                    <h4>${element.description}</h4>
                    <h5>$${element.price}</h5>
                    <button id="${element.id}" onclick="addToCart(this.id); redirect()">ADD TO CART</button>
                 </div>
                    `;
            });
            document.querySelector(".shopitems").innerHTML = html;
        });
}

// Rempve duplicate
function removeDuplicate() {
    let cart = localStorage.getItem("cart");
    if (cart == null) {
        cartObj = [];
    }
    else {
        cartObj = JSON.parse(cart);
    }
    let len = cartObj.length;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (JSON.stringify(cartObj[i].Obj) == JSON.stringify(cartObj[j].Obj)) {
                console.log("deleted");
                cartObj.splice(j, 1);
                len--;
            }
        }
    }
    localStorage.setItem("cart", JSON.stringify(cartObj));
    console.log("done");
}
//Cart Section

function addToCart(btn_id) {
    let cart = localStorage.getItem("cart");
    if (cart == null) {
        cartObj = [];
    }
    else {
        cartObj = JSON.parse(cart);
    }
    fetch('products.JSON').then((data) => {
        return data.json();
    }).then((data) => {
        let objQty = {
            Obj: data[btn_id - 1],
            quantity: 1
        }
        for (let i = 0; i < cartObj.length; i++) {
            if (JSON.stringify(cartObj[i].Obj) == JSON.stringify(data[btn_id - 1])) {
                cartObj[i].quantity++;
            }
        }
        cartObj.push(objQty);
        localStorage.setItem("cart", JSON.stringify(cartObj));
        removeDuplicate();
    });
    alert("Product added to cart.");
    updateCartTotal();
    window.location.reload();
}

//To update cart total
function updateCartTotal() {
    let cart = localStorage.getItem("cart");
    if (cart == null) {
        cartObj = [];
    }
    else {
        cartObj = JSON.parse(cart);
    }
    let carttotal = 0;
    cartObj.forEach(element => {
        carttotal += element.quantity;
    });
    document.querySelector(".carttotal").innerHTML = carttotal;
}
setInterval(() => {
    updateCartTotal();
},100);

//To show number of items in cart

function showCartItems() {
    let total = 0;
    let cart = localStorage.getItem("cart");
    if (cart == null) {
        cartObj = [];
    }
    else {
        cartObj = JSON.parse(cart);
    }
    let html = "";
    cartObj.forEach(element => {
        let producttotal = element.Obj.price * element.quantity;
        total = total + producttotal;
        html += `<div class="cartitemcontainer">
        <div class="cartitem">
            <img src="${element.Obj.image}" alt="">
            <div class="cartiteminfo">
                <h4>${element.Obj.description}</h4>
                <p>INR ${element.Obj.price}</p>
            </div>
        </div>
        <div class="cartitemfoot">
            <div class="cartqty">
            <button class="minus" id="${element.Obj.id}" onclick="decrease(this.id); ">-</button><p> ${element.quantity} </p> 
            <button
                class="plus" id="${element.Obj.id}" onclick="increase(this.id);">+</button>
            </div>
            <button class="removebtn" id="${element.Obj.id}" onclick="remove(this.id)">Remove</button>
        </div>
    </div>
    <hr>`;
    });
    // if (!total == 0) {
    //     document.querySelector(".msg").innerHTML = "";
    // }
    // else {
    //     document.querySelector(".cartitemcontainer").style.border = '0px';
    // }
    document.querySelector(".cartitemscontainer").innerHTML += html;
    var shipping;
    var subtotal=total;
    if(total<=500){
        shipping="INR 40";
        subtotal+=40;
    }
    else{
        shipping='Free';
    }
    document.querySelector(".cartsummary").innerHTML += `
    <h3>Cart Summary</h3> 
    <p>Total Price: INR ${total}</p> 
    <hr> 
    <p>Shipping: ${shipping}</p>
    <hr>
    <p>Subtotal: INR ${subtotal}</p>
    <div class="summarybtn">
    <a href="./AllProducts.html"><button class="shopmore">Shop More</button></a>
    <button class="placeorder" onclick="PlaceOrder()">Place Order</button>
    </div> `;
}

function redirect() {
    // var newtab = window.open('./Cart.html'); to open cart in different window after updation
    // newtab.document.location.reload(true);
    window.location.href = "./Cart.html";
}

function remove(btn_id) {
    let cart = localStorage.getItem("cart");
    if (cart == null) {
        cartObj = [];
    }
    else {
        cartObj = JSON.parse(cart);
    }
    for (let i = 0; i < cartObj.length; i++) {
        if (cartObj[i].Obj.id == btn_id) {
            cartObj.splice(i, 1);
            break;
        }
    }
    localStorage.setItem("cart", JSON.stringify(cartObj));
    window.location.reload();
}

function PlaceOrder() {
    localStorage.clear();
    alert("Your order has been successfully placed");
    window.location.reload();
}

// Incereasing and decreasing quantity using + and -
function decrease(btn_id) {
    let cart = localStorage.getItem("cart");
    if (cart == null) {
        cartObj = [];
    }
    else {
        cartObj = JSON.parse(cart);
    }
    cartObj.forEach(element => {

        if (element.Obj.id == btn_id) {
            if (element.quantity == 1) {
                remove(btn_id);
            }
            if (element.quantity > 0) {
                element.quantity--;
            }
        }
    });
    localStorage.setItem("cart", JSON.stringify(cartObj));
    window.location.reload();
}

function increase(btn_id) {
    let cart = localStorage.getItem("cart");
    if (cart == null) {
        cartObj = [];
    }
    else {
        cartObj = JSON.parse(cart);
    }
    cartObj.forEach(element => {
        console.log(btn_id);
        if (element.Obj.id == btn_id) {
            element.quantity++;
            console.log(element.quantity);
        }
    });
    localStorage.setItem("cart", JSON.stringify(cartObj));
    window.location.reload();
}

