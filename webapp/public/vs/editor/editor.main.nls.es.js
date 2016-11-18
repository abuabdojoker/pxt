/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.7.3(14ab24ad53d8d969e86bae0096ecc3b954d0faa0)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/
define("vs/editor/editor.main.nls.es",{"vs/base/browser/ui/actionbar/actionbar":["{0} ({1})"],"vs/base/browser/ui/aria/aria":["{0} (ocurrió de nuevo)"],"vs/base/browser/ui/findinput/findInput":["Usar expresión regular","Solo palabras completas","Coincidir mayúsculas y minúsculas","entrada"],"vs/base/browser/ui/inputbox/inputBox":["Error: {0}","Advertencia: {0}","Información: {0}"],"vs/base/common/keybinding":["Windows","Control","Shift","Alt","Command","Windows","Ctrl","Shift","Alt","Command","Windows"],"vs/base/common/severity":["Error","Advertencia","Información"],"vs/base/parts/quickopen/browser/quickOpenModel":["{0}, selector","selector"],"vs/base/parts/quickopen/browser/quickOpenWidget":["Selector rápido. Escriba para restringir los resultados.","Selector rápido"],"vs/base/parts/tree/browser/treeDefaults":["Contraer"],"vs/editor/common/config/commonEditorConfig":["Editor","Controla la familia de fuentes.","Controla el grosor de la fuente.","Controla el tamaño de fuente en píxeles.","Controla la altura de línea. Utilice 0 para calcular el valor de lineHeight a partir de fontSize.","Controla la visibilidad de los números de línea","Columnas en las que mostrar reglas verticales","Caracteres que se usarán como separadores de palabras al realizar operaciones o navegaciones relacionadas con palabras.","El número de espacios a los que equivale una tabulación. Este valor se invalida según el contenido del archivo cuando `editor.detectIndentation` está activado.",'Se esperaba "number". Tenga en cuenta que el ajuste "editor.detectIndentation" ha reemplazado al valor "auto".',"Insertar espacios al presionar TAB. Este valor se invalida en función del contenido del archivo cuando `editor.detectIndentation` está activado.",'Se esperaba "boolean". Tenga en cuenta que el ajuste "editor.detectIndentation" ha reemplazado al valor "auto".',"Al abrir un archivo, se detectarán `editor.tabSize` y `editor.insertSpaces` en función del contenido del archivo.","Controla si las selecciones tienen esquinas redondeadas","Controla si el editor se seguirá desplazando después de la última línea","Controla el número de caracteres tras los cuales el editor salta a la línea siguiente. Si el valor se establece en 0, se activa el ajuste del ancho de la ventanilla (ajuste de línea). Si se establece en -1, hace que el editor no ajuste las líneas nunca.","Controla si las líneas deben ajustarse. Las líneas se ajustarán en min(editor.wrappingColumn, viewportWidthInColumns).","Controla el sangrado de las líneas ajustadas. Puede ser uno los valores 'none', 'same' o 'indent'.","Se utilizará un multiplicador en los eventos de desplazamiento de la rueda del mouse `deltaX` y `deltaY`","Controla si van a aparecer sugerencias rápidas mientras se escribe","Controla el retardo en ms tras el cual aparecerán sugerencias rápidas","Habilita sugerencias de parámetro","Controla si el editor debe cerrar automáticamente los corchetes después de abrirlos","Controla si el editor debe dar formato automáticamente a la línea después de escribirla","Controla si las sugerencias deben aparecer de forma automática al escribir caracteres desencadenadores",'Controla si las sugerencias deben aceptarse ("Entrar" además de "TAB"). Ayuda a evitar la ambigüedad entre insertar nuevas líneas o aceptar sugerencias.',"Controla si se muestran los fragmentos de código con otras sugerencias y cómo se ordenan.","Habilita sugerencias basadas en palabras.","Inserta fragmentos de código cuando el prefijo coincide. Funciona mejor si la opción 'quickSuggestions' no está habilitada.","Controla si el editor debería destacar coincidencias similares a la selección","Controla el número de decoraciones que pueden aparecer en la misma posición en la regla de visión general",'Controlar el estilo de animación del cursor. Los valores posibles son "blink", "smooth", "phase", "expand" y "solid".',"Ampliar la fuente del editor cuando se use la rueda del mouse mientras se presiona Ctrl",'Controla el estilo del cursor. Los valores aceptados son "block", "line" y "underline".',"Habilita las ligaduras tipográficas.","Controla si el cursor debe ocultarse en la regla de visión general.","Controla si el editor debe representar los espacios en blanco","Controla si el editor debe representar caracteres de control","Controla si el editor debe representar guías de sangría.","Controla si el editor debe representar el resaltado de línea actual","Controla si el editor muestra lentes de código","Controla si el editor tiene habilitado el plegado de código.","La inserción y eliminación del espacio en blanco sigue a las tabulaciones.","Quitar espacio en blanco final autoinsertado","Mantiene abiertos los editores de inspección incluso al hacer doble clic en su contenido o presionar Escape.","Controla si el editor de diferencias muestra las diferencias en paralelo o alineadas.","Controla si el editor de diferencias muestra los cambios de espacio inicial o espacio final como diferencias.","Controla si el portapapeles principal de Linux debe admitirse."],"vs/editor/common/config/defaultConfig":["Contenido del editor"],"vs/editor/common/controller/cursor":["Excepción inesperada al ejecutar el comando."],"vs/editor/common/model/textModelWithTokens":["Error en el modo al convertir la entrada en tokens."],"vs/editor/common/modes/modesRegistry":["Texto sin formato"],"vs/editor/common/modes/snippetsRegistry":["{0}, {1}"],"vs/editor/common/services/bulkEdit":["Estos archivos han cambiado durante el proceso: {0}"],"vs/editor/common/services/modeServiceImpl":["Aporta declaraciones de lenguaje.","Identificador del lenguaje.","Alias de nombre para el lenguaje.","Extensiones de archivo asociadas al lenguaje.","Nombres de archivo asociados al lenguaje.","Patrones globales de nombre de archivo asociados al lenguaje.","Tipos MIME asociados al lenguaje.","Expresión regular que coincide con la primera línea de un archivo del lenguaje.","Ruta de acceso relativa a un archivo que contiene opciones de configuración para el lenguaje.",'Valor vacío para "contributes.{0}"','la propiedad `{0}` es obligatoria y debe ser de tipo "string"','la propiedad `{0}` se puede omitir y debe ser de tipo "string[]"','la propiedad `{0}` se puede omitir y debe ser de tipo "string[]"','la propiedad `{0}` se puede omitir y debe ser de tipo "string"','la propiedad `{0}` se puede omitir y debe ser de tipo "string"','la propiedad `{0}` se puede omitir y debe ser de tipo "string[]"','la propiedad `{0}` se puede omitir y debe ser de tipo "string[]"','Elemento "contributes.{0}" no válido. Se esperaba una matriz.'],"vs/editor/common/services/modelServiceImpl":["[{0}] {1}",'Actualice la configuración: `editor.detectIndentation` reemplaza a `editor.tabSize`: "auto" o `editor.insertSpaces`: "auto"'],"vs/editor/contrib/carretOperations/common/carretOperations":["Mover Carret a la izquierda","Mover Carret a la derecha"],"vs/editor/contrib/clipboard/browser/clipboard":["Cortar","Copiar","Pegar"],"vs/editor/contrib/comment/common/comment":["Alternar comentario de línea","Agregar comentario de línea","Quitar comentario de línea","Alternar comentario de bloque"],"vs/editor/contrib/contextmenu/browser/contextmenu":["Mostrar menú contextual del editor"],"vs/editor/contrib/find/browser/findWidget":["Buscar","Buscar","Coincidencia anterior","Coincidencia siguiente","Buscar en selección","Cerrar","Reemplazar","Reemplazar","Reemplazar","Reemplazar todo","Alternar modo de reemplazar","Solo se resaltan los primeros 999 resultados, pero todas las operaciones de búsqueda trabajan en todo el texto.","{0} de {1}","No hay ningún resultado"],"vs/editor/contrib/find/common/findController":["Buscar","Buscar siguiente","Buscar anterior","Buscar selección siguiente","Buscar selección anterior","Reemplazar","Agregar selección hasta la siguiente coincidencia de búsqueda","Agregar selección hasta la anterior coincidencia de búsqueda","Mover última selección hasta la siguiente coincidencia de búsqueda","Mover última selección hasta la anterior coincidencia de búsqueda","Seleccionar todas las repeticiones de coincidencia de búsqueda","Cambiar todas las repeticiones"],"vs/editor/contrib/folding/browser/folding":["Desplegar","Desplegar de forma recursiva","Plegar","Plegar de forma recursiva","Plegar todo","Desplegar todo","Nivel de plegamiento 1","Nivel de plegamiento 2","Nivel de plegamiento 3","Nivel de plegamiento 4","Nivel de plegamiento 5"],"vs/editor/contrib/format/common/formatActions":["Código de formato"],"vs/editor/contrib/goToDeclaration/browser/goToDeclaration":[" – {0} definiciones","Ir a definición","Abrir definición en el lateral","Ver la definición","Haga clic para mostrar las {0} definiciones encontradas."],"vs/editor/contrib/gotoError/browser/gotoError":["Correcciones recomendadas: ","Corrección recomendada: ","({0}/{1})","Ir al error o la advertencia siguiente","Ir al error o la advertencia anterior"],"vs/editor/contrib/hover/browser/hover":["Mostrar al mantener el puntero"],"vs/editor/contrib/hover/browser/modesContentHover":["Cargando..."],"vs/editor/contrib/inPlaceReplace/common/inPlaceReplace":["Reemplazar con el valor anterior","Reemplazar con el valor siguiente"],"vs/editor/contrib/indentation/common/indentation":["Convertir sangría en espacios","Convertir sangría en tabulaciones","Tamaño de tabulación configurado","Seleccionar tamaño de tabulación para el archivo actual","Aplicar sangría con tabulaciones","Aplicar sangría con espacios","Detectar sangría del contenido","Alternar representación de espacio en blanco","Alternar caracteres de control"],"vs/editor/contrib/linesOperations/common/linesOperations":["Copiar línea arriba","Copiar línea abajo","Mover línea hacia arriba","Mover línea hacia abajo","Ordenar líneas en orden ascendente","Ordenar líneas en orden descendente","Recortar espacio final","Eliminar línea","Sangría de línea","Anular sangría de línea","Insertar línea arriba","Insertar línea debajo"],"vs/editor/contrib/links/browser/links":["Cmd + clic para abrir el vínculo","Ctrl + clic para abrir el vínculo","No se pudo abrir este vínculo porque no tiene un formato correcto: {0}","No se pudo abrir este vínculo porque falta el destino.","Abrir vínculo"],"vs/editor/contrib/multicursor/common/multicursor":["Agregar cursor arriba","Agregar cursor debajo","Crear varios cursores a partir de las líneas seleccionadas"],"vs/editor/contrib/parameterHints/browser/parameterHints":["Sugerencias para parámetros Trigger"],"vs/editor/contrib/parameterHints/browser/parameterHintsWidget":["{0}, sugerencia"],"vs/editor/contrib/quickFix/browser/quickFix":["Corrección rápida"],"vs/editor/contrib/quickFix/browser/quickFixWidget":["{0}, accepted","Loading...","No fix suggestions."],"vs/editor/contrib/quickOpen/browser/gotoLine":["Ir a la línea {0} y la columna {1}","Ir a la línea {0}","Escriba el número de una línea comprendido entre 1 y {0} a la cual quiera navegar.","Escriba el número de columna entre 1 y {0} a la cual quiera navegar.","Go to line {0}","Escriba un número de línea, seguido por dos puntos opcionales (:) y el número de la columna a la cual quiera navegar.","Ir a la línea..."],"vs/editor/contrib/quickOpen/browser/quickCommand":["{0}, commands","Escriba el nombre de la acción que quiera ejecutar.","Paleta de comandos"],"vs/editor/contrib/quickOpen/browser/quickOutline":["{0}, symbols","Escriba el nombre del identificador al cual quiera navegar.","Ir al símbolo...","símbolos ({0})","módulos ({0})","clases ({0})","interfaces ({0})","métodos ({0})","funciones ({0})","propiedades ({0})","variables ({0})","variables ({0})","constructores ({0})","llamadas ({0})"],"vs/editor/contrib/referenceSearch/browser/referenceSearch":[" – {0} referencias","Buscar todas las referencias"],"vs/editor/contrib/referenceSearch/browser/referencesController":["Cargando..."],"vs/editor/contrib/referenceSearch/browser/referencesWidget":["Error al resolver el archivo.","{0} referencias","{0} referencia","vista previa no disponible","Referencias","No hay resultados.","Referencias"],"vs/editor/contrib/rename/browser/rename":["No se pudo cambiar el nombre.","Cambiar el nombre del símbolo"],"vs/editor/contrib/rename/browser/renameInputField":["Cambie el nombre de la entrada. Escriba el nuevo nombre y presione Entrar para confirmar."],"vs/editor/contrib/rename/common/rename":["No hay ningún resultado."],"vs/editor/contrib/smartSelect/common/jumpToBracket":["Ir al corchete"],"vs/editor/contrib/smartSelect/common/smartSelect":["Expandir selección","Reducir selección"],"vs/editor/contrib/suggest/browser/suggestController":["Sugerencias para Trigger"],"vs/editor/contrib/suggest/browser/suggestWidget":["Leer más...{0}","{0}, sugerencia, con detalles","{0}, sugerencia","Volver","Cargando...","No hay sugerencias.","{0}, aceptada","{0}, sugerencia, con detalles","{0}, sugerencia"],"vs/editor/contrib/toggleTabFocusMode/common/toggleTabFocusMode":["Alternar el uso de la tecla TAB para establecer el enfoque"],"vs/editor/contrib/toggleWordWrap/common/toggleWordWrap":["Ver: Alternar ajuste de línea"],"vs/editor/contrib/zoneWidget/browser/peekViewWidget":["Cerrar"],"vs/platform/configuration/common/configurationRegistry":["Aporta opciones de configuración.","Resumen de la configuración. Esta etiqueta se usará en el archivo de configuración como comentario divisor.","Descripción de las propiedades de configuración.",'si se establece, "configuration.type" debe establecerse en "object"',"configuration.title debe ser una cadena","configuration.properties debe ser un objeto"],"vs/platform/extensions/common/abstractExtensionService":["La extensión `{1}` no se pudo activar. Motivo: dependencia `{0}` desconocida.","La extensión `{1}` no se pudo activar. Motivo: La dependencia `{0}` no se pudo activar.","La extensión `{0}` no se pudo activar. Motivo: más de 10 niveles de dependencias (probablemente sea un bucle de dependencias).","Error al activar la extensión `{0}`: {1}."],"vs/platform/extensions/common/extensionsRegistry":["Se obtuvo una descripción vacía de la extensión.",'la propiedad `{0}` es obligatoria y debe ser de tipo "string"','la propiedad `{0}` es obligatoria y debe ser de tipo "string"','la propiedad `{0}` es obligatoria y debe ser de tipo "string"','la propiedad `{0}` es obligatoria y debe ser de tipo "object"','la propiedad `{0}` es obligatoria y debe ser de tipo "string"','la propiedad `{0}` se puede omitir o debe ser de tipo "string[]"','la propiedad `{0}` se puede omitir o debe ser de tipo "string[]"',"las propiedades `{0}` y `{1}` deben especificarse u omitirse conjuntamente",'la propiedad `{0}` se puede omitir o debe ser de tipo "string"','Se esperaba que "main" ({0}) se hubiera incluido en la carpeta de la extensión ({1}). Esto puede hacer que la extensión no sea portátil.',"las propiedades `{0}` y `{1}` deben especificarse u omitirse conjuntamente","Nombre para mostrar de la extensión que se usa en la galería de VS Code.","Categorías que usa la galería de VS Code para clasificar la extensión.","Banner usado en VS Code Marketplace.","Color del banner en el encabezado de página de VS Code Marketplace.","Tema de color de la fuente que se usa en el banner.","El publicador de la extensión VS Code.","Eventos de activación de la extensión VS Code.","Dependencias a otras extensiones. El identificador de una extensión siempre es ${publisher}.${name}. Por ejemplo: vscode.csharp.","Script que se ejecuta antes de publicar el paquete como extensión VS Code.","Todas las contribuciones de la extensión VS Code representadas por este paquete."],"vs/platform/keybinding/browser/keybindingServiceImpl":["Aquí hay otros comandos disponibles: ","Se presionó ({0}). Esperando la siguiente tecla...","La combinación de teclas ({0}, {1}) no es ningún comando."],"vs/platform/message/common/message":["Cerrar","Más tarde","Cancelar"]});
