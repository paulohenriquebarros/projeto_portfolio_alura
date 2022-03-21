
function validardados(){
window.event.preventDefault()

if(document.form.nome.value == ""){

	alert("campo obrigatório")
	document.form.nome.focus()
}

}
document.querySelector("form").addEventListener("subimit",validardados) 