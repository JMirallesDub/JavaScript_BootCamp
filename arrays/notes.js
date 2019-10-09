const notes = [{
    title: 'Note 1',
    body: 'I would like to go to Spain.'
}, {
    title: 'Note 2',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Note 3',
    body: 'Get a new seat.'
}];

const sortNotes = function(notes){
    notes.sort(function(a, b){
        if (a.body.toLowerCase() < b.body.toLowerCase()) {
            return -1;
        } else if (b.body.toLowerCase() < a.body.toLowerCase()){
            return 1;
        } else{
            return 0;
        }
    });
};


sortNotes(notes);
console.log(notes);