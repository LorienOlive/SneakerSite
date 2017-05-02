$(".button").click(addToCart)
   var string = $("shopping-cart").text();
   var getNumber = string.match(/(\d+)/g);

function addToCart() {
  $(".shopping-cart").text($(".shopping-cart").text().replace(/\d+/, getNumber ++));
}


$(".button").click(buttonClick)

function buttonClick() {
  $(".button").html("ADDED TO CART")
}


$(".button").mouseleave(resetButton)

function resetButton() {
  $(".button").html("BUY NOW!")
}


$(".product-details").click(tabClick1)

function tabClick1() {
  $("#size-and-fit").css("display", "none");
  $("#reviews").css("display", "none");
  $("#product-details").css("display", "block");
}


$(".size-and-fit").click(tabClick2)

function tabClick2() {
  $("#product-details").css("display", "none");
  $("#reviews").css("display", "none");
  $("#size-and-fit").css("display", "block");
}


$(".reviews2").click(tabClick3)

function tabClick3() {
  $("#product-details").css("display", "none");
  $("#reviews").css("display", "block");
  $("#size-and-fit").css("display", "none");
}
