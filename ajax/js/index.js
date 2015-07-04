window.onload = function(){
 ajax({
	method : 'get',
	url : 'http://study.163.com/webDev/couresByCategory.htm',
	data : {
		'pageNo':'2',
		'psize':'12',
		'type':'10'
	},
	success : function (data) {
		console.log(data);
		var _data= JSON.parse(data);

		var oDiv = document.getElementById("okdklkd");

		for(i=0;i<_data.list.length;i++){
			var oLi = document.createElement("li");
			oDiv.appendChild(oLi);

			var _img = document.createElement("img");
			var _name = document.createElement("p");
			var _price = document.createElement("p");
			var _description = document.createElement("p");

			_img.setAttribute("id", "okmy");
			_img.setAttribute("src", _data.list[i].bigPhotoUrl);

			_name.setAttribute("class", "okmyy");
			_name.innerHTML=_data.list[i].name;
			_price.innerHTML="价格："+_data.list[i].price;
			_description.innerHTML=_data.list[i].description;

			oLi.appendChild(_img);
			oLi.appendChild(_name);
			oLi.appendChild(_price);
			oLi.appendChild(_description);
		}
	},
	async : true
});
}
