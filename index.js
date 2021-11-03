(() => {
	document.querySelector('.search__btn-clean').addEventListener('click', () => {
		document.querySelector('.search__input').value = '';
	})

	document.querySelector('.categories__btn-more').addEventListener('click', () => {
		document.querySelectorAll('.categories__item_hide').forEach(function(item){
			item.classList.remove('categories__item_hide');
		})
		document.querySelector('.categories__btn-more').remove();
	})

	document.querySelector('.brands__btn-clean').addEventListener('click', () => {
		document.querySelectorAll('.brands__checkbox').forEach(function(item){
			item.checked = false;
		})
	})
})()