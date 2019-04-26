<h1>Documento de presentación de TheMovieDB</h1>
<p>Lo primero es dirigírse al sitio web https://www.themoviedb.org</p>
<p>Ya en este sitio se registra, confirma el correo que le será enviado y se logea</p>
<p>Una vez que puede acceder a la cuenta puede usar los servicios del API</p>
<p>En el navbar arriba de una campanita roja la penultima opción lo redireccionara a donde está la documentación del
    api</p>
<br />
<h1>Generar API key</h1>
<p>Se da click en el usuario y luego en settings esto desplegará un menú lateral el cual tendrá una opción API</p>
<p>En el API se debe gestionar para obtener un API Key </p>
<p>en la ruta webapp=>src=>app=>moviedb.service.ts en la línea 12 reemplazar por API Key propia o intentar probar con
    la que se encuentra allí</p>
<br />
<h1>Distribución del código</h1>
<p>Dentro de webapp=>src=>app</p>
<p>Allí se puede observar que fue creado bajo el modelo MVC</p>
<p>Es por eso que está distribuido en componentes, pipes y servicios</p>
<p>De los componentes se puede encontrar la siguiente lista</p>
<ul>
    <li>
        home
    </li>
    <li>
        navbar
    </li>
    <li>
        pelicula
    </li>
    <li>
        shared que tiene incluido el loading
    </li>
    <li>
        las tarjetas donde se presentará la información de las películas
    </li>
    <p>Pipes, esto está relacionado con la imagen que se representará para las peliculas</p>
</ul>
<h1>Servicios</h1>
<p>Es básicamente lo más importante de la aplicación ya que aquí es donde está el código de la API Key y los Querys</p>
<p>Para poder consumir los servicios de TheMovieDB es necesario tener claridad con los conceptos de HTTP o lo que es lo
    mismo Servicios REST</p>
    <p></p>

