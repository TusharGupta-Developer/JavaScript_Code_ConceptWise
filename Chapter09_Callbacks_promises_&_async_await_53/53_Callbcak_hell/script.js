function loadScript(src, Callback) {
    let script = document.createElement("script")
    script.src = src;// Sets the src attribute of the newly created <script> element to the URL provided as the src parameter.
    document.body.appendChild(script); //Appends the newly created <script> element to the <body> of the HTML document, triggering the asynchronous loading and execution of the script.

    script.onload = function () {//simply creating a <script> element without setting the src attribute will not trigger the loading of an external script. The browser requires the src attribute to be set to the URL of the script you want to load. Once the src is set and the <script> element is appended to the DOM, the browser will start loading the external script.
        console.log("Loded script wth src: " + src)
        Callback(null, src);
    }
    script.onerror = function () {
        console.log(" Error Loding script wth src: " + src);
        Callback(new Error("src got some error"))
    }
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js", function hello(error, src) {   //callback function
    if (error) {
        console.log(error);

    }
    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap_2.bundle.min.js", function hello(error, src) {
        if (error) {
            console.log(error);

        }
        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap_3.bundle.min.js", function hello(error, src) {
            if (error) {
                console.log(error);

            }
            loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap_4.bundle.min.js", function hello(error, src) {
                if (error) {
                    console.log(error);

                }
                loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap_5.bundle.min.js", function hello(error, src) {
                    if (error) {
                        console.log(error);

                    }
                    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap_6.bundle.min.js", function hello(error, src) {
                        if (error) {
                            console.log(error);

                        }
                        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap_7.bundle.min.js", function hello(error, src) {
                            if (error) {
                                console.log(error);

                            }
                            loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap_8.bundle.min.js", function hello(error, src) {
                                if (error) {
                                    console.log(error);

                                }
                                loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap_9.bundle.min.js", function hello(error, src) { })
                            })
                        })
                    })
                })
            })
        })
    })
})










