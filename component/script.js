// import Swal from 'sweetalert2'

function showAlert() {
  Swal.fire({
    title: 'Go no where !!',
    text: "This page is the homework of day 6 itself!",
    icon: 'error',
    // showCancelButton: true,
    // confirmButtonColor: '#3085d6',
    // cancelButtonColor: '#d33',
    // confirmButtonText: 'Yes, delete it!'
  })
}

function reDirectpage(_path) {
  // console.log(_path);
  // console.log(_path.url);
  // alert(_path[0]);
  window.location.replace(_path.url);
}