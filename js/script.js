
// Sets the focus to the first element on a page and then, 
// if an error message is generated? Sets the focus on a button above the message area.
// @param idFirstElement - The first element to set document focus.
// @param idMessagesElement - The element to test for error messages.
// @param idButtonElement - The element to set the page focus when error messages are displayed.

function GetId(winRef, divID) 
{
    var returnVal;
    
    if( document.getElementById ) 
    {
        returnVal = winRef.document.getElementById(divID);
        return returnVal;
    }
    
    if( document.all ) 
    { 
        returnVal = winRef.document.all[divID];
        return returnVal;
    }
    
    returnVal = winRef.document[divID];
    return returnVal;
}

function setFocus(idFirstElement, idMessagesElement, idButtonElement)
{
    var firstElement;
    var messageElement;
    var buttonElement;
    
    if(idFirstElement != null)
    {
        firstElement = GetId(window, idFirstElement);
    }
    if(idMessagesElement != null)
    {
        messageElement = GetId(window, idMessagesElement);
    }
    if(idButtonElement != null)
    {
        buttonElement = GetId(window, idButtonElement);
    }
    
    if (messageElement != null && 
        messageElement.childNodes.length != 0 &&
        buttonElement != null)
    {
        buttonElement.focus();
    } 
    else 
    {
        firstElement.focus();
    }
}
