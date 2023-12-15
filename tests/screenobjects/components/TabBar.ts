const home = '//android.view.View[@resource-id="nav"]/android.view.View/android.view.View[1]/android.view.View/android.view.View[1]/android.widget.Button[2]';

export default class TabBar {

    static async openHome () {
        await $(home).click();
    }
    
    static async openLogin () {
        await $('//android.widget.Button[@text="Acceder"]').click();
    }

    static async waitForTabBarShown (seconds: number):Promise<boolean|void> {
        return $(home).waitForDisplayed({
            timeout: seconds * 1000,
        });
    }
}
