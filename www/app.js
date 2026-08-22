import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"


var btnBmi = document.getElementById("btnBmi")



class Bmi {
    constructor(weight, height) {
        this.w = weight
        this.h = height
    }
    get weight() {
        return this.w
    }
    get height() {
        return this.h
    }
    calBMI() {
        let bmi = this.w / (this.h * this.h)
        return bmi
    }
    classBMI(numBmi) {
        if (numBmi < 18.5) {
            return "กินอีกกก"
        } else if (numBmi < 22.9) {
            return "หุ่นดีเว่ออออ"
        } else if (numBmi < 24.9) {
            return "เริ่มเกินแล้วน้าา"
        } else if (numBmi < 29.9) {
            return "ไปออกกำลังกาย!"
        } else {
            return "ไปหาหมอด่วน!"
        }
    }
}


btnBmi.addEventListener("click", () => {
    console.log("hey")

    var weight = document.getElementById("weight").value
    var height = document.getElementById("height").value

    if (height > 3) {
        alert("โปรดกรอกความสูงเป็นหน่วยเมตร เช่น 1.65")
    } else {
        // let num_bmi = calBMI(weight, height)
        // let txt_bmi = classBMI(num_bmi)

        let num_bmi = new Bmi(weight, height)
        let bmi = num_bmi.calBMI()
        let txt_bmi = num_bmi.classBMI(bmi)

        console.log(num_bmi)
        console.log(num_bmi.weight, num_bmi.height, bmi)
        console.log(txt_bmi)


        if (bmi < 18.5) {
            document.getElementById('txtBmi').innerHTML = '<h1 class="badge text-bg-success">' + txt_bmi + '</h1>'
            document.getElementById('numBmi').innerHTML = '<h1 class="badge text-bg-warning">' + bmi.toFixed(2) + '</h1>'
            document.getElementById('picBmi').innerHTML = '<img src="https://i.pinimg.com/1200x/30/32/08/3032089d860e99f8539e3471f3f2ee2e.jpg">'
        } else if (bmi < 22.9) {
            document.getElementById('txtBmi').innerHTML = '<h1 class="badge text-bg-success">' + txt_bmi + '</h1>'
            document.getElementById('numBmi').innerHTML = '<h1 class="badge text-bg-warning">' + bmi.toFixed(2) + '</h1>'
            document.getElementById('picBmi').innerHTML = '<img src="https://i.pinimg.com/736x/12/92/e8/1292e8a5ecb960000512ae55c0c355fa.jpg">'
        } else if (bmi < 24.9) {
            document.getElementById('txtBmi').innerHTML = '<h1 class="badge text-bg-success">' + txt_bmi + '</h1>'
            document.getElementById('numBmi').innerHTML = '<h1 class="badge text-bg-warning">' + bmi.toFixed(2) + '</h1>'
            document.getElementById('picBmi').innerHTML = '<img src="https://i.pinimg.com/736x/15/f4/bb/15f4bb8823b7161150925b43a5d1e131.jpg">'
        } else if (bmi < 29.9) {
            document.getElementById('txtBmi').innerHTML = '<h1 class="badge text-bg-success">' + txt_bmi + '</h1>'
            document.getElementById('numBmi').innerHTML = '<h1 class="badge text-bg-warning">' + bmi.toFixed(2) + '</h1>'
            document.getElementById('picBmi').innerHTML = '<img src="https://i.pinimg.com/736x/59/99/ab/5999ab6972cd643500752ca25f753802.jpg">'
        } else {
            document.getElementById('txtBmi').innerHTML = '<h1 class="badge text-bg-success">' + txt_bmi + '</h1>'
            document.getElementById('numBmi').innerHTML = '<h1 class="badge text-bg-warning">' + bmi.toFixed(2) + '</h1>'
            document.getElementById('picBmi').innerHTML = '<img src="https://i.pinimg.com/736x/38/9d/05/389d05a67f00f151589cc8b30984ee3f.jpg">'
        }

        // console.log(weight, height)
        // console.log("BMI", bmi)
    }
})

