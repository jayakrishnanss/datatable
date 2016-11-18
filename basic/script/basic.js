$(document).ready(function() {
    $('#example').DataTable( {
        "ajax": '../assets/data/data.json',
        "fnRowCallback": function( nRow, aData, iDisplayIndex, iDisplayIndexFull ) {
        	if(aData[2] == 'Tokyo'){
            	$(nRow).css('background-color', '#DFF2BF').css('color', '#4F8A10').css('font-weight', 'bold'); 
            }else if(aData[2] == 'New York'){
            	nRow.cells[2].style.color = 'red';
            }
        },
    } );
} );