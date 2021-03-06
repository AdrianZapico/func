

//{success: true, deck_id: "ejk5oddq6fq0", remaining: 52, shuffled: true}



function get(url)
{
    var data;
    $.ajax({
              url: url, 
              method: 'GET',
              dataType: 'json',
              async: false,
          }).done(function(result) {
             data = result;
          })
          return data;
      }


function createDeck()
{
    window.deck =  get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
             
}
    
function drawCard(cards)
{
       return get( "https://deckofcardsapi.com/api/deck/"+window.deck.deck_id+"/draw/?count="+cards)    
}

function rollCard()
{
    var result = drawCard(2);
    for(i = 0; i<result.cards.length; i++){
        $('#cartas').prepend('<img src="'+result.cards[i].image+'">');
    }
}


function soma()
{

 var input1 = parseInt($("#input1").val());
 var input2 = parseInt($("#input2").val());
 var result = input1 + input2;
 
 $("#resultado").val(result);
 
}
function sub()
{

    var inputSub = parseInt($("#inputSub").val());
    var inputSub2 = parseInt($("#inputSub2").val());
    var resto = inputSub - inputSub2;

    $("#resto").val(resto);

}
function mult()
{

    var inputmult = parseInt($("#inputMult").val());
    var inputmult2 = parseInt($("#inputMult2").val());
    var cation = inputmult * inputmult2;

    $("#mCation").val(cation);

}
function division()
{

    var inputDiv = parseInt($("#inputDiv").val());
    var inputDiv2 = parseInt($("#inputDiv2").val());
    var dVision = inputDiv / inputDiv2;

    $("#dVision").val(dVision);

}
