$(document).ready( () => {
  multiInput();
});

const multiInput = () => {
  let $container = $('.multi-input');

  if ( $container.length === 0 ){
    return false;
  }

  let $field = $container.find('.repeatable').html();

  $container.find('.add-row').on('click', (e) => {
    e.preventDefault();
    $container.append('<div class="two fields">' + $field + '</div>');
  });
};