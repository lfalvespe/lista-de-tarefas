let input = document.getElementById('input')
let btnAdd = document.getElementById('btnAdd')

let lista = document.querySelector('.lista')

contador = 0

function adicionar() {
	
	if (input.value) {

		++contador

		novoItem = `<section class="tarefa" id="${contador}">
		<div class="icone" onclick="marcar(${contador})">
			<i class="mdi mdi-circle-outline" onclick="marcar(${contador})" id="icone_${contador}"></i>
		</div>
		<div class="texto" onclick="marcar(${contador})">
			${input.value}
		</div>
		<div class="apagar">
			<input type="button" id="btnApagar" value="Apagar" onclick="apagar(${contador})">
		</div>
	</section>`

	lista.innerHTML += novoItem

	input.focus()
	input.value = ''

	}

}

input.addEventListener("keyup", function(event){
	if(event.keyCode == 13) {
		btnAdd.click()
	}
})

function apagar(id){
	tarefa = document.getElementById(id)
	tarefa.remove()
}


function marcar(id) {
	item = document.getElementById(id)

	classe = item.getAttribute('class')

	if (classe == 'tarefa') {
		item.classList.add('clicado')

		icone = document.getElementById('icone_'+id)

		icone.classList.remove('mdi-circle-outline')
		icone.classList.add('mdi-check-circle')

		item.parentNode.appendChild(item)

	} else {
		item.classList.remove('clicado')
		icone = document.getElementById('icone_'+id)

		icone.classList.remove('mdi-check-circle')
		icone.classList.add('mdi-circle-outline')

	}

	

}


