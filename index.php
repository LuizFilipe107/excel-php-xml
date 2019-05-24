<?php
    $arquivo = file_get_contents('./xml/torcedores.xml');
    $torcedores = simplexml_load_string($arquivo);
?>

<head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="./styles/styles.css">
</head>

<body>
    <div class="container">
        <div class="div-gerar-excel">
            <button id="gerar-excel" type="button" class="btn btn-success">Gerar excel</button>
        </div>
        <table id="table-torcedores" class="table table-striped">
            <thead>
                <td colspan="10" style="text-align: center">
                    <h4>Lista de torcedores</h4>
                </td>
            </thead>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Nº Documento</th>
                    <th>CEP</th>
                    <th>Endereço</th>
                    <th>Bairro</th>
                    <th>Cidade</th>
                    <th>UF</th>
                    <th>Telefone</th>
                    <th>E-mail</th>
                    <th>Ativo</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($torcedores as $chave => $torcedor): ?>
                    <tr>
                        <td><?php echo $torcedor['nome']; ?></td>
                        <td><?php echo $torcedor['documento']; ?></td>
                        <td><?php echo $torcedor['cep']; ?></td>
                        <td><?php echo $torcedor['endereco']; ?></td>
                        <td><?php echo $torcedor['bairro']; ?></td>
                        <td><?php echo $torcedor['cidade']; ?></td>
                        <td><?php echo $torcedor['uf']; ?></td>
                        <td><?php echo $torcedor['telefone']; ?></td>
                        <td><?php echo $torcedor['email']; ?></td>
                        <td>
                            <?php if (!empty($torcedor['ativo'])): ?>
                                <span class="badge badge-success">Sim</span>
                            <?php else: ?>
                                <span class="badge badge-danger">Não</span>
                            <?php endif; ?>
                        </td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>
</body>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="plugins/jquery.table2excel.js"></script>

<script>
    $(document).ready(function() {
        $('#gerar-excel').click(function(e) {
            $("#table-torcedores").table2excel({
                exclude: ".noExl",
                name: "Lista de torcedores",
                filename: "torcedores"
            });
        });
    });
</script>