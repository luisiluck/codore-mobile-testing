class LoginScreen {

    private get loginButton () {return $('//*[@resource-id="btnaccess"]');}
    private get email () {return $('//android.webkit.WebView[@text="Apuestas en Directo – Lo Mejor de España | Codere®"]/android.view.View/android.view.View[1]/android.view.View[2]/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View/android.widget.EditText');}
    private get password () {return $('//android.webkit.WebView[@text="Apuestas en Directo – Lo Mejor de España | Codere®"]/android.view.View/android.view.View[1]/android.view.View[2]/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View/android.widget.EditText');}

    async submitLoginForm({ username, password }:{username:string; password:string;}) {
        await this.email.setValue(username);
        await this.password.setValue(password);
        await this.loginButton.click();
    }
}

export default new LoginScreen();
