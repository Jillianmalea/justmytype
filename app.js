//step 1 makes the upper container hide 
$(document).ready(function () {
    $('#keyboard-upper-container').hide();
    //step 2 shows cap/no cap when shift is initialized
    $(document).keydown(function (e) {
        if (e.which === 16) {
            $('#keyboard-upper-container').show();
            $('#keyboard-lower-container').hide();
        }
    })
    //why does it only higlight once
    $(document).keyup(function (e) {
        //check if end of the sentence is reached
        if (currentSentence.charCodeAt(currentSentence.length) === (letterIndex + 1)) {
            sentIndex++
            ('#sentence').empty();
            ('#sentence').append(currentSentence);

            // if (letterIndex ==)
        }
        if (e.which === 16) {
            $('#keyboard-upper-container').hide();
            $('#keyboard-lower-container').show();
        }
        $('.highlight').removeClass('highlight');
    })

    let sentences = [
        'ten ate neite ate nee enet ite ate inet ent eate',
        'Too ato too nOt enot one totA not anot tOO aNot',
        'oat itain oat tain nate eate tea anne inant nean',
        'itant eate anot eat nato inate eat anot tain eat',
        'nee ene ate ite tent tiet ent ine ene ete ene ate'
    ];

    let sentIndex = 0;
    let letterIndex = 0;
    let currentSentence = sentences[sentIndex];
    let currentLetter = currentSentence[letterIndex];

    $('#sentence').text(currentSentence);
    $('#target-letter').text(currentLetter);

    //WHICH KEY IS PRESSED
    $(document).keypress(function (e) {

        $('#' + e.which).addClass('highlight');

        if (currentSentence.charCodeAt(letterIndex) === e.keyCode) {
            // $('#feedback').empty();
            // $('#yellow-block').css('left', '+=17.5px') => This moves text block highlight thingy 
            $('#feedback').append('<span class= "glyphicon glyphicon-ok"> </span>');
            letterIndex++
            // $('#target-letter').empty()
            // $('#target-letter').append(currentLetter)
            $('#target-letter').text(currentSentence[letterIndex])
            if (letterIndex == currentSentence.length) {
                console.log('go to next sentence')
                letterIndex = 0;
                sentIndex++
                currentSentence = sentIndex
    
                $('#sentence').text(currentSentence);
            }
        } else {
            $('#feedback').append('<span class= "glyphicon glyphicon-remove"> </span>');
        }


    })
})