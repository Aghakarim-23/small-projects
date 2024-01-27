function daxilOl() {
  event.preventDefault();

  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const success = document.getElementById("success");
  const unsuccess = document.getElementById("unsuccess");

  let colorSuccess = "green";
  let colorUnSuccess = "red";

  if (username.value == "agakerim") {
    if (password.value == 12345) {
      success.innerHTML = `<p style="color: ${colorSuccess}">Giriş edildi</p>`;

      unsuccess.innerHTML = "";
    } else {
      unsuccess.innerHTML = `<p style="color: ${colorUnSuccess}">Şifrə səhvdir</p>`;
      success.innerHTML = "";
    }
  } else {
    alert("İstifadəçi adı tapılmadı!");
    username.value = "";
    password.value = "";
    console.log("first");
    success.innerHTML = "";
    unsuccess.innerHTML = "";
  }
}
