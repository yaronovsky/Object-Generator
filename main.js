$(function () {

    var arr = [],
        age, name, eye, counter = 0;

    var obj = {
        person: {},


        create: function (age, name, eyecolor) {
            p = this.person;

            this.person = {};
            p.age = age;
            p.name = name;
            p.eyecolor = eyecolor;
            arr.push(p)
            $('#objs').append("<button id='el" + counter + "'>" + counter + "</button>" + "<div id='hide' class='btn'>" + "Age: "+arr[counter].age + "<br>" +"Name: "+ arr[counter].name + "<br>" + "Eye Color: "+arr[counter].eyecolor + "</div>");
            $('#age').val('');
            $('#name').val('');
            $('#eyecolor').val('');
            $('#el' + counter).on('click', function () {
                $(this).next().fadeToggle('fast');
            })
            counter++;
        }

    };

    $('#send').on('click', function () {
        age = $('#age').val();
        name = $('#name').val();
        eye = $('#eyecolor').val();
        obj.create(age, name, eye);
    })


});