

---

# Encriptador y Desencriptador de Texto

Este es un programa que permite encriptar y desencriptar texto utilizando reglas específicas de sustitución de caracteres. También incluye una funcionalidad para copiar el texto encriptado o desencriptado al portapapeles y utiliza la librería SweetAlert para mostrar alertas.

## Funcionalidades

1. **Encriptar texto**: Convierte las vocales en secuencias de caracteres específicas.
2. **Desencriptar texto**: Revierte las secuencias de caracteres en las vocales originales.
3. **Copiar texto**: Copia el resultado encriptado o desencriptado al portapapeles.
4. **Reiniciar**: Permite reiniciar el programa para encriptar o desencriptar nuevo texto.

## Tecnologías Utilizadas

- HTML
- CSS
- JavaScript
- SweetAlert

## Reglas de Encriptación

- La letra "e" se convierte en "enter"
- La letra "i" se convierte en "imes"
- La letra "a" se convierte en "ai"
- La letra "o" se convierte en "ober"
- La letra "u" se convierte en "ufat"

## Instrucciones

### Paso 1: Descargar o Clonar el Repositorio

```bash
git clone https://github.com/tu-usuario/encriptador-desencriptador.git
cd encriptador-desencriptador
```

### Paso 2: Abrir el Archivo `index.html`

Abre el archivo `index.html` en tu navegador web para ejecutar el programa.

### Paso 3: Encriptar Texto

1. Escribe el texto que deseas encriptar en el área de texto.
2. Haz clic en el botón "Encriptar".
3. Si el área de texto está vacía, se mostrará una alerta de error: "¡Debes ingresar algún texto!".
4. Si el texto contiene mayúsculas o acentos, se mostrará una alerta de error: "El texto no debe contener mayúsculas ni acentos".
5. Si el texto es válido, se mostrará una alerta de éxito: "El texto se ha encriptado correctamente".
6. El texto encriptado se mostrará en la sección correspondiente.

### Paso 4: Desencriptar Texto

1. Escribe el texto encriptado que deseas desencriptar en el área de texto.
2. Haz clic en el botón "Desencriptar".
3. Si el área de texto está vacía, se mostrará una alerta de advertencia: "Debes ingresar o pegar un texto para desencriptar".
4. Si el texto contiene mayúsculas o acentos, se mostrará una alerta de error: "El texto no debe contener mayúsculas ni acentos".
5. El texto desencriptado se mostrará en la sección correspondiente.

### Paso 5: Copiar Texto

1. Haz clic en el botón "Copiar" para copiar el texto encriptado o desencriptado al portapapeles.
2. Se mostrará una alerta de éxito: "El texto se ha copiado al portapapeles".

### Paso 6: Reiniciar

1. Después de desencriptar el texto, el botón "Copiar" cambiará a "Reiniciar".
2. Haz clic en "Reiniciar" para recargar la página y comenzar de nuevo.

## Estructura del Proyecto

```
.
├── index.html
├── styles.css
└── script.js
```

- **index.html**: Contiene la estructura HTML del programa.
- **styles.css**: Contiene los estilos CSS para el diseño del programa.
- **script.js**: Contiene la lógica JavaScript para encriptar, desencriptar y copiar el texto.

## Notas Adicionales

- Asegúrate de tener una conexión a Internet para cargar la librería SweetAlert desde su CDN.
- Puedes personalizar los estilos en `styles.css` según tus necesidades.

## Licencia

Este proyecto está bajo la Licencia MIT.

---
