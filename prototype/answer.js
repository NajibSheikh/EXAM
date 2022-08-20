// function answer has two methods walk and talk
// create chain prototype object that has sing and dance methods 
// and lastly the objects prototype has skip and jig methods 
//as long as there is chain prototype functions has to do nothing

const answer = {
    walk: function () {

    },
    talk: function () {

    }
}
const obj1 = Object.create(answer, {
    sing: {value: function () {

    }},
    dance: {value: function () {

    }}
})
const obj2 = Object.create(obj1, {
    skip: {value: function () {

    }},
    jig: {value: function () {
        
    }}
})