createDatatable()

function createDatatable(){

    $('#tb-data').DataTable({
        language: {
              "decimal": "",
              "emptyTable": "No hay información",
              "info": "Mostrando _START_ a _END_ de _TOTAL_ datos",
              "infoEmpty": "<b>Mostrando 0 to 0 of 0 datos</b>",
              "infoFiltered": "(Filtrado de _MAX_ total datos)",
              "infoPostFix": "",
              "thousands": ",",
              "lengthMenu": "Mostrar _MENU_ datos",
              "loadingRecords": "Cargando...",
              "processing": "Procesando...",
              "search": "Buscar en la lista:",
              "zeroRecords": "Sin resultados encontrados",
              "paginate": {
                  "first": "Primero",
                  "last": "Ultimo",
                  "next": "Siguiente",
                  "previous": "Anterior"
              }
       },scrollY: '50vh',scrollX: true, sScrollXInner: "100%",
       scrollCollapse: true,
      });
  
      var table = $('#tb-data').DataTable();
      $('#container').css( 'display', 'block' );
      table.columns.adjust().draw();
}

$(document).ready(function() {
    $('#upload-button').on('click', function() {
        var file = $('#file-input')[0].files[0];
        if (!file) {
            alert('Please select a file.');
            return;
        }

        // Usamos la API Fetch para cargar el archivo
        fetch(file)
            .then(response => response.text())
            .then(data => {
                var lines = data.split('\n');
                var entries = [];

                lines.forEach(function(line) {
                    var fields = line.split('|');
                    var fua = fields[2];
                    var entry = parseJSON(fields[3]); // Función para analizar JSON con manejo de errores
                    var rules = entry.reglas || [];
                    var concatenatedRules = rules.join(', ');
                    entries.push({ fua: fua, rules: concatenatedRules });
                });

                // Construir la tabla HTML
                var table = $('#tb-data').DataTable();
                table.clear(); // Limpiar la tabla antes de agregar nuevos datos
                entries.forEach(function(entry) {
                    table.row.add([entry.fua, entry.rules]);
                });
                table.draw();
            })
            .catch(error => {
                console.error('Error reading file:', error);
                alert('Error reading file. Please try again.');
            });
    });
});

// Función para analizar JSON con manejo de errores
function parseJSON(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.error('Error parsing JSON:', error);
        return {};
    }
}