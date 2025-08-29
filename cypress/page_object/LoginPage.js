class login {

    // selectors
    loginpageurl = "https://automationexercise.com/login"
    txtusername = "input[data-qa='login-email']"
    txtpassword = "input[placeholder='Password']"
    txtloginbtn = "button[data-qa='login-button']"
    assertlogin = "ul[class='nav navbar-nav'] li a b"
    openpage (){
        cy.visit(this.loginpageurl);
    }
    setusename (username){
        cy.get(this.txtusername).type(username);
    }
    setpassword(password){
        cy.get(this.txtpassword).type(password);
    }
    clicksubmit(){
        cy.get(this.txtloginbtn).click();
    }
    verifylogin(){
        cy.contains('Logged in as', { timeout: 6000 }).should('be.visible');
    }
}
export default login;