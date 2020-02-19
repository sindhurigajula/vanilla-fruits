
exports.getFruit = function(req,res){
    var fruitData = [
        {
            "name": "Apple",
            "colors": ["red", "green", "yellow"],
            "in_season": true
        },
        {
            "name": "Orange",
            "colors": ["orange"],
            "in_season": true
        },
        {
            "name": "Grapes",
            "colors": ["purple", "green"],
            "in_season": false
        },
        {
            "name": "Lime",
            "colors": ["green"],
            "in_season": false
        },
        {
            "name": "Banana",
            "colors": ["yellow"],
            "in_season": false
        },
        {
            "name": "Watermelon",
            "colors": ["red"],
            "in_season": false
        },
        {
            "name": "Blueberry",
            "colors": ["blue"],
            "in_season": true
        },
        {
            "name": "Coconut",
            "colors": ["white"],
            "in_season": true
        }
    ];
    res.send(fruitData);
}