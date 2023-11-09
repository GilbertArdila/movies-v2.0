'use client';
import { useContext } from 'react';
import { langContext } from '../context/page';

const About = () => {
  const context = useContext(langContext);

  return (
    <div className='max-w-6xl mx-auto space-x-4 p-4'>
      <h1 className='text-2xl font-medium text-amber-600'>About</h1>
      {context.language === 'en-USA' ?
        <><p>Welcome to our movie database website! We are a team of passionate movie
          enthusiasts who have come together to create a one-stop destination for
          all your movie-related needs.</p><br /><p> Our website is designed to provide you with a comprehensive database of
            movies from all around the world, along with the latest news, reviews,
            and trailers. Our movie database is constantly updated with new
            releases, ensuring that you have access to the latest and greatest in
            the world of cinema. You can search for movies by title making it easy to find the perfect movie
            for any occasion.
          </p><br /><p>
            In addition to our extensive movie database, we also offer a platform
            for movie lovers to connect and share their thoughts on the latest
            releases. Our community section includes a forum where you can discuss
            your favorite films with like-minded individuals and read reviews and
            ratings from other users. We also have a section dedicated to movie news
            and trailers, keeping you updated with the latest happenings in the
            world of cinema. Thank you for visiting our website and we hope you
            enjoy your time browsing through our movie database. If you have any
            feedback or suggestions, please feel free to contact us. We are always
            looking for ways to improve and enhance the user experience on our
            website. Happy browsing!
          </p></>
        : <>
          <p>Bienvenido a nuestra base de datos de películas Somos un equipo de apasionados
            entusiastas del cine que se han unido para crear un destino único para
            todas sus necesidades relacionadas con el cine.
          </p><br /><p>Nuestro sitio web está diseñado para ofrecerle una completa base de datos de
            películas de todo el mundo, junto con las últimas noticias, críticas
            y trailers. Nuestra base de datos de películas se actualiza
            nuevos estrenos, lo que le garantiza el acceso a lo último y lo mejor del
            del mundo del cine. Puede buscar películas por título lo que facilita encontrar la película perfecta
            para cualquier ocasión.</p><br /><p>
            Además de nuestra amplia base de datos de películas, también ofrecemos una plataforma
            para que los cinéfilos se conecten y compartan sus opiniones sobre los últimos
            últimos estrenos. Nuestra sección de comunidad incluye un foro en el que puedes comentar
            con personas de ideas afines y leer las críticas y valoraciones de otros usuarios.
            de otros usuarios. También tenemos una sección dedicada a noticias
            y trailers, que le mantendrá al día de los últimos acontecimientos en el
            mundo del cine. Gracias por visitar nuestro sitio web y esperamos que
            que disfrute navegando por nuestra base de datos de películas. Si tiene
            comentarios o sugerencias, no dude en ponerse en contacto con nosotros. Siempre estamos
            para mejorar la experiencia del usuario en nuestro sitio web.
            sitio web. ¡Feliz navegación!
          </p>
        </>}

    </div>
  )
}

export default About;