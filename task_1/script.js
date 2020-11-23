let view = build('div', {id: 'header'}, [
  build('div', {textContent: 'Привіт!'}),
  build('div', {textContent: 'Базовий приклад SPA без використання сторонніх бібліотек.'}),
  build('a', {href: '#', textContent: 'Перейти на привітання'}),
  build('a', {href: '#', textContent: 'Перейти назад'})
]);

console.log(view);

function build(tag, attr, arr) {
	const $el = document.createElement(tag);
	
  if (typeof attr === 'object') {
    for (const el in attr) {
      if (attr === 'textContent') $el.textContent = attr[el];
      $el.setAttribute(el, attr[el])
    }
  }

  if (Array.isArray(arr)) {
    for (const el of arr) {
      $el.appendChild(el);
    }
	}
	
  return $el;
}