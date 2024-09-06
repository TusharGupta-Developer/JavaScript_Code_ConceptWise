class RailwayForm {
    submit() {
        alert(this.name + "form submitted for train number" + this.trainno);
    }
    cancel() {
        alert(this.name + "This form is cancel for train number" + this.trainno)
    }
    fill(givenname, trainno) {
        this.name = givenname
        this.trainno = trainno
    }
    //In the fill method, this.name and this.trainno refer to the name and trainno properties of the specific instance on which fill is called. It sets these properties with the values provided as arguments.

    //In the submit and cancel methods, this.name and this.trainno refer to the name and trainno properties of the specific instance on which these methods are called. They are used to display information related to the instance.


}




let harryForm = new RailwayForm()
harryForm.fill("Harry", 122344)

let rohanForm = new RailwayForm()
// rohanForm.fill("Rohan",122420)

harryForm.submit()
rohanForm.submit()
rohanForm.cancel()

