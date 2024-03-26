$(document).ready(function(e){

    // Adiciona uma nova tarefa à lista
    $('form').on('submit', function(e){
        e.preventDefault();
        const tarefa = $('#tarefa').val();
        const novaTarefa = $('<li></li>');
        $(`<span>${tarefa}</span>`).appendTo(novaTarefa);
        $(`
            <div class="container-button">
                <button type="button" class="check">✅</button>
                <button type="button" class="delete">❌</button>
            </div>
        `).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ul');
        $('#tarefa').val('');
    });


    // Remover o item da lista ao clicar no botão "delete"
    $('ul').on('click', '.delete', function() {
        $(this).closest('li').remove();
    });

    // adiciona a classe de linha no meio da fonte e cor verde ao elemento li
    $("ul").on('click', 'li', function(){
        $(this).toggleClass("linha-meio");
    })
})