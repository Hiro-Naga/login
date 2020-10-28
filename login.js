window.addEventListener('pageshow', function () {
  // 各要素取得
  const loginId = document.getElementById("login-id");
  const password = document.getElementById('login-password');
  const submitButton = document.getElementById("submit-button");

  // 各ボタンの状態設定
  // submitButton.disabled = true;

  // 各要素のイベント追加
  submitButton.addEventListener("click", submit);

  // 以下メソッド各種
  function submit() {
    console.log("ID:" + loginId.value);
    console.log("password:" + password.value);
  }
});