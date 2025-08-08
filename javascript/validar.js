var Usuario, Email, Categoria, Descricao, Imagem, NivelUrgencia, Horario;


function Obrigatorio(){
    //Usuário
    Usuario = document.getElementById('usuario').value;
    //Usu´pario Obrigatorio
    if(Usuario == ""){
        alert('Usuário é Obrigatório!!!');
        
        document.getElementById('usuario').style.borderColor="red";
        
        return false;
    }

    //Email
    Email = document.getElementById('email').value;
    //Email Obrigatorio
    if(Email == ""){
        alert('Email é Obrigatório!!!');
        
        document.getElementById('email').style.borderColor="red";
        
        return false;
    }

    //Categoria
    Categoria = document.getElementById('categoria').value;
    //Categoria Obrigatorio
    if(Categoria == ""){
        alert('Categoria é Obrigatório!!!');
        
        document.getElementById('categoria').style.borderColor="red";
        
        return false;
    }
    //Descrição
    Descricao = document.getElementById('descricao').value;
    //Descrição Obrigatorio
    if(Descricao == ""){
        alert('Descrição é Obrigatório!!!');
        
        document.getElementById('descricao').style.borderColor="red";
        
        return false;
    }

    //Nivel de Urgencia
    NivelUrgencia = document.getElementById('urgencia').value;
    //Email Obrigatorio
    if(NivelUrgencia == ""){
        alert('Nivel de Urgência é Obrigatório!!!');
        
        document.getElementById('urgencia').style.borderColor="red";
        
        return false;
    }
    //Foto
    Imagem = document.getElementById('screenshot').value;
    
    //Horário
    Horario = document.getElementById('horario').value;

    return true;
}