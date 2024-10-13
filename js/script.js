chatIDArray = [];
document.getElementById("MSG_LIMIT_NUMBER").value = document.getElementById("MSG_LIMIT").value;

const containsOnlyNumbers = (str) => {
    return /^[0-9]+$/.test(str);
};

function ChatIDSubmit(){
    if (containsOnlyNumbers(document.getElementById("chatids").value)){
        chatID = document.getElementById("chatids").value;
        if (chatID != ""){
            chatIDArray.push(chatID);
                txtarea = document.getElementById("Chat_IDS")
                prima = txtarea.value;
                if(!prima){
                    txtarea.value = chatID;
                } else {
                    txtarea.value = prima += "," + chatID;
                }   
        }
    }else{
        alert("Not a valid value!");
    }
}

function rangeToNumber(rangeObject, numberObject){
    numberObject.value = rangeObject.value;
}

function numberToRange(rangeObject, numberObject){
    rangeObject.value = numberObject.value;
}

function generateConfig(){
    
}