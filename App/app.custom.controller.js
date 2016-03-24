(function () {
   

    app.directive('today', ['$filter', function ($filter) {
        return {
          
            template: function (element, attrs) {
                $('#test').val('');
                var date = $filter('date')(new Date(), attrs.dateFormat);
                return "<span>" + date + "</span>";
            }, replace: false,
            transclude: true
    
        };
    }]);

   
})();