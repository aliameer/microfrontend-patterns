$('#catalogue').append(`
  <div class="row" id="catalogue-products"></div>
`);

$(document).ready(() => {
  $.getJSON('http://localhost:8080/catalogue', function (data) {
    if (data != null) {
      $.each(data, function (index, element) {
        $('#catalogue-products').append(
          `<div class="col-lg-4 col-md-6 mb-4">
            <div class="card h-100">
              <img class="card-img-top" src="http://localhost:8080${element.imageUrl[0]}" />
              <div class="card-body">
                <h4 class="card-title">${element.name}</h4>
                <h5>&dollar;${element.price}</h5>
                <p class="card-text">${element.description}</p>
              </div>
              <div class="card-footer text-right">
                <button type="button" class="btn btn-primary"
                  onclick="return catalogue_addToCart('${element.id}', '${element.name}', '${element.price}')">
                    Add to cart
                </button>
              </div>
            </div>
          </div>
        `
        );
      });
    }
  });
});

function catalogue_addToCart(productId, productName, productPrice) {
  $('#carts').trigger('carts:add-product-to-cart', [
    {
      id: productId,
      name: productName,
      price: productPrice,
    },
  ]);
}
