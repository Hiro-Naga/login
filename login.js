window.addEventListener('pageshow', function () {
  // 各要素取得
  const loginId = document.getElementById('login-id');
  const password = document.getElementById('login-password');
  const submitButton = document.getElementById('submit-button');

  const idErrorMessage = document.getElementById('id-error-msg');
  const pwErrorMessage = document.getElementById('pw-error-msg');

  // バリデーション設定
  const idExp = /^([a-zA-Z0-9]{5,})$/;
  const passwordExp = /^([a-zA-Z0-9]{8,})$/;

  // 各状態設定
  submitButton.disabled = true;

  // フラグ
  isIdSuccess = false;
  isPwSuccess = false;

  // 各要素のイベント追加
  loginId.addEventListener('change', checkIdExp);
  password.addEventListener('change', checkPassExp);
  submitButton.addEventListener('click', submit);

  /**
   * IDのバリデーションチェック
   */
  function checkIdExp() {
    if (idExp.test(loginId.value)) {
      console.log('id:success');
      isIdSuccess = true;
      if (!idErrorMessage.classList.contains('hidden-message')) { idErrorMessage.classList.add('hidden-message'); }
      checkSuccess();
    }
    else{
      console.log('id:invalid');
      isIdSuccess = false;
      if (idErrorMessage.classList.contains('hidden-message')) { idErrorMessage.classList.remove('hidden-message'); }
      checkSuccess();
    }
  }
  /**
   * passのバリデーションチェック
   */
  function checkPassExp() {
    if (passwordExp.test(password.value)) {
      console.log('pw:success');
      isPwSuccess = true;
      if (!pwErrorMessage.classList.contains('hidden-message')) { pwErrorMessage.classList.add('hidden-message'); }
      checkSuccess();
    }
    else{
      console.log('pw:invalid');
      isPwSuccess = false;
      if (pwErrorMessage.classList.contains('hidden-message')) { pwErrorMessage.classList.remove('hidden-message'); }
      checkSuccess();
    }
  }
  /**
   * バリデーション通った時の挙動
   */
  function checkSuccess() {
    if (loginId.value && password.value) {
      if (isIdSuccess && isPwSuccess) {
        submitButton.disabled = false;
      } else {
        console.log('mismatch');
        submitButton.disabled = true;
      }
    } else {
      console.log('empty value');
    }
  }
  /**
   * ログインボタンを押した時の挙動
   */
  function submit() {
    console.log('ID:' + loginId.value);
    console.log('password:' + password.value);
  }
});