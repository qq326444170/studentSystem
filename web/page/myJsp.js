    function getInfo(proId,s) {
        //获得商品名称框的值
        var proNameVal=document.getElementById(proId).value;
        strHtml1="<option>"+proNameVal+"</option>";
        //找到对应的下拉框对象
        document.getElementById(s).innerHTML=strHtml1;
    }
