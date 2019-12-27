if(document.getElementById("mirophone"))
 {
	 function fsll()
	 {
		 var miropho=document.getElementById("mirophone");
		 if(miropho.className=='mirophone')
		 {
			 miropho.className="mirophone hotmiro"
			 }
		else {
			 miropho.className="mirophone"
			}	 
		 
		 }
   var t_cls=setInterval("fsll()",250)		 
		 
	}
	
function hidebox(){
	document.getElementById("wszl").style.top="110%";
	setTimeout("document.getElementById('wszl').style.display='none'",1000)
	
}	
var t=0;
function lyjs(){
	xsec=parseInt(document.getElementById('jishi').innerHTML);
   if(t==0)t=setInterval("slff()",1000);
  }
function slff(){
	if(xsec>0)
	{ 
		document.getElementById('jishi').innerHTML=xsec--;
		}
	else{
		clearInterval(t);
		}	
	}
	
function reroll()	
{
	if(t!=0)clearInterval(t);
	document.getElementById('jishi').innerHTML="59";
	
	}

//通用ajax list
var page=2;
function morelist(url,data) {
    aj.post(xxx.php+url, data + "&page=" + page, function (msg) {
        data = eval('(' + msg + ')');
        if (data) {
            var indexdiv = document.createElement("span");
            indexdiv.innerHTML = data.html;
            document.getElementById("plmore").appendChild(indexdiv);
            page++;
        } else {
            alert("加载失败！");
        }
        if (data.status == 1) {
            //$$("seemore").style.display = "none";//判断页数是不是没了
            document.getElementById("pinglun-more").style.display = "none";//判断页数是不是没了
        }
    })
}