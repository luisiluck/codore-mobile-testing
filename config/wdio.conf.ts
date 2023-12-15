import { join } from 'path';

export const config: WebdriverIO.Config = {
    runner: "local",
    specs: ['./tests/specs/app.login.spec.ts'],
    capabilities: [
        {
            platformName: 'Android',
            maxInstances: 1,
            'appium:orientation': 'PORTRAIT',
            'appium:automationName': 'UiAutomator2',
            'appium:app': join(process.cwd(), './apps/Codere_ Apuestas Deportivas_4.4.apk'),
            'appium:appWaitActivity': 'MainActivity',
            'appium:newCommandTimeout': 240,
        }
    ],
    logLevel: "debug",
    bail: 0,
    waitforTimeout: 45000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 0,
    services: [
        [
            "appium",
            {
                command: "appium",
                args: {
                    relaxedSecurity: true,
                    address: "localhost",
                    log: "./appium.log",
                },
            },
        ]
    ],
    framework: "mocha",
    reporters: ["spec"],
    mochaOpts: {
        ui: "bdd",
        timeout: 3 * 60 * 1000, // 3min
    },
};
