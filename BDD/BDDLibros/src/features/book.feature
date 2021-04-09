@book-service
Feature: BookService

    Servicio que realiza la gestión de la libreria en sus operaciones 
    básicas (creación, búsqueda, modificación, eliminación)

    Scenario Outline: Crear un registro de libro
        Given un libro <request>
        When envio una solicitud POST a /books
        Then obtengo el código de respuesta 201

        Examples:
            | request
            | {"id": 1, "titulo": "Mi primer libro","autor": "Wilman Vega","isbn":"202104080742","year":"2020"} |
            | {"id": 2, "titulo": "El segundo libro","autor": "Wilman Vega","isbn":"202104080743","year":"2021"} |
    
    Scenario Outline: Obtener un libro
        Given un codigo de libro con <id> exist
        When  I send GET request to /books
        Then I receive <response>

        Examples:
            | id | response
            | 1  | {"id": 1, "titulo": "Mi primer libro","autor": "Wilman Vega","isbn":"202104080742","year":"2020"} |
            | 2  | {"id": 2, "titulo": "El segundo libro","autor": "Wilman Vega","isbn":"202104080743","year":"2021"}|