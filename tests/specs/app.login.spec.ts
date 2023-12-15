import TabBar from '../screenobjects/components/TabBar';
import LoginScreen from '../screenobjects/LoginScreen';
import NativeAlert from '../screenobjects/components/NativeAlert';

describe('interacting with a login form,', () => {
    beforeEach(async () => {
        let cookieAlert = new NativeAlert('Configuración de cookies');
        try {
            await cookieAlert.waitForIsShown(30);
            await cookieAlert.topOnButtonWithText('ACEPTAR');
        } catch (e) {}
    });

    it('error message when bad credentials', async () => {
        await TabBar.openLogin();
        await LoginScreen.submitLoginForm({username: 'test-bloqueado1234', password: 'ejercicioTecnico'});
        let errAlert = new NativeAlert('ERROR DE INICIO DE SESIÓN');
        expect(await errAlert.isDisplayed()).toBe(true);

        await errAlert.topOnButtonWithText('OK');
        expect(await errAlert.isDisplayed()).toBe(false);
    });
});
