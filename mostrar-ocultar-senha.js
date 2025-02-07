document.addEventListener("DOMContentLoaded", function () {
    const senhaInput = document.querySelector('input[type="password"]');
    const toggleSenha = document.createElement("i");
    toggleSenha.classList.add("bi", "bi-eye");
    toggleSenha.style.cursor = "pointer";

    senhaInput.parentElement.appendChild(toggleSenha);

    toggleSenha.addEventListener("click", function () {
        if (senhaInput.type === "password") {
            senhaInput.type = "text";
            toggleSenha.classList.replace("bi-eye", "bi-eye-slash");
        } else {
            senhaInput.type = "password";
            toggleSenha.classList.replace("bi-eye-slash", "bi-eye");
        }
    });
});
