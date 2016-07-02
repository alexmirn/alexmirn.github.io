define (
    'view',
    ['model', 'jquery', 'template'],
    function (model) {
        
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

        var view = new View(model);
        return view;
    }
);