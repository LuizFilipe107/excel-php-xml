var x=1;

//bloco de execução

chama_pre_cadastro();
chama_cadastro();
chama_usuario();


//funções logo abaixo

function chama_pre_cadastro() {
    $('#nome').on("input", function () {
        verifica_campos(document.getElementById('nome'), 'lbl_erro_nome');
        para_maiusculo(document.getElementById('nome'));
        sem_numeros(document.getElementById('nome'), 'lbl_erro_nome_NUM');
    });
    $('#filiacao').on("input", function () {
        verifica_campos(document.getElementById('filiacao'), 'lbl_erro_fil');
        para_maiusculo(document.getElementById('filiacao'));
        sem_numeros(document.getElementById('filiacao'), 'lbl_erro_fil_NUM');
    });
    $('#naturalidade').on("input", function () {
        verifica_campos(document.getElementById('naturalidade'), 'lbl_erro_nat');
        para_maiusculo(document.getElementById('naturalidade'));
        sem_numeros(document.getElementById('naturalidade'), 'lbl_erro_nat_NUM');
    });


    $('#zona').on("input", function () {
        verifica_campos(document.getElementById('zona'), 'lbl_erro_fil');
        para_maiusculo(document.getElementById('zona'));
        //sem_numeros(document.getElementById('zona'), 'lbl_erro_fil_NUM');
    });
    $('#secao').on("input", function () {
        verifica_campos(document.getElementById('secao'), 'lbl_erro_nat');
        para_maiusculo(document.getElementById('secao'));
        //sem_numeros(document.getElementById('secao'), 'lbl_erro_nat_NUM');
    });
    $('#data_nascimento').on("input, mouseout", function () {
        verifica_datas(document.getElementById('data_nascimento'), 'lbl_erro_nasc', 'data_nascimento');
    });

}


function chama_cadastro() {

    //endereco
    endereco();

    //instituicao
    inst();

    arquivo();

}

function endereco() {
    $('#rua').on("input", function () {
        verifica_campos(document.getElementById('rua'), 'lbl_erro_end');
        para_maiusculo(document.getElementById('rua'));
        conta_erros_tab_end();
    });



    $('#complemento').on("input", function () {
        verifica_campos(document.getElementById('complemento'), 'lbl_erro_comp');
        para_maiusculo(document.getElementById('complemento'));
        conta_erros_tab_end();
    });
    $('#cidade').on("input", function () {
        verifica_campos(document.getElementById('cidade'), 'lbl_erro_cidade');
        para_maiusculo(document.getElementById('cidade'));
        conta_erros_tab_end();
    });

    $('#bairro').on("input", function () {
        verifica_campos(document.getElementById('bairro'), 'lbl_erro_bairro');
        para_maiusculo(document.getElementById('bairro'));
        conta_erros_tab_end();
    });

    $('#uf').on("input", function () {
        verifica_campos(document.getElementById('uf'), 'lbl_erro_uf');
        para_maiusculo(document.getElementById('uf'));
        conta_erros_tab_end();
    });


}
function arquivo() {
    $('#nomeArquivo').on("input", function () {
        para_maiusculo(document.getElementById('nomeArquivo'));
    });
    $('#lugarArquivo').on("input", function () {
        para_maiusculo(document.getElementById('lugarArquivo'));
    });
    $('#numeroArquivo').on("input", function () {
        para_maiusculo(document.getElementById('numeroArquivo'));
    });
}

function inst() {
    $('#nome_inst').on("input", function (){
        verifica_campos(document.getElementById('nome_inst'), 'lbl_erro_nome_inst');
        para_maiusculo(document.getElementById('nome_inst'));
        conta_erros_tab_inst();
    });
}



var vetor_erro = [];
var vetor_erro_end = []
function verifica_campos(y, lbl_nome) {


    var perigo;
    var div_id = lbl_nome;

    if(document.getElementById(lbl_nome) == null){
        var div_pai = document.createElement('div');
        div_pai.classList.add("erro_msg");
        div_pai.id = lbl_nome;
    }

    if (y.value.toString().search("[$-,:-?/#{-~!\"^_`\\[\\]]") !== -1 ||
        y.value.toString().search("'") !== -1 ||
        y.value.toString().search(";") !== -1 ||
        y.value.toString().search(",") !== -1 ||
        y.value.toString().search("!") !== -1) {
        perigo = true;
    } else {
        perigo = false;
    }

    //exibe ou a esconde dependendo de ter ou não caracteres proibidos

    if (perigo) {

        if(vetor_erro.indexOf(lbl_nome) <= -1){
            y.parentElement.parentElement.parentElement.appendChild(div_pai);
            //adiciona o elemento à <div>
            div_pai.innerHTML = "*Não são permitidos caracteres impóprios como aspas, ponto e vírgula e afins";
            //adiciona ao vetor de verificação. basta que um seja false no vetor e o botão desliga
            vetor_erro.push(lbl_nome);

        }
        __libera_submit_usuario();

    } else {

        var index = vetor_erro.indexOf(lbl_nome);
        if(index > -1){
            vetor_erro.splice(index, 1);
        }

        __libera_submit_usuario();
        try {
            lbl_nome2 = "#"+lbl_nome.toString();
            $(lbl_nome2).fadeOut(400);
            setTimeout(function () {
                y.parentElement.parentElement.parentElement.removeChild(document.getElementById(lbl_nome));
            }, 400);
        }catch (ex){

        }
    }
}

function sem_numeros(y, lbl_nome) {


    var perigo;
    var div_id = lbl_nome;

    if(document.getElementById(lbl_nome) == null){
        var div_pai = document.createElement('div');
        div_pai.classList.add("erro_msg");
        div_pai.id = lbl_nome;
    }

    if (y.value.toString().search("[0-9]") !== -1) {
        perigo = true;
    } else {
        perigo = false;
    }

    //exibe ou a esconde dependendo de ter ou não caracteres proibidos

    if (perigo) {

        if(vetor_erro.indexOf(lbl_nome) <= -1){
            y.parentElement.parentElement.parentElement.appendChild(div_pai);
            //adiciona o elemento à <div>
            div_pai.innerHTML = "*Não são permitidos números neste campo";
            //adiciona ao vetor de verificação. basta que um seja false no vetor e o botão desliga
            vetor_erro.push(lbl_nome);

        }
        __libera_submit_usuario();

    } else {

        var index = vetor_erro.indexOf(lbl_nome);
        if(index > -1){
            vetor_erro.splice(index, 1);
        }

        __libera_submit_usuario();
        try {
            lbl_nome2 = "#"+lbl_nome.toString();
            $(lbl_nome2).fadeOut(400);
            setTimeout(function () {
                y.parentElement.parentElement.parentElement.removeChild(document.getElementById(lbl_nome));
            }, 400);
        }catch (ex){

        }

    }
}

function __libera_submit_usuario() {
    if(vetor_erro.length==0){
        document.getElementById('btsalvar').disabled=false;
    }else{
        document.getElementById('btsalvar').disabled=true;
    }

}



function para_maiusculo(y) {
    y.value = y.value.toUpperCase();
}








//função permite se data<hj
function verifica_datas(y, lbl_nome, id) {
    var data = new Date();
    var dia = data.getDate();
    var mes = data.getMonth() +1;
    var ano = data.getFullYear();
    var hora = data.getHours();
    var min = data.getMinutes();

    if(dia.toString().length==1){
        dia="0"+dia.toString();
    }
    if(mes.toString().length==1){
        mes="0"+mes.toString();
    }
    if(hora.toString().length==1){
        hora="0"+hora.toString();
    }
    if(min.toString().length==1){
        min="0"+min.toString();
    }
    var data_atual=""+ano+"-"+mes+"-"+dia+"T"+hora+":"+min+"";
    var data = document.querySelector("#"+id).value;
    var perigo=false;
    if(data > data_atual){
        perigo=true
    }



    var div_id = lbl_nome;

    if(document.getElementById(lbl_nome) == null){
        var div_pai = document.createElement('div');
        div_pai.classList.add("erro_msg");
        div_pai.id = lbl_nome;
    }

    if (perigo) {

        if(vetor_erro.indexOf(lbl_nome) <= -1){
            y.parentElement.parentElement.parentElement.appendChild(div_pai);
            //adiciona o elemento à <div>
            div_pai.innerHTML = "*Data inválida!";
            //adiciona ao vetor de verificação. basta que um seja false no vetor e o botão desliga
            vetor_erro.push(lbl_nome);

        }
        __libera_submit_usuario();

    } else {

        var index = vetor_erro.indexOf(lbl_nome);
        if(index > -1){
            vetor_erro.splice(index, 1);
        }

        __libera_submit_usuario();
        try {
            lbl_nome2 = "#"+lbl_nome.toString();
            $(lbl_nome2).fadeOut(400);
            setTimeout(function () {
                y.parentElement.parentElement.parentElement.removeChild(document.getElementById(lbl_nome));
            }, 400);
        }catch (ex){

        }

    }

}



function  conta_erros_tab_inst() {
    setTimeout(function () {
        erro_msg_list = $('#instituicao').find('.erro_msg');
        var span = $('#span_erro_inst');
        if((erro_msg_list.length)>0){
            span.text(" "+(erro_msg_list.length)+" ".toString());
            span.css('padding-left', '4px');
            span.css('padding-right', '4px');
            span.hide();
            $('#span_erro_inst').fadeIn(400);
            setTimeout(function () {
                span.show();
            },400);
        }else{
            try{
                $('#span_erro_inst').fadeOut(400);
                setTimeout(function () {
                    span.css('padding', '0px');
                    span.text("");
                    span.hide();
                }, 400);



            }catch(ex){}

        }
    }, 401);
}


function  conta_erros_tab_end() {

    setTimeout(function () {
        erro_msg_list = $('#endereco').find('.erro_msg');
        var span = $('#span_erro_end');
        if((erro_msg_list.length)>0){
            span.text(" "+(erro_msg_list.length)+" ".toString());
            span.css('padding-left', '4px');
            span.css('padding-right', '4px');
            span.hide();
            $('#span_erro_end').fadeIn(400);
            setTimeout(function () {
                span.show();
            },400);
        }else{
            try{
                $('#span_erro_end').fadeOut(400);
                setTimeout(function () {
                    span.css('padding', '0px');
                    span.text("");
                    span.hide();
                }, 400);



            }catch(ex){}

        }
    }, 401);


}




















function verifica_senhas() {

    var lbl_nome = 'lbl_senhas';
    var div_id = 'senhas_msg';
    var ok;
    if(document.getElementById('senha').value.toString()==document.getElementById('csenha').value.toString()){
        ok=true;
    }else{
        ok=false;
    }

    if(document.getElementById('senha').value.toString()=="" || document.getElementById('csenha').value.toString()==""){
        ok=true;
    }


    if (!ok) {

        if(vetor_erro.indexOf(lbl_nome) <= -1){
            //adiciona o elemento à <div>
            $("#"+div_id).css("display", "inline");
            document.getElementById(div_id).textContent = "*As senhas precisam ser iguais!";
            vetor_erro.push(lbl_nome);
        }
        __libera_submit_usuario();

    } else {

        var index = vetor_erro.indexOf(lbl_nome);
        if(index > -1){
            vetor_erro.splice(index, 1);
        }

        __libera_submit_usuario();
        try {

            var div_id2 = "#"+div_id.toString();
            $(div_id2).fadeOut(400);
            setTimeout(function () {
                document.getElementById(div_id).textContent="";
            }, 400);

        }catch (ex){

        }

    }

}

function chama_usuario() {
    $('#senha').on("input", function () {
        verifica_senhas();
    });
    $('#csenha').on("input", function () {
        verifica_senhas();
    });
}


function visualiza_esconde(y, z) {

    if(x%2==1){

        z.setAttribute("type", "text");
        try{
            y.classList.remove("fa-eye");
            y.classList.remove("fa");
        }catch (ex){
        }
        y.classList.add("fa");
        y.classList.add("fa-eye-slash");

    }else{

        z.setAttribute("type", "password");
        try{
            y.classList.remove("fa-eye-slash");
            y.classList.remove("fa");
        }catch (ex){
        }
        y.classList.add("fa");
        y.classList.add("fa-eye");

    }
    x++;

}




$(document).ready(function(){
    try{scroll_event();}catch (ex){
        scroll_event_edit();
    }

});


function scroll_event() {
    if(! window.location.href.includes('index.php?url=usuario/listar_usuario')){
        var posicao = $("#example").offset().top;
        $("html, body").animate(
            {
                scrollTop: posicao.toString()+"px",
            },800);
    }

}

function scroll_event_edit() {
    var posicao = $("#scroll_edit").offset().top;
    $("html, body").animate(
        {
            scrollTop: posicao.toString()+"px",
        },800);
}



function del_confirm(url_info) {
    swal({
        title: "Certeza de que deseja deletar esse registro?",
        text: "Uma vez deletado, o registro não poderá ser recuperado",
        icon: "warning",
        buttons:{
            cancelar : "cancelar",
            deletar : "deletar"

        },
        dangerMode: true
    }).then(function (value) {

        switch (value){

            case "deletar":
                window.location=url_info.toString();
            case "cancelar":

        }
    })

}

// js para mostrar ou esconder o campo de OAB - pre-cadastro

function mostra_esconde_oab(valor){

        if(valor=='mostra'){
            $('#conteudo_oab_mostra').fadeIn(400);
            setTimein(function () {
                $('#conteudo_oab_mostra').show();
            }, 500);
        }else{
            $('#conteudo_oab_mostra').fadeOut(400);
            setTimeout(function () {
                $('#conteudo_oab_mostra').hide();
            }, 500);
        }


}
