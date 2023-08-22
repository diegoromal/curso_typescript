// Criar uma função que recebe review dos usuários, precisamos utilizar o narrowing para receber o dado;
// As possibilidades são boolean e number;
// Serão enviados números de 1 a 5 (estrelas), prever uma mensagem para cada uma dessas notas
// Ou false, que é quando o usuário não deixa uma review, prever um retorno para este caso também
type Review = number | boolean;

function showUserReview(data: Review) {
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
