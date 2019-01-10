App.controller("OtherView", function ($scope) {
    var vm = this;

    vm.Test = function () {
        alert("OtherView");
    };
    vm.ShowSweetAlert = function () {
        Swal(
            'The Internet?',
            'That thing is still around?',
            'question'
        );
    };

    vm.Show2SweetAlert = function () {
        const swalWithBootstrapButtons = Swal.mixin({
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger',
            buttonsStyling: false
        });

        swalWithBootstrapButtons({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.value) {
                swalWithBootstrapButtons(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                );
            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                );
            }
        });
    };

});
