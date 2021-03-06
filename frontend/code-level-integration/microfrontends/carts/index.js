$('#carts').append(`
  <button
    class="btn btn-link nav-link dropdown-toggle"
    type="button"
    data-toggle="dropdown"
  >
    <svg
      id="user-i-cart"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="32"
      height="32"
      fill="none"
      stroke="currentcolor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M6 6 L30 6 27 19 9 19 M27 23 L10 23 5 2 2 2" />
      <circle cx="25" cy="27" r="2" />
      <circle cx="12" cy="27" r="2" />
    </svg>

    <span class="badge badge-light" id="carts-items-count">0</span>
  </button>
  <div class="dropdown-menu dropdown-menu-right" style="width: 400px;">
    <ul class="list-group" id="carts-items">
      <li class="list-group-item" id="carts-empty-cart">
        Empty cart...
      </li>
    </ul>
  </div>
`);

$(document).ready(() => {
  $('#carts').on('carts:initialize-cart', () => {
    carts_initializeCart();
  });

  $('#carts').on('carts:add-product-to-cart', (event, product) => {
    carts_addToCart(product);
  });

  $('#carts').on('carts:reset-cart', () => {
    carts_resetCart();
  });
});

function carts_initializeCart() {
  $.getJSON('http://localhost:8080/cart', (items) => {
    if (items != null) {
      let numItemsInCart = 0;
      $.each(items, (index, itm) => {
        if (itm != null && itm.itemId != null) {
          $.getJSON(
            `http://localhost:8080/catalogue/${itm.itemId}`,
            (product) => {
              numItemsInCart += itm.quantity;
              carts_addItemToCartUi(product, itm.quantity);
            }
          ).always(() => {
            $('#carts-items-count').text(numItemsInCart);

            if (numItemsInCart > 0) {
              $('#carts-empty-cart').hide();
            }
          });
        }
      });
    }
  });
}

function carts_addItemToCartUi(product, quantity) {
  const currentProductListItem = $('#carts-items').find(
    `#cart-item-${product.id}`
  );

  if (currentProductListItem.length > 0) {
    // increase count of the product only
    const currentCountElement = currentProductListItem.find(
      '.p-list-item-count'
    );
    currentCountElement.text(parseInt(currentCountElement.text()) + 1);

    return;
  }

  // add the product for the first time.
  $('#carts-items').append(`
    <li id="cart-item-${product.id}" class="list-group-item c-item">
      <div class="media">
        <img class="mr-3" src="http://localhost:8080${
          product.imageUrl[0]
        }" width="60" />
        <div class="media-body">
          <h5 class="mt-0">
            ${product.name} - &dollar;${product.price}
            <span class="badge badge-pill badge-primary float-right p-list-item-count">
              ${quantity || 1}</span>
          </h5>
        </div>
      </div>
    </li>
  `);
}

function carts_updateCountUi() {
  const countElement = $('#carts-items-count');
  let currentCount = parseInt(countElement.text().trim()) || 0;

  if (currentCount === 0) {
    $('#carts-empty-cart').hide();
  }

  countElement.text(++currentCount);
}

function carts_addToCart(product) {
  $.ajax({
    url: 'http://localhost:8080/cart',
    type: 'POST',
    data: JSON.stringify({ id: product.id }),
    success: () => {
      carts_updateCountUi();
      carts_addItemToCartUi(product);
    },
  });
}

function carts_resetCart() {
  $('#carts-items .c-item').remove();
  $('#carts-items-count').text('0');
  $('#carts-empty-cart').show();
}
