function linkModal() {
    $('#delete_figure').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) // Button that triggered the modal
        var recipient = button.data('slug') // Extract info from data-* attributes
        var modal = $(this)
        modal.find('.slug').text(recipient)
        modal.find('.modal-body input').val(recipient)
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        $('.figure-delete').click(function(e){
            e.preventDefault();
            let deleteLink = window.location.protocol+"//"+window.location.host+"/figures/"+recipient;
            let link = window.location.protocol+"//"+window.location.host;
            $.ajax({
                url: deleteLink,
                method:'DELETE',
                success: function () {
                    window.location.href = link;
                }
            });
        });
    })
}