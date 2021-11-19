function btn() {
    let firstname = prompt("Введите имя: ")
    document.getElementById('firstname').textContent = firstname

    let lastname = prompt("Введите фамилию: ")
    document.getElementById('lastname').textContent = lastname

    let age = prompt("Введите возраст: ")
    document.getElementById('age').textContent = age

    let birth = prompt("Введите дату рождения: (Пример: 00.00.00)")
    document.getElementById('birth').textContent = "Дата рождения: " + birth

    let about = prompt("Введите коротко о себе: ")
    document.getElementById('about').textContent = "О себе: " + about

    let spec = prompt("Введите коротко вашу специальность: ")
    document.getElementById('spec').textContent = "Моя специальность: " + spec
}
$('.button-main').on("click", function(){
	 $('.button-main').css('display', 'none');
});
$('.button-1').on("click", function(){
	 $('p').css('color', '#962AD1');
});
$('.button-2').on("click", function(){
	 $('p').css('color', '#F0E55B');
});
$('.button-3').on("click", function(){
	 $('p').css('color', '#000000');
});