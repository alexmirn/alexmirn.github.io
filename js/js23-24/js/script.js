function Model(data) {
	var self = this;

	self.data = data;

	self.addItem = function(item) {
		if (item.length === 0) {
			return;
		}
		self.data.push(item);

		return self.data;
	};

	self.removeItem = function(item) {
		var index = self.data.indexOf(item);

		if (index === -1) {
			return;
		}
		self.data.splice(index, 1);

		return self.data;
	};

	self.editItem = function(item, $editElem) {
		var editDataIndex = self.data.indexOf($editElem.prev().prev().attr('data-value'));
		if (editDataIndex === -1) {
			return;
		}
		if (item == '') {
			return;
		}
		self.data[editDataIndex] = item;
		
		return self.data;
	};
}

function View(model) {
	var self = this;

	function init() {
		var wrapper = tmpl($('#wrapper-template').html());

		$('body').append(wrapper);
		self.elements = {
			input: $('.list__item__value'),
			addBtn: $('.list__item__add'),
			listContainer: $('.list')
		};
		self.renderList(model.data);
	}

	self.renderList = function(data) {
		var list = tmpl($('#list-template').html(), {data: data});
		self.elements.listContainer.html(list);
	};

	self.addEditItems = function(item, $editElem) {
		var itemNew = $('<input type="text" class="list__item__value short" value="' + item + '">');
        var saveBtn =$('<button class ="list__item__edit__save">Save</button>');
        $editElem.closest('button').hide();
       	$editElem.parent().append(saveBtn).append(itemNew);
	};

	init();
}

function Controller(model, view) {
	var self = this;

	view.elements.addBtn.on('click', addItem);
	// обработчик слушает по клику на listContainer, который есть всегда и фильтрует его по .item-delete 
	view.elements.listContainer.on('click', '.list__item__delete', removeItem);
	
	view.elements.listContainer.on('click', '.list__item__edit', editItem);

	view.elements.listContainer.on('click', '.list__item__edit__save', editItemSave);

	function addItem() {
		var newItem = view.elements.input.val();
		model.addItem(newItem);
		view.renderList(model.data);
		view.elements.input.val('');
	}

	function removeItem() {
		var item = $(this).attr('data-value');

		model.removeItem(item);
		view.renderList(model.data);
	}

	function editItem() {
		var editElem = $(this);
		var item = $(this).attr('data-value');
		view.addEditItems(item, editElem);
	}

	function editItemSave() {
		var $editElem = $(this);
		var item = $(this).next().val();
		model.editItem(item, $editElem);
		view.renderList(model.data);
	}
}

$(function(){
	var firstToDoList = ['Learn Js', 'Play with Yulianna', 'drink tea'];
	var model = new Model(firstToDoList);

	var view = new View(model);

	var controller = new Controller(model, view);
});
