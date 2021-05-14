//  Write a JavaScript program to add an event listener to an element with the ability to use event delegation. 

let element = document.getElementById('tbl1')
element.addEventListener('click', (e) => fn1(e), false)

function fn1(e) {
    console.log(e.target)
    td = e.target;
    td.innerText = [...td.innerText].reverse().join('')  
}

const on = (el, evt, fn, opts = {}) => {
    const delegatorFn = e => e.target.matches(opts.target) && fn.call(e.target, e);
    el.addEventListener(evt, opts.target ? delegatorFn : fn, opts.options || false);
    if (opts.target) return delegatorFn;
  };
  
  const fn = () => console.log('!');
  console.log(on(document.body, 'click', fn));  
  console.log(on(document.body, 'click', fn, { target: 'p' }));  
  console.log(on(document.body, 'click', fn, { options: true }));