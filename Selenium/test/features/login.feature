@LoginBanco
Feature: Login Banco

    Como usuario del banco online
    yo quiero visitar el sitio web del banco
    para yo poder hacer login y entrar a mi cuenta

Scenario: Visitar la pagina de login
    Then yo debería ver una caja de texto para ingresar mi email
    And yo debería ver una caja de texto para ingresar la password
    And yo debería ver un botón sign
    And yo debería ver un login header con el texto "Login Banco Online"
    And yo debería ver un label de dirección email con el texto email address