class IOSButton {}

class AndroidButton {}

class ButtonFactory {
    createButton(os: string): IOSButton | AndroidButton {
        if(os === 'ios') {
            return new IOSButton();
        } else {
            return new AndroidButton();
        }
    }
}

const factory = new ButtonFactory();
const btn1 = factory.createButton('android') // android button
const btn2 = factory.createButton('factory')