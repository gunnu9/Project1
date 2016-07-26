
function showLoc(ans) {
    alert();
    var e = document.getElementById(ans);
    
    if(e.style.display == 'none'){
        alert();
        e.style.display ='block';
    }else{
        e.style.display ='none';
    }
    
    
}

$(document).ready(function() {
    $('#example').DataTable( {
        columnDefs: [ {
            orderable: false,
            className: 'select-checkbox',
            targets:   0
        } ],
        select: {
            style:    'os',
            selector: 'td:first-child'
        },
        order: [[ 1, 'asc' ]]
    } );
} );