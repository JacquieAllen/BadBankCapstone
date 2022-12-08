function NavBar() {
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#" onclick="defaultModule()">BadderBank</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expand="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="#/CreateAccount/"> Create Account </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#/login/">Login</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#/deposit/">Deposit</a> 
                </li>
                <li  class="nav-item">
                    <a class="nav-link" href="#/withdraw/">Withdraw</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#/balance/">Balance</a>
                </li>
                <li class="nav-item"> 
                    <a class="nav-link" href="#/alldata/">AllData</a>
                </li>
            </ul>
        </div>
    </nav>
    );
}