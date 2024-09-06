class RailwayForm {
    constructor(givenname,trainno,address) {
        console.log("Constructor called..."+ givenname+" "+ trainno);
        this.name = givenname
        this.trainno = trainno
        this.address = address
    }
    preview(){
        alert(this.name+" Your form no. is "+this.trainno+" and your address is "+this.address)
    }
    submit() {
        alert(this.name + "form submitted for train number" + this.trainno);
    }
    cancel() {
        alert(this.name + "This form is cancel for train number" + this.trainno)
        this.trainno = 0;
    }
 
}

let TusharForm = new RailwayForm("Tushar",13453,"Adelaide,South Australia,Australia."); 
TusharForm.preview();
TusharForm.submit();
