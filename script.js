//Javascript
  
  function sendMessage(event){
    var message = document.getElementById("userMessage").value;
    var pNew = document.createElement("P");
    var txtnode = document.createTextNode(msg);
    pNew.appendChild(textnode);
    document.getElementById("chatApp").appendChild(pNew);
    document.getElementById("userMessage").value="";
  };