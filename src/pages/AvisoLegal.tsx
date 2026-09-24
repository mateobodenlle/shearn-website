import React from 'react';
import { Link } from 'react-router-dom';
import LegalLayout, { LegalSection } from '../components/LegalLayout';

const AvisoLegal: React.FC = () => {
  return (
    <LegalLayout
      title="Aviso legal"
      updated="29 de mayo de 2026"
      intro={
        <p>
          El presente aviso legal regula el acceso y el uso del sitio web y de los servicios de
          Shearn (en adelante, el «Sitio»), en cumplimiento de la Ley 34/2002, de 11 de julio, de
          Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE).
        </p>
      }
    >
      <LegalSection title="1. Datos identificativos del titular">
        <p>El titular del Sitio es:</p>
        <ul className="space-y-1.5">
          <li>
            <strong className="text-gray-900">Denominación social:</strong> Shearn S.L.
          </li>
          <li>
            <strong className="text-gray-900">NIF / CIF:</strong> B19984343
          </li>
          <li>
            <strong className="text-gray-900">Domicilio social:</strong> Calle General Pardiñas 28,
            4.º D, 15701 Santiago de Compostela (A Coruña), España.
          </li>
          <li>
            <strong className="text-gray-900">Correo electrónico:</strong>{' '}
            <a
              href="mailto:info@weshearn.com"
              className="text-[#5fd91f] font-medium hover:text-[#6ce600]"
            >
              info@weshearn.com
            </a>
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="2. Objeto">
        <p>
          El Sitio tiene por objeto dar a conocer y permitir el acceso a los productos y servicios
          educativos de Shearn, entre ellos Socratic y Vera, basados en tutorización mediante
          diálogo socrático con inteligencia artificial.
        </p>
        <p>
          La utilización del Sitio atribuye la condición de usuario e implica la aceptación plena de
          todas las cláusulas de este aviso legal. Si no estás de acuerdo con ellas, te rogamos que
          no utilices el Sitio.
        </p>
      </LegalSection>

      <LegalSection title="3. Condiciones de acceso y uso">
        <p>
          El acceso al Sitio es gratuito, salvo en lo relativo al coste de la conexión a través de
          la red de telecomunicaciones suministrada por el proveedor que hayas contratado. El acceso
          a determinados servicios puede requerir registro previo y la contratación del
          correspondiente servicio.
        </p>
        <p>
          El usuario se compromete a hacer un uso adecuado y lícito del Sitio y de sus contenidos,
          absteniéndose de emplearlos con fines ilícitos, lesivos de derechos de terceros o que de
          cualquier forma puedan dañar, inutilizar o sobrecargar el Sitio o impedir su normal
          utilización.
        </p>
      </LegalSection>

      <LegalSection title="4. Propiedad intelectual e industrial">
        <p>
          Todos los contenidos del Sitio (textos, fotografías, gráficos, imágenes, iconos,
          tecnología, software, marcas, logotipos, nombres comerciales y diseño) son titularidad de
          Shearn S.L. o de terceros que han autorizado su uso, y están protegidos por la normativa
          de propiedad intelectual e industrial.
        </p>
        <p>
          Queda prohibida su reproducción, distribución, comunicación pública, transformación o
          cualquier otra forma de explotación sin la autorización expresa y por escrito del titular.
          Las marcas «Shearn», «Socratic» y «Vera», así como sus logotipos, son signos distintivos
          de Shearn S.L.
        </p>
      </LegalSection>

      <LegalSection title="5. Responsabilidad">
        <p>
          Shearn S.L. realiza los máximos esfuerzos para que la información del Sitio sea veraz y
          esté actualizada, pero no garantiza la inexistencia de errores ni la disponibilidad
          ininterrumpida del Sitio. Shearn S.L. no será responsable de los daños y perjuicios de
          cualquier naturaleza que pudieran derivarse del uso del Sitio o de la imposibilidad de
          acceder a él.
        </p>
        <p>
          Los contenidos de carácter educativo se ofrecen a título orientativo y no sustituyen el
          criterio del profesorado ni constituyen asesoramiento profesional de ningún tipo.
        </p>
      </LegalSection>

      <LegalSection title="6. Enlaces (hipervínculos)">
        <p>
          El Sitio puede contener enlaces a sitios de terceros. Shearn S.L. no asume responsabilidad
          alguna sobre los contenidos, políticas o prácticas de dichos sitios, cuya gestión
          corresponde exclusivamente a sus titulares. La inclusión de un enlace no implica relación,
          aprobación ni recomendación alguna.
        </p>
      </LegalSection>

      <LegalSection title="7. Protección de datos">
        <p>
          El tratamiento de los datos personales que el usuario facilite a través del Sitio se rige
          por nuestra{' '}
          <Link
            to="/privacidad"
            className="text-[#5fd91f] font-medium underline underline-offset-2 hover:text-[#6ce600]"
          >
            Política de privacidad
          </Link>
          , que forma parte integrante de este aviso legal.
        </p>
      </LegalSection>

      <LegalSection title="8. Modificaciones">
        <p>
          Shearn S.L. se reserva el derecho a modificar el presente aviso legal en cualquier momento
          para adaptarlo a novedades legislativas o a cambios en sus servicios. Las modificaciones
          serán efectivas desde su publicación en el Sitio.
        </p>
      </LegalSection>

      <LegalSection title="9. Legislación aplicable y jurisdicción">
        <p>
          Este aviso legal se rige por la legislación española. Para la resolución de cualquier
          controversia, y salvo que la normativa de consumidores y usuarios disponga otro fuero
          imperativo, las partes se someten a los Juzgados y Tribunales de Santiago de Compostela.
        </p>
      </LegalSection>
    </LegalLayout>
  );
};

export default AvisoLegal;
