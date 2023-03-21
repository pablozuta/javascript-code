/* import $ from 'https://cdn.skypack.dev/jquery'; */

$('button')
  .css({
    background: '#09f',
    color: 'white',
    fontSize: '2rem',
    padding: '16px',
    borderRadius: '1rem',
    marginTop: '3rem',
  })
  .on('click', () => {
    alert('Hello From JQuery');
  });
