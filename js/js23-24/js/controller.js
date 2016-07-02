define (
    'controller',
    ['model', 'view', 'jquery'],
    function (model, view) {

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

        var controller = new Controller(model, view);
        return controller;
    }
);