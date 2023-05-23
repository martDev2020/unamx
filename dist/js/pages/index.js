const send = function () {
    // console.log("Hola");
    const $user = document.getElementById('usuario');
    const $password = document.getElementById('password');
    const $captcha = document.getElementById('captcha');

    const $userVal = $user.value;
    const $passwordVal = $password.value;
    const $captchaVal = $captcha.value;
    // const $parse = parseInt($captchaVal);
    // console.log($captchaVal);

    if ($userVal === "" && $passwordVal === "" && isNaN($captchaVal) === "") {
        alert("Es necesario llenar todos los campos");
    } else {
        const $userOk = "312335430";
        const $passOk = "barrera96";
        const $name = "García Domínguez Vicente"
        if ($userVal === $userOk && $passwordVal === $passOk) {
            sessionStorage.setItem("userSet", $userVal);
            sessionStorage.setItem('passSet', $passwordVal);
            sessionStorage.setItem('nameuser', $name);

            $user.value = "";
            $password.value = "";
            document.getElementById('captcha').value = '';
            // $captcha.value = "";
            // console.log("Enviados");
            window.open('../../../acceso.html');
        } else {
            alert('Los datos son incorrectos');
            $user.value = "";
            $password.value = "";
            document.getElementById('captcha').value = '';
        }


    }
}