import { createRouter } from "routerjs";

window.app = {
    loginTPL() {
        return /*html*/`
        <div class="row">
            <div class="col-md-3"></div>
            <div class="col">
                <div class="card bg-light mb-3 mt-3">
                    <div class="card-header">Log In</div>
                    <div class="card-body">
                    <h4 class="card-title">Light card title</h4>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <button class="btn btn-primary" onclick="router.navigate('/cd')">Go to CD</button>
            </div>
        </div>
        `;
    },
    init() {
        $("#main-content").html(this.loginTPL());
    }
};

window.router = createRouter()
    // Define the route matching a path with a callback
    .get('/', (/*req, context*/) => {
        app.init();

    })
    .get('/cd', (/*req, context*/) => {
    //    window.location = "https://cd.classyweb.net";
        alert("cd")
    })
    .error('*', (err, context) => {
        alert("error");
    })
    .error(404, (err, context) => {
        console.log(`Route ${context.path} not found`);
    })

    // Calling "run" will execute handlers immediately for the current url.
    // You can avoid calling it and wait for the next route change instead.
    .run();


