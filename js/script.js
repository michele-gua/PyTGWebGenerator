BotToken = document.getElementById('BotToken')
MsgLimit = document.getElementById('MsgLimit')
chatIDs = document.getElementById('Chat_IDS')
BackupScriptPath = document.getElementById('BackupScriptPath')
BackupScriptArgs = document.getElementById('BackupTextArea')
NginxDataBaseUpdatePath = document.getElementById('NginxDBUpdatePath')
EnableHeartbeat = document.getElementById('EnableHeartbeat')
HeartbeatUrl = document.getElementById('HeartbeatUrl')
HeartbeatInterval = document.getElementById('HeartbeatInterval')
HeartbeatMaxRetries = document.getElementById('HeartbeatMaxRetries')
HeartbeatLogOnSucc = document.getElementById('HeartbeatLogSuccess')
HeartbeatFailOnErr = document.getElementById('HeartbeatFailOnError')
TokenTimeout = document.getElementById('TokenTimeout')
AuthSecret = document.getElementById('AuthSecret')
AuthUsr = document.getElementById('AuthUser')
AuthPwdHash = document.getElementById('AuthPwdHash')
configTextArea = document.getElementById('ConfigFile')

// Function to control if a string contains only numbers
const containsOnlyNumbers = (str) => {
    return /^[0-9]+$/.test(str);
};

function checkboxChecker(checkBoxItem){
    if (checkBoxItem.checked){
        return "True"
    }
    if (!checkBoxItem.checked){
        return "False"
    }
}

// Function to add ChatIds to the array and then to the textarea
function NumberSubmit(textInput, textArea){
    if (containsOnlyNumbers(textInput.value)){
        if (textInput.value != ""){
                prima = textArea.value;
                if(!prima){
                    textArea.value = textInput.value;
                } else {
                    textArea.value = prima += "," + textInput.value;
                }   
        }
    }else{
        alert("Not a valid value!");
    }
}

function TextSubmit(textInput, textArea){
    arg = textInput.value;
    if (arg != ""){
        prima = textArea.value;
        if(!prima){
            textArea.value = '"'+arg+'"';
        } else {
            textArea.value = prima += "," + '"' + arg + '"';
        }
    } else {
        alert("Not a valid value!");
    }
}

// Functions to make the value between range and number inputs the same
function rangeToNumber(rangeObject, numberObject){
    numberObject.value = rangeObject.value;
}

function numberToRange(rangeObject, numberObject){
    rangeObject.value = numberObject.value;
}

function copyText(){
    var TextToCopy = document.getElementById("finalConfigFile");
  
    TextToCopy.select();
    TextToCopy.setSelectionRange(0, 99999);
  
    navigator.clipboard.writeText(TextToCopy.value);
}

function downloadFile(){
    var text = document.getElementById("finalConfigFile").value;
    var blob = new Blob([text], { type: "text/plain" });
    var anchor = document.createElement("a");
    anchor.download = "config.py";
    anchor.href = window.URL.createObjectURL(blob);
    anchor.click();
}

// Final function to create the config
function generateConfig(){
    document.getElementById('finalConfigFile').value = 'BOT_TOKEN = "' + BotToken.value + '"' + '\n' + 'ALLOWED_CHAT_IDS = [' + chatIDs.value + ']' + '\n' + 'MSG_LIMIT = '+ MsgLimit.value + '\n' + 'BACKUP_SCRIPT_PATH = "' + BackupScriptPath.value + '"' + '\n' + 'BACKUP_SCRIPT_ARGS = [' + BackupScriptArgs.value + ']' + '\n' + 'BACKUP_FLAG_PATH = BACKUP_SCRIPT_PATH[0:BACKUP_SCRIPT_PATH.rfind("/")] + "/update"' + '\n' + 'NGINX_DB_UPDATE_PATH = "' + NginxDataBaseUpdatePath.value + '"' + '\n' + 'HEARTBEAT_ENABLED = ' + checkboxChecker(EnableHeartbeat) + '\n' + 'HEARTBEAT_URL = "' + HeartbeatUrl.value + '"' + '\n' + 'HEARTBEAT_INTERVAL = ' + HeartbeatInterval.value + '\n' + 'HEARTBEAT_MAX_RETRIES = ' + HeartbeatMaxRetries.value + '\n' + 'HEARTBEAT_LOG_SUCCESS = ' + checkboxChecker(HeartbeatLogOnSucc) + '\n' + 'HEARTBEAT_FAIL_ON_ERROR = ' + checkboxChecker(HeartbeatFailOnErr);
}

function generateAPIConfig(){
    DebugLoggingVal = checkboxChecker('DebugLogging')
    ProtectedContainer = document.getElementById('ProtectedContainersTextArea').value
    document.getElementById('finalConfigFile').value = 'DEBUG_LOGGING = ' + DebugLoggingVal + '\n' + 'PROTECTED_CONTAINERS = [' + ProtectedContainer + ']' + '\n' + 'BACKUP_SCRIPT_PATH = "' + BackupScriptPath.value + '"' + '\n' + 'BACKUP_SCRIPT_ARGS = [' + BackupScriptArgs.value + ']' + '\n' + 'BACKUP_FLAG_PATH = BACKUP_SCRIPT_PATH[0:BACKUP_SCRIPT_PATH.rfind("/")] + "/update"' + '\n' + 'NGINX_DB_UPDATE_PATH = "' + NginxDataBaseUpdatePath.value + '"' + '\n' + 'TOKEN_TIMEOUT = ' + TokenTimeout.value + '\n' + 'AUTH_SECRET = "' + AuthSecret.value + '"' + '\n' + 'AUTH_USERNAME = "' + AuthUsr.value + '"' + '\n' + 'AUTH_PASSWORD_HASH = "' + AuthPwdHash.value + '"'
}

function clearPage(){
    window.location.reload();
}