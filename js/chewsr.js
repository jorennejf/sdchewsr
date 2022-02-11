var list = [];
list.push({'name':'Sushi Diner', 'location': 'Mesa College', 'cuisine': 'Japanese'});
list.push({'name':'Homestyle Hawaiian', 'location': 'Mesa College', 'cuisine': 'Hawaiian'});
list.push({'name':'Domino\'s Pizza', 'location': 'Mesa College', 'cuisine': 'American'});
list.push({'name':'K\'s Sandwiches', 'location': 'Mesa College', 'cuisine': 'Vietnamese'});
list.push({'name':'Custcatlan Salvadorean', 'location': 'Mesa College', 'cuisine': 'Latin'});
list.push({'name':'Dim Sum', 'location': 'Convoy', 'cuisine': 'Chinese'});
list.push({'name':'H-Mart Food Court', 'location': 'Convoy', 'cuisine': 'Korean'});
list.push({'name':'Cross Street', 'location': 'Convoy', 'cuisine': 'Korean'});
list.push({'name':'Popeyes', 'location': 'Convoy', 'cuisine': 'American'});
list.push({'name':'Phuong Trang', 'location': 'Convoy', 'cuisine': 'Vietnamese'});
list.push({'name':'Koon Thai', 'location': 'Convoy', 'cuisine': 'Thai'});
list.push({'name':'Coco Ichibanya', 'location': 'Convoy', 'cuisine': 'Japanese'});
list.push({'name':'Nishiki Ramen', 'location': 'Convoy', 'cuisine': 'Japanese'});
list.push({'name':'Poki 1/2', 'location': 'Convoy', 'cuisine': 'Hawaiian'});
list.push({'name':'Costco', 'location': 'Convoy', 'cuisine': 'American'});
list.push({'name':'Taco Stand', 'location': 'Convoy', 'cuisine': 'Latin'});
list.push({'name':'In N Out', 'location': 'Convoy', 'cuisine': 'American'});
list.push({'name':'Katsu Cafe', 'location': 'Clairemont Mesa', 'cuisine': 'Japanese'});
list.push({'name':'Ajisen Ramen', 'location': 'Clairemont Mesa', 'cuisine': 'Japanese'});
list.push({'name':'Arby\'s', 'location': 'Clairemont Mesa', 'cuisine': 'American'});
list.push({'name':'Sam Woo', 'location': 'Clairemont Mesa', 'cuisine': 'Chinese'});
list.push({'name':'PT Eatery', 'location': 'Clairemont Mesa', 'cuisine': 'Vietnamese'});
list.push({'name':'Mom & Dom\'s Pizza', 'location': 'Clairemont Mesa', 'cuisine': 'American'});
list.push({'name':'Rubio\'s', 'location': 'Clairemont Mesa', 'cuisine': 'Latin'});
list.push({'name':'Elijah\'s', 'location': 'Clairemont Mesa', 'cuisine': 'American'});
list.push({'name':'Ma\'s House', 'location': 'Clairemont Mesa', 'cuisine': 'Chinese'});
list.push({'name':'Okan Diner', 'location': 'Clairemont Mesa', 'cuisine': 'Japanese'});
list.push({'name':'Mister Falafel', 'location': 'Clairemont Mesa', 'cuisine': 'Mediterranean'});
list.push({'name':'Main Chick', 'location': 'Clairemont Mesa', 'cuisine': 'American'});
list.push({'name':'Chili\'s', 'location': 'Clairemont Mesa', 'cuisine': 'American'});
list.push({'name':'Domino\'s', 'location': 'Clairemont Mesa', 'cuisine': 'American'}); //duplicate
list.push({'name':'Dino\'s Gyros', 'location': 'Clairemont Mesa', 'cuisine': 'Mediterranean'});
list.push({'name':'McDonald\'s', 'location': 'Clairemont Mesa', 'cuisine': 'American'});
list.push({'name':'McDonald\'s', 'location': 'Balboa', 'cuisine': 'American'}); //duplicate
list.push({'name':'Taco Bell', 'location': 'Clairemont Mesa', 'cuisine': 'Latin'});
list.push({'name':'Taco Bell', 'location': 'Balboa', 'cuisine': 'Latin'}); //duplicate
list.push({'name':'Boston Market', 'location': 'Balboa', 'cuisine': 'American'});
list.push({'name':'Panera Bread', 'location': 'Balboa', 'cuisine': 'American'});
list.push({'name':'The Habit', 'location': 'Balboa', 'cuisine': 'American'});
list.push({'name':'Five Guys', 'location': 'Balboa', 'cuisine': 'American'});
list.push({'name':'Dickey\'s BBQ', 'location': 'Balboa', 'cuisine': 'American'});
list.push({'name':'Krispy Krunchy Chicken', 'location': 'Balboa', 'cuisine': 'American'});
list.push({'name':'Thai Time', 'location': 'Balboa', 'cuisine': 'Thai'});
list.push({'name':'Luna Grill', 'location': 'Balboa', 'cuisine': 'Mediterranean'});
list.push({'name':'Vallarta\'s', 'location': 'Balboa', 'cuisine': 'Latin'});
list.push({'name':'Hawaiian Fresh Seafood', 'location': 'Mira Mesa', 'cuisine': 'Hawaiian'});
list.push({'name':'Jollibee', 'location': 'Mira Mesa', 'cuisine': 'Filipino'});
list.push({'name':'Grill City', 'location': 'Mira Mesa', 'cuisine': 'Filipino'});
list.push({'name':'Raising Cane\'s', 'location': 'Mira Mesa', 'cuisine': 'American'});
list.push({'name':'La Fuente', 'location': 'Other', 'cuisine': 'Latin'});
list.push({'name':'Ike\'s Sandwiches', 'location': 'Other', 'cuisine': 'American'});
list.push({'name':'Wingstop', 'location': 'Other', 'cuisine': 'American'});
list.push({'name':'In N Out', 'location': 'Other', 'cuisine': 'American'}); //duplicate
//TODO what to do with duplicates?

//TODO clean up variable names?
//if one of these arrays are empty, then that category will search through all
var locationlist = [];
var cuisinelist = [];

function applyFiltersUI(){
    if(locationlist.length > 0 || cuisinelist.length > 0){
        $('.btn-filter').removeClass('active');
        for(var i=0; i < locationlist.length; i++){
            document.getElementById(locationlist[i]).classList.add('active');
        }
        for(var i=0; i < cuisinelist.length; i++){
            document.getElementById(cuisinelist[i]).classList.add('active');
        }
    } else {
        $('.btn-filter').removeClass('active');
        $('.all').html('Select All');
    }
}

function createFilterArrays(){
    locationlist = []; //reset
    cuisinelist = []; //reset

    //first filter through locations if locations are selected
    var locations = $('.locations').children('.active');
    for(var j=0; j<locations.length; j++){
        locationlist.push(locations[j].innerText);
    }

    //then filter through cuisines
    var cuisines = $('.cuisines').children('.active');
    for(var j=0; j<cuisines.length; j++){
        cuisinelist.push(cuisines[j].innerText);
    }
    closeFilters();
}

function randomize(){
    $('#resultIcon').hide();
    $('#resultHolder').show();
    var newlist = [];

    //if filters are checked, narrow down options
    if(locationlist.length > 0 || cuisinelist.length > 0){
        newlist = []; //reset list
        for(var i=0; i<list.length; i++){
            var templist = [];
            if(locationlist.length > 0){
                for(var j=0; j<locationlist.length; j++){
                    var temp = list.filter(function(obj) {
                        return obj['location'] == locationlist[j];
                    });
                    templist = templist.concat(temp);
                }
            }
            if(cuisinelist.length == 0){
                newlist = templist;
            } else {
                for(var j=0; j<cuisinelist.length; j++){
                    if(templist.length > 0){ //further filter through options
                        var temp = templist.filter(function(obj) {
                            return obj['cuisine'] == cuisinelist[j];
                        });
                    } else {
                        var temp = list.filter(function(obj) {
                            return obj['cuisine'] == cuisinelist[j];
                        });
                    }
                    newlist = newlist.concat(temp);
                }
            }
        }
    }
    //if no filters selected, do not filter
    if(newlist.length==0){
        newlist = list;
    }

    //get a random result
    for (var i = 0; i < 100; i++) {
        var delay = 1000*Math.pow(2, 10*(i/100-1))+0; //spins for 1000ms(1sec) then slows down and stops
        setTimeout(function () {
            var index = newlist.length;
            index = Math.floor(Math.random()*index);
            $('#result').html(newlist[index].name);
            
            //resize text if too long so it kinda stays centered
            if($('#result').text().length > 20){
                $('#result').css('font-size', 'calc(1.375rem + 0.1vw)');
            } else {
                $('#result').css('font-size', 'calc(1.375rem + 1.5vw)');
            }
        }, delay);

        setTimeout(() => {$('#subtitle').html('Not feeling it?<br/>Tap to randomize again!')}, 3000);//shows message after 3 seconds
    }
}

function selectAll(button, category){
    if(button.innerText == 'Select All') {
        $('.'+category+' label').addClass('active');
        button.innerText = 'Clear All';
    } else {
        $('.'+category+' label').removeClass('active');
        button.innerText = 'Select All';
    }
}

function reset(){
    $('.btn-filter').removeClass('active');
    $('.all').html('Select All');
}

function openFilters(){
    $('#filtersHolder').css('left', '0');
    $('#filtersHolder').show();
}

function closeFilters(){
    $('#filtersHolder').css('left', '1000px');
    $('#mainHolder').show();
    applyFiltersUI();
}

$(document).ready(function() {
    $('#startupModal').modal('show');
});