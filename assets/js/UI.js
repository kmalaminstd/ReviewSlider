import reviews from "./AllReviews.js"

class UI{
    allSelectors(){
        const prevBtnElm = document.querySelector('#prevBtn')
        const nextBtnElm = document.querySelector('#nextBtn')
        const reviewCardElm = document.querySelector('.reviewCard')

        return {
            prevBtnElm,
            nextBtnElm,
            reviewCardElm
        }
    }

    getAllData(num){
        reviews.find( e => {
            if(e.id == num){
                this.showInUi(e)
            }
        })
    }

    showInUi(elem){
        console.log(elem);
        const {reviewCardElm} = this.allSelectors()
        reviewCardElm.innerHTML = `
        <p id="revNo">Review No. ${elem.id}</p>
        <div class="image">
                <img src="${elem.image}">
            </div>
            <div class="reviewerIntro">
                <p>${elem.name}</p>
                <p>${elem.profession}</p>
            </div>
            <div class="revText">
                <p>${elem.review}</p>
            </div>
        `
    }


    initialize(){
        const {
            prevBtnElm,
            nextBtnElm,
            reviewCardElm
        } = this.allSelectors()
        let nextNum = 1
        this.getAllData(nextNum)

        nextBtnElm.addEventListener('click', () => {
            nextNum++
            if(nextNum === reviews.length+1){
                nextNum = 1
            }
            this.getAllData(nextNum)
        })

        prevBtnElm.addEventListener('click', () => {
            nextNum--
            if(nextNum === 0){
                nextNum = reviews.length
            }
            this.getAllData(nextNum)
        })
    }
}

const ui = new UI()
export default ui