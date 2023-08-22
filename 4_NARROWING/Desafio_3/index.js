"use strict";
function showUserReview(data) {
    if (!data) {
        return `Você não avaliou o produto!`;
    }
    return `Você deu a nota ${data}!`;
}
console.log(showUserReview(1));
console.log(showUserReview(2));
console.log(showUserReview(3));
console.log(showUserReview(4));
console.log(showUserReview(5));
console.log(showUserReview(false));
