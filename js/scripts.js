$(document).ready(function () {

	let theTotal = 0;
    let rest = 0;

	$("button").click(function(){

	   theTotal = Number(theTotal) + Number($(this).val());
       rest = theTotal - 15;

	   $(".total").text("Licznik: " + theTotal + " $");

		if (theTotal>=15) {

			$(".total").text("Zebrane 15$"); 
            $(".rest").text("Dodatkowo wpłacono: " + rest + " $");
		}

	});

	$(".myButton").click(function () {
        animateProgressBar($("total").val());
    });

    function animateProgressBar(percentageCompleted) {
        $("#progressBar").animate({
            "width": (2000 * theTotal) / 100
        }, 4000);

        $({ counter: 1 }).animate({ counter: percentageCompleted }, {
            duration: 3000,
            step: function () {
                $("#progressBar").text(Math.ceil(this.counter) + "%");
            }
        })
    }
});