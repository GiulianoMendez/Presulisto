Scenario: Registro exitoso
GIVEN: Dado que el usuario no se encuentra registrado en el sistema.
WHEN: Cuando se realice el registro a la aplicación de manera exitosa.
THEN: Entonces el usuario podrá acceder a todos los servicios de la aplicación.

Scenario: Registro sin éxito por datos incompletos
GIVEN: Dado que el usuario no complete los campos necesarios.
WHEN: Cuando quiera completar el registro no podrá realizarse
THEN: Entonces el usuario no podrá acceder a la aplicación.
