
const object = {
    data: {
        boxImg:document.querySelector('.body__box-img'),
    },
    methods: {
        createElement: function () {

            for (let i = 0; i < 8; i++) {
                const picture = document.createElement("picture");
                const img = document.createElement("img");
                object.data.boxImg.appendChild(picture);
                picture.appendChild(img);
                img.src=`src/img/img-${i}.jpg`;
            }
        }
    }
};

object.methods.createElement();



