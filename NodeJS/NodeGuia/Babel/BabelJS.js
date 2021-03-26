/**
 * ¿Qué es Babel?
 * 
 *  Babel es un compilador de JavaScript
 *  Babel es una conjuento de herramientas que se utiliza principalmente para convertir el código 
 *  ECMAScript 2015+ en una versión de JavaScript compatible con versiones anteriores en navegadores 
 *  o entornos actuales y antiguos. Estas son las principales cosas que Babel puede hacer: 
 * - Transformar la sintaxis 
 * - Funciones de Polyfill que faltan en su ambiente de destino (a través de @ babel / polyfill) 
 * - Transformaciones de código fuente (codemods) 
 * - ¡Y más! (https://babeljs.io/videos.html) 
 */

/**
 * Instalación
 * Se instala por npm con los preset y plugins por defecto. Babel usa plugins y preset para guiar la 
 * transformación de código.
 * npm install --save-dev @babel/core @babel/cli @babel/preset-env
 * npm install --save @babel/polyfill
 */

/**
 * Configuración
 * La configuración se hace a través de un archivo llamado babel.config.json (o babel.config.js para 
 * versiones anteriores). En el archivo va la configuración de los plugins y presets, junto con
 * los entornos (browser) de destino con sus versiones
 */


/*
 {
    "presets": [
      [
        "@babel/env",
        {
          "targets": {
            "edge": "17",
            "firefox": "60",
            "chrome": "67",
            "safari": "11.1"
          },
          "useBuiltIns": "usage",
          "corejs": "3.6.5"
        }
      ]
    ]
  }
 */
  /**
   * Ejecución
   * Una vez tenemos instalado y configurado babel, realizamos la compilación de nuestro código con el 
   * siguiente comando:
   * 
   * ./node_modules/.bin/babel src --out-dir lib
   * 
   */