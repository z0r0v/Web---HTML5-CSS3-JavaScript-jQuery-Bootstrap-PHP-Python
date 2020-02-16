let object = {
    data: {
        button: $('button'),
        paragraph: $('.value'),
    },
    methods: {
        changedP: function () {
            object.data.paragraph.text("now clicked button: " + $(this).text());
        },
    }
};
object.data.button.on("click", object.methods.changedP);