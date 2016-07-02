define (
    'model',
    [],
    function () {

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
        var firstToDoList = ['Learn Js', 'Play with Yulianna', 'drink tea'];
        var model = new Model(firstToDoList);
        return model;
    }
);

