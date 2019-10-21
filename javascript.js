$("#about").on("click", function() 
{
	$("body, html").animate(
	{
		scrollTop: $("section:nth-child(1)").offset().top
	}, 1500)
})

$("#services").on("click", function() 
{
	$("body, html").animate(
	{
		scrollTop: $("section:nth-child(2)").offset().top
	}, 1500)
})

$("#portfolio, section:nth-child(4) > .hello > .button, header > .button").on("click", function() 
{
	$("body, html").animate(
	{
		scrollTop: $("section:nth-child(3)").offset().top
	}, 1500)
})

$("#contact").on("click", function() 
{
	$("body, html").animate(
	{
		scrollTop: $("section:nth-child(4)").offset().top
	}, 1500)
})

$("#graphic").on("click", function() 
{
	$(".project:nth-child(1)").hide()
	$(".project:nth-child(2)").hide()
	$(".project:nth-child(6)").hide()
	$(".project:nth-child(8)").hide()
	$(".project:nth-child(3)").show()
	$(".project:nth-child(4)").show()
	$(".project:nth-child(5)").show()
	$(".project:nth-child(7)").show()
})

$("#logobranding").on("click", function() 
{
	$(".project:nth-child(2)").hide()
	$(".project:nth-child(3)").hide()
	$(".project:nth-child(4)").hide()
	$(".project:nth-child(5)").hide()
	$(".project:nth-child(7)").hide()
	$(".project:nth-child(8)").hide()
	$(".project:nth-child(1)").show()
	$(".project:nth-child(6)").show()
})

$("#uxui").on("click", function() 
{
	$(".project:nth-child(1)").hide()
	$(".project:nth-child(3)").hide()
	$(".project:nth-child(4)").hide()
	$(".project:nth-child(5)").hide()
	$(".project:nth-child(6)").hide()
	$(".project:nth-child(7)").hide()
	$(".project:nth-child(2)").show()
	$(".project:nth-child(8)").show()
})

$("#all").on("click", function() 
{
	$(".project").show()
})

$("section:nth-child(2) > .contener > .content:nth-child(1) > .button").on("click", function() 
{
	$("body, html").animate(
	{
		scrollTop: $("section:nth-child(3)").offset().top
	}, 1500)
	$(".project:nth-child(1)").hide()
	$(".project:nth-child(3)").hide()
	$(".project:nth-child(4)").hide()
	$(".project:nth-child(5)").hide()
	$(".project:nth-child(6)").hide()
	$(".project:nth-child(7)").hide()
	$(".project:nth-child(2)").show()
	$(".project:nth-child(8)").show()
})

$("section:nth-child(2) > .contener > .content:nth-child(2) > .button").on("click", function() 
{
	$("body, html").animate(
	{
		scrollTop: $("section:nth-child(3)").offset().top
	}, 1500)
	$(".project:nth-child(1)").hide()
	$(".project:nth-child(2)").hide()
	$(".project:nth-child(6)").hide()
	$(".project:nth-child(8)").hide()
	$(".project:nth-child(3)").show()
	$(".project:nth-child(4)").show()
	$(".project:nth-child(5)").show()
	$(".project:nth-child(7)").show()
})

$("section:nth-child(2) > .contener > .content:nth-child(3) > .button").on("click", function() 
{
	$("body, html").animate(
	{
		scrollTop: $("section:nth-child(3)").offset().top
	}, 1500)
	$(".project:nth-child(2)").hide()
	$(".project:nth-child(3)").hide()
	$(".project:nth-child(4)").hide()
	$(".project:nth-child(5)").hide()
	$(".project:nth-child(7)").hide()
	$(".project:nth-child(8)").hide()
	$(".project:nth-child(1)").show()
	$(".project:nth-child(6)").show()
})




