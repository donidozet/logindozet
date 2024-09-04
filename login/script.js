var ema = document.getElementById('email');
var s = document.getElementById('senha');
var res = document.getElementById('res');


function login(){
        if (!ema.value || !s.value) {
            res.innerHTML = `<p style="color: red;">[Erro] Todos os campos são obrigatórios.</p>`;
            return;
        }
        res.innerHTML = `<p style="color: green;">Login bem-sucedido</p>`;
        location.href = 'home.html';
}
function redregistrar(){
    location.href='registro.html'
}


var nom = document.getElementById('nome')
var sob = document.getElementById('sobrenome')
var usu = document.getElementById('user')
var sen = document.getElementById('password')
var csen= document.getElementById('confirme-password')
var ress = document.getElementById('ress')
 
function registrar(){
    if (!nom.value || !sob.value || !user.value || !sen.value || !csen.value) {
        ress.innerHTML = `<p style="color: red;">[Erro] Todos os campos são obrigatórios.</p>`;
        return;
    } if (sen.value !== csen.value) {
        ress.innerHTML = `<p style="color: red;">[Erro] As senhas não coincidem.</p>`;
        return;
    } else{
        ress.innerHTML = `<p style="color: green;">Registro realizado com sucesso!</p>`
            location.href='index.html'
    }

}


    

