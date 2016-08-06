(function(){
    var menu = document.querySelector('.menu');
    var navList = document.querySelectorAll('.nav-list li a');
    //handle menu button click
    menu.addEventListener('click',function (event) {
        if (this.className.match('open')) {
            this.className = 'menu';
            return;
        }
        this.className = 'menu open';
    });
    //attach navlist clicks handler
    navList.forEach(function(item){
        item.addEventListener('click', function () {
            if (menu.className.match('open')) {
                menu.className = 'menu';
            }
        });
    });
}())
