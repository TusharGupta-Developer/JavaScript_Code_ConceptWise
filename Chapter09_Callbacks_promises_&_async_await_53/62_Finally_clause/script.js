try {
    let a = 0;
    // console.log(program);
    console.log("Program run successfully");
} catch (err) {
    console.log("This is an error");
    console.log(p);

} finally {
    console.log("I am a good boy");//  when there is error in catch or no error in try finally will run  

}

// When return in try 
const f = () => {

    try {
        let b = 0;
        console.log(program);
        console.log("Program run successfully");
        return 2
    } catch (err) {
        console.log("This is an error");
        console.log(p);

    } finally {
        console.log("I am a good boy");// finally ensure that script will always run even there is error happen in catch even than code will continue to run ,plus finaally also run when there is no error in try 

    }
}

console.log(f());
