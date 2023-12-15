const SELECTORS = {
    ALERT_BUTTON: './/android.widget.Button[@text="{BUTTON_TEXT}"]',
    ALERT_DIALOG: '//android.app.Dialog[@text="{DIALOG_TITLE}"]'
};

class NativeAlert {
    private dialogSelector: string;

    constructor (title: string) {
        this.dialogSelector = SELECTORS.ALERT_DIALOG.replace(/{DIALOG_TITLE}/, title);
    }

    async isDisplayed () {
        return (await $(this.dialogSelector)).isDisplayed();
    }

    async waitForIsShown (seconds: number) {

        return (await $(this.dialogSelector)).waitForExist({
            timeout: seconds * 1000
        });
    }

    async topOnButtonWithText (text: string) {
        const buttonSelector = SELECTORS.ALERT_BUTTON.replace(/{BUTTON_TEXT}/, text);
        await $(this.dialogSelector).$(buttonSelector).click();
    }
}

export default NativeAlert;
