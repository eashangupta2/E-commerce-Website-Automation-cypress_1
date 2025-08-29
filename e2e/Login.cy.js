import login from "../page_object/LoginPage"
describe('login test', () => {
    it('login with valid password', () => {

        const ln=new login();
        ln.openpage();
        ln.setusename("eashan2@gmail.com");
        ln.setpassword("Password@1234");
        ln.clicksubmit();
        ln.verifylogin();
    })
})