(function()
{
	var div=document.createElement("div"),a=document.createElement("a"),prev=2;
	div.id="scroll-to-top";
	div.style="width:40px;line-height:40px;overflow:hidden;z-index:999;cursor:pointer;transform:rotate(270deg);position:fixed;bottom:50px;right:0;background-color:#DDD;color:#555;text-align:center;font-size:30px";
	a.title="Back to the top";
	a.href="#";
	a.style="text-decoration:none";
	a.innerHTML="&#10148;";
	document.body.appendChild(div).appendChild(a);
	window.onscroll=function()
	{
		if(window.scrollY>window.innerHeight/2)
		{
			if(prev!=1)
			{
				document.getElementById("scroll-to-top").style.display="block";
				prev=1;
			}
		}
		else if(prev!=0)
		{
			document.getElementById("scroll-to-top").style.display="none";
			prev=0;
		}
	};
	window.onscroll();
})()
