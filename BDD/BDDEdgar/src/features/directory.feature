@directory-service 
Feature: DirectoryService
    Para administrar el directorio 
    como desarrollador 
    quiero asegurarme que las operaciones crud a travez de las api rest funcionen bien

    Scenario Outline: crear un contacto  
      Given un contacto <request> 
      When envio una solicitud POST a /directory
      Then yo obtengo el codigo de respuesta 201  
    
      Examples:
        | request                                                                                               |
        | {"id":99,"name":"Dwayne Klocko","email":"Rene30@hotmail.com","phoneNumber":"1-876-420-9890"}          |
        | {"id":7,"name":"Ian Weimann DVM","email":"Euna_Bergstrom@hotmail.com","phoneNumber":"(297) 962-1879"} |


    Scenario Outline: get contact
      Given The contact with <id> exist
      When I send GET request to /directory
      Then I receive <response>
    
      Examples:
        | id | response                                                                                                                                      |
        | 99 | {"id":99,"name":"Dwayne Klocko","email":"Rene30@hotmail.com","phoneNumber":"1-876-420-9890","secondaryPhoneNumber": "(914) 249-3519"}         |
        | 7  | {"id":7,"name":"Ian Weimann DVM","email":"Euna_Bergstrom@hotmail.com","phoneNumber":"(297) 962-1879", "secondaryPhoneNumber": "788.323.7782"} |