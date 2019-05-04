iniciar= function() {
    var element = $('.floating-chat');

    setTimeout(function () {
        element.addClass('enter');
    }, 1000);

    element.click(openElement);
}


openElement= function () {
    var element = $('.floating-chat');
    var messages = element.find('.messages');
    var textInput = element.find('.text-box');
    element.find('>i').hide();
    element.addClass('expand');
    element.find('.chat').addClass('enter');
    var strLength = textInput.val().length * 2;
    element.off('click', openElement);
    element.find('.header button').click(closeElement);
    messages.scrollTop(messages.prop("scrollHeight"));
}

closeElement = function (){
    var element = $('.floating-chat');
    element.find('.chat').removeClass('enter').hide();
    element.find('>i').show();
    element.removeClass('expand');
    element.find('.header button').off('click', closeElement);
    element.find('#sendMessage').off('click', sendNewMessage);
    setTimeout(function () {
        element.removeClass('expand');
        element.find('.chat').removeClass('enter').show();
        element.find('>i').show();
        element.removeClass('expand');
        element.find('.header button').off('click', closeElement);
        element.click(openElement);
    }, 500);
}

createUUID = function (){
    // http://www.ietf.org/rfc/rfc4122.txt
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";

    var uuid = s.join("");
    return uuid;
}

