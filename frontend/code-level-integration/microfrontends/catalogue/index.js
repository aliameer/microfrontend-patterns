$('#catalogue').append(`
  <div class="row" id="catalogue-products"></div>
`);

$(document).ready(() => {
  $.getJSON('http://localhost:8080/catalogue', (products) => {
    if (products != null) {
      $.each(products, (index, prod) => {
        catalogue_showProductInUi(prod);
      });
    }
  });
});

function catalogue_showProductInUi(product) {
  $('#catalogue-products').append(
    `<div class="col-lg-4 col-md-6 mb-4">
      <div class="card h-100">
        <img class="card-img-top" src="http://localhost:8080${product.imageUrl[0]}" />
        <div class="card-body">
          <h4 class="card-title">${product.name}</h4>
          <h5>&dollar;${product.price}</h5>
          <p class="card-text">${product.description}</p>
        </div>
        <div class="card-footer text-right">
          <button type="button" class="btn btn-primary"
            onclick="return catalogue_addToCart(
              '${product.id}',
              '${product.name}',
              '${product.price}',
              '${product.imageUrl}'
              )"
              >
                Add to cart
          </button>
        </div>
      </div>
    </div>
    `
  );
}

function catalogue_addToCart(productId, productName, productPrice, imageUrl) {
  $('#carts').trigger('carts:add-product-to-cart', [
    {
      id: productId,
      name: productName,
      price: productPrice,
      imageUrl: imageUrl.split(','),
    },
  ]);
}
