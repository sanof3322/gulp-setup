const app = {
    loginTPL(){
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
            <div class="col-md-3"></div>
        </div>
        `;
    },
    init(){
        $("#main-content").html(this.loginTPL());
    }
};

app.init();