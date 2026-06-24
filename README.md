¿Cómo organizamos el proyecto?
Organizamos el proyecto separándolo en carpetas según la función que cumple cada archivo. Creamos una carpeta para los componentes, otra para las interfaces, otra para la api y otra para los assets(también habíamos creado una para los datos que la usamos para comprobar que funcione bien pero ya no tiene utilidad). De esta forma el código queda más ordenado y es más fácil encontrar cada cosa.
¿Qué componentes creamos y qué responsabilidad tiene cada uno?
App: organiza la estructura general de la página.
Header: muestra el menú.
Feed: carga las publicaciones y muestra el contenido principal.
BarraHistorias: muestra las historias de los usuarios.
Publicacion: representa una publicación individual del feed.
DetallePublicacion: muestra una publicación ampliada en un modal.
PerfilUsuario: simula el panel derecho con el usuario logueado.
Cargando: muestra un mensaje mientras se obtienen los datos de la API.
¿Por qué decidimos componentizar de esa manera?
Decidimos dividir el proyecto en componentes pequeños para que cada uno tenga una única responsabilidad. Esto hace que el código sea más fácil de entender y modificar. Nos ayudo pensarlo previamente y consultar con IA para ver cual era la mejor forma de hacerlo
¿Cómo se comunican los componentes mediante props?
Los componentes padres envían información a los componentes hijos mediante props. Por ejemplo, Feed le pasa a Publicación los datos de cada publicación (imagen, usuario, descripción, likes, etc.) y también le envía una función para saber cuándo el usuario selecciona una publicación.
¿Qué hooks utilizamos y para qué?
useState: para guardar estados como la lista de publicaciones, la publicación seleccionada y los likes.
useEffect: para realizar la consulta a la API cuando se carga el componente Feed.
¿Qué diseño de Figma utilizamos como referencia?
Tomamos como referencia el diseño Figma:
https://www.figma.com/es-es/comunidad/file/1235135369163092252/instagram-web-ui-recreated
Creemos que quedó bastante parecido.
¿Cómo resolvimos la visualización individual de publicaciones?
Cuando el usuario hace clic sobre una publicación, se guarda esa publicación en un estado y se muestra el componente DetallePublicacion, que funciona como una ventana modal con la información ampliada.
¿Cómo simulamos el perfil de usuario logueado?
Creamos un componente llamado PerfilUsuario que muestra una foto de perfil, el nombre de usuario y algunas sugerencias de cuentas para seguir. Los datos son estáticos y sirven para representar el panel derecho de Instagram.
¿Qué datos decidimos mostrar en el perfil?
Decidimos mostrar: foto de perfil, nombre de usuario, nombre completo y una lista de cuentas sugeridas.
¿Qué estados utilizamos para seleccionar publicaciones o manejar la vista individual?
Utilizamos un estado para guardar la publicación seleccionada y poder mostrarla en el modal. También utilizamos estados para almacenar las publicaciones obtenidas desde la api y para manejar los likes de cada publicación.
En general, la componentización elegida nos permitió mantener el proyecto ordenado y separar la lógica de cada parte de la aplicación, haciendo que el código sea más claro y fácil de mantener.
