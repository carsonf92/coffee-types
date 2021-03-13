/* scripts.js */

// ========================
// Types of Coffee Data
// ========================

// water, foam, milk, coffee, chocolate

var coffees = {
	Americano: [70, 0, 0, 30, 0],
	Breve: [0, 33, 33, 33, 0],
	Cappuccino: [0, 50, 25, 25, 0],
	Chocolate_Milk: [0, 0, 60, 0, 40],
	Doppio: [0, 0, 0, 75, 0],
	Espresso: [0, 0, 0, 40, 0],
	Flat_White: [0, 60, 0, 40, 0],
	Latte: [0, 0, 75, 25, 0],
	Lungo: [40, 0, 0, 60, 0],
	Macchiato: [0, 75, 0, 25, 0],
	Marocchino: [0, 25, 0, 37.5, 37.5],
	Mocha: [0, 25, 25, 25, 25]
}

// ========================
// Generate Menu of Coffees
// ========================

var menu = document.querySelector('.coffee-menu__list');

// loop through items in coffee object
for (let type in coffees){
	var item = document.createElement('li');
	item.textContent = type.replace('_', ' ');
	item.setAttribute('class', 'coffee-menu__item');
	item.setAttribute('data-ratio', coffees[type]);
	menu.appendChild(item);

	var indicator = document.createElement('div');
	indicator.setAttribute('class', 'coffee-menu__indicator');
	item.appendChild(indicator);

	for (i = 0; i < coffees[type].length; i++){
		if (coffees[type][i] != 0){
			var dot = document.createElement('span');
			dot.setAttribute('class', 'coffee-menu__indicator-dot');

			switch (i){
				case 0:
			 		dot.classList.add('coffee-menu__indicator-dot--water');
					break;
				case 1:
					dot.classList.add('coffee-menu__indicator-dot--foam');
					break;
				case 2:
					dot.classList.add('coffee-menu__indicator-dot--milk');
					break;
				case 3:
					dot.classList.add('coffee-menu__indicator-dot--coffee');
					break;
				case 4:
					dot.classList.add('coffee-menu__indicator-dot--chocolate');
					break;
			}

			indicator.appendChild(dot);
		}
	}
}

// ========================
// Select Coffee
// ========================

document.addEventListener('click', function(e){
    if (e.target && e.target.className == 'coffee-menu__item'){
    	var selected = document.querySelector('.coffee-menu__item--selected');
    	if (selected){
    		selected.classList.remove('coffee-menu__item--selected');
    	}
    	e.target.classList.add('coffee-menu__item--selected');
    	var ratios = e.target.getAttribute('data-ratio');
    	ratios = JSON.parse('[' + ratios + ']');
    	for (i = 0; i < ratios.length; i++){
    		document.querySelectorAll('.coffee-infographic__ingredient')[i].style.height = ratios[i] + '%';
    	}
    }
 });











