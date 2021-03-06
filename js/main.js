// console.log('main.js loaded');

$(document).ready(function() {
    'use script';
    // console.log('main.js loaded');
    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));

    var c = Shape.Circle(200, 200, 80);
    c.fillColor = 'black';
    var text = new PointText(200, 200);
    text.justification = 'center';
    text.fillColor = 'white';
    text.fontsize = 20;
    text.content = 'Hello, World!';

    var tool = new Tool();
    tool.onMouseDown = function(event) {
        var c = Shape.Circle(event.point.x, event.point.y, 20);
        c.fillColor = 'green';
    }

    paper.view.draw(); 
});