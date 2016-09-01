// external js: draggabilly.pkgd.js

$(document).ready(function () {
    var $draggable = $('.titlecont').draggabilly();
    containment: true
});

$(document).ready(function () {
    var $dragging = null;

    var container = $('#container'),
        c_t = container.offset().top,
        c_l = container.offset().left,
        c_b = c_t + container.height(),
        c_r = c_l + container.width();

    $(document.body).on("mousemove", function (e) {
        if ($dragging) {
            var width = $dragging.width();
            var height = $dragging.height();
            var new_y = (e.pageY > c_t && (e.pageY + height) < c_b) ? e.pageY : undefined;
            var new_x = (e.pageX > c_l && (e.pageX + width) < c_r) ? e.pageX : undefined;

            $dragging.offset({
                top: new_y,
                left: new_x
            });
        }
    });

    $(document.body).on("mousedown", ".cardrag", function (e) {
        $dragging = $(e.target);
    });

    $(document.body).on("mouseup", function (e) {
        $dragging = null;
    });
});

$(document).ready(function () {



    $('#boil').on('mouseenter', function () {
        if (this.paused) this.play();
    }).on('mouseleave', function () {
        if (!this.paused) this.pause();
    });






    $('#vroom').on('mouseenter', function () {
        if (this.paused) this.play();
    }).on('mouseleave', function () {
        if (!this.paused) this.pause();
    });




    $('#honk').on('mouseenter', function () {
        if (this.paused) this.play();
    }).on('mouseleave', function () {
        if (!this.paused) this.pause();
    });




    $('#skid').on('mouseenter', function () {
        if (this.paused) this.play();
    }).on('mouseleave', function () {
        if (!this.paused) this.pause();
    });
});