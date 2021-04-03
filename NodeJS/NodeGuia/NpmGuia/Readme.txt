npm manejador de paquetes por relevancia para node
aunque tenemos mas alternativas el mas popular es npm.

npm init => inicializamos un package json.

npm install => instalamos usando un package.json
por defecto

npm install <nombrepaq> => agregamos un paquete a nuestro package
--save
--save-dev


npm update => Actualizamos las dependencias

npm run comnad_name => este ejecuta un comando que hconfiguramos en le package.json



instalaciones locales o globales. Lo ideal son usar locales para cada proyecto de esta manera 
tenemos un ambiente configurado propio por aplicacion
 npm install  -g <packge name>


 package.json , puede estar vacio solo debe ser un archivo en formato json
 ----------------------------------
 Control de versiones
^: Solo hará actualizaciones que no cambien el número distinto de cero del extremo izquierdo. Si se escribe ^0.13.0, cuando se ejecuta npm update, se puede actualizar a 0.13.1, 0.13.2y así sucesivamente, pero no a 0.14.0o por encima.
~: si escribe ~0.13.0cuando se ejecuta, npm updatese puede actualizar a las versiones de parche: 0.13.1está bien, pero 0.14.0no lo está.
>: acepta cualquier versión superior a la especificada
>=: acepta cualquier versión igual o superior a la que especifique
<=: acepta cualquier versión igual o inferior a la que especifique
<: acepta cualquier versión anterior a la que especifique
=: aceptas esa versión exacta
-: acepta una variedad de versiones. Ejemplo:2.1.0 - 2.6.2
||: combinas conjuntos. Ejemplo:< 2.1 || > 2.6

flags de npm
--prod instala solo dependencies excluytendo lo demas
--only=prod => instala solo prod equivaldira a --production
--also=dev  => incluye devdependencies
--no-optional => no instala las dependencias optionales
--no-save no guarda
--dry-run no instala nada solo crea los directoriso

Instalar un modulo desde un repositorio GitHub
npm install nombre_usaurio/reposito
