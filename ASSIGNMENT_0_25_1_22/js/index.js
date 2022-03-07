
let product_count = 0;
let product_list = [];
let product = [];

function setProductData(id){
    loadProductDetail(id)
    .then((data)=>{
        setProductDetailModal(data);
        if(product_list.includes(id))
            hideAddButton(id);
        else
            hideRemoveButton(id);

    })
    .catch((err)=>{
        console.log(err);
    })
}

function setProductDetailModal(data){
    $(".product-modal-image").attr("src", data.image);
    $(".product-modal-image").attr("alt", data.title);
    $(".product-modal-title").html(data.title);
    $(".product-modal-description").html(data.description);
    $(".product-modal-category").html(`Category: ${data.category}`);
    $(".product-modal-price").html(`<i class="fa fa-rupee-sign"></i> ${data.price}`);
    let tag = `<div class="col-7 add-to-cart product-add-${data.id}">
    <div class="btn btn-outline-secondary btn-lg ms-auto" onclick="addProduct(${data.id})">Add to Cart</div>
    </div>
    <div class="col-7 remove-to-cart product-remove-${data.id}" style="display:none">
        <div class="btn btn-outline-danger btn-lg ms-auto" onclick="removeProduct(${data.id})">Remove</div>
    </div>`;
    $(".product-modal-util").html(tag);
}


function addProduct(id){
    product_list.push(id);
    product_count += 1;
    updateCart();
    hideAddButton(id)
    alert("New Product Added");
}

function removeProduct(id){
    product_list.pop(id);
    product_count -= 1;
    updateCart();
    hideRemoveButton(id)
    alert("Product Removed");
}

function updateCart(){
    $(".product-count").html(product_count);
}

function hideAddButton(id){
    $(`.product-add-${id}`).hide();
    $(`.product-remove-${id}`).show()
}

function hideRemoveButton(id){
    $(`.product-add-${id}`).show();
    $(`.product-remove-${id}`).hide()
}

function displayProducts(data){
    return new Promise((resolve, reject)=>{
        let tag = '';
        let count = 1;
        for(let i = 0; i<data.length; i++){
            if(count == 1)
                tag += `<div class="row product-row">`;
            else if(count %5 == 0){
                tag += `</div>`;
                count = 1;
                continue;
            }

            tag += `<div class="col-lg-3 col-md-6 col-sm-6 product-container card">
                <div class="product-image">
                    <img src="${data[i].image}" class="p-image" alt="${data[i].title}">
                </div>
                <div class="product-details">
                    <div class="row product-name" data-bs-toggle="modal" data-bs-target="#product-description" onclick="setProductData(${data[i].id})">
                        <div class="col">
                            ${data[i].title}
                        </div>
                    </div>
                    <div class="row mt-1 product-util">
                        <div class="col-5 price">
                            <i class="fa fa-rupee-sign"></i>
                            <span class="product-price">${data[i].price}</span>
                        </div>
                        <div class="col-7 add-to-cart product-add-${data[i].id}">
                            <div class="btn btn-outline-secondary btn-sm ms-auto" onclick="addProduct(${data[i].id})">Add to Cart</div>
                        </div>
                        <div class="col-7 remove-to-cart product-remove-${data[i].id}" style="display:none">
                            <div class="btn btn-outline-danger btn-sm ms-auto" onclick="removeProduct(${data[i].id})">Remove</div>
                        </div>
                    </div>
                </div>
            </div>`;
            count += 1;



        }

        $(".product-container-body").html(tag);

    });
}

function loadProducts(){
    $.ajax({
        url: "https://fakestoreapi.com/products",
        method:'GET',
        success:(data)=>{
            products = data;
            displayProducts(data)
            .then((data)=>{console.log(data)})
            .catch((err)=>{console.log(err)});
        },
        error:()=>{

        }
    })
}

function loadProductDetail(id){
    return new Promise((resolve, reject)=>{
        $.ajax({
            url: "https://fakestoreapi.com/products/"+id,
            method:'GET',
            success:(data)=>{
                resolve(data);
            },
            error:(err)=>{
                reject(err);
            }
        });
    });
}

function cartDetails(){
    let tag = '';
    let total_price = 0;
    let index = 0;
    for(let i = 0; i<product_count; i++){
        index = product_list[i]-1;
        tag += `

            <tr>
                <td> ${i+1}</td>
                <td class="table-img"><img src="${products[index].image}" alt="${products[index].title}"></td>
                <td>${products[index].title}</td>
                <td>1</td>
                <td><i class="fa fa-rupee-sign"></i>${products[index].price}</td>
            </tr>
        
        `;
        total_price += products[index].price;
    }

    $(".cart-table-body").html(tag);
    $(".cart-total-price").html(total_price.toFixed(2));

}



$(document).ready(()=>{
    loadProducts();
})