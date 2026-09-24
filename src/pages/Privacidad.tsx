import React from 'react';
import { Link } from 'react-router-dom';
import LegalLayout, { LegalSection } from '../components/LegalLayout';

const Privacidad: React.FC = () => {
  return (
    <LegalLayout
      title="Política de privacidad"
      updated="29 de mayo de 2026"
      intro={
        <p>
          En Shearn nos tomamos en serio la privacidad. Esta política explica qué datos personales
          tratamos, con qué finalidad y bajo qué base jurídica, así como los derechos que te asisten,
          conforme al Reglamento (UE) 2016/679 (RGPD) y a la Ley Orgánica 3/2018, de 5 de diciembre,
          de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).
        </p>
      }
    >
      <LegalSection title="1. Responsable del tratamiento">
        <ul className="space-y-1.5">
          <li>
            <strong className="text-gray-900">Responsable:</strong> Shearn S.L.
          </li>
          <li>
            <strong className="text-gray-900">NIF / CIF:</strong> B19984343
          </li>
          <li>
            <strong className="text-gray-900">Domicilio:</strong> Calle General Pardiñas 28, 4.º D,
            15701 Santiago de Compostela (A Coruña), España.
          </li>
          <li>
            <strong className="text-gray-900">Correo de contacto:</strong>{' '}
            <a
              href="mailto:info@weshearn.com"
              className="text-[#5fd91f] font-medium hover:text-[#6ce600]"
            >
              info@weshearn.com
            </a>
          </li>
        </ul>
        <p>
          <strong className="text-gray-900">Delegado de Protección de Datos (DPD):</strong> Mateo
          Bodenlle Villarino. Puedes contactar con el DPD en materia de protección de
          datos a través de{' '}
          <a
            href="mailto:mateobodenlle@weshearn.com"
            className="text-[#5fd91f] font-medium hover:text-[#6ce600]"
          >
            mateobodenlle@weshearn.com
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="2. Datos que tratamos">
        <p>Según el uso que hagas de nuestros servicios, podemos tratar las siguientes categorías:</p>
        <ul className="space-y-1.5 list-disc pl-5">
          <li>
            <strong className="text-gray-900">Datos identificativos y de contacto:</strong> nombre,
            apellidos, correo electrónico y, en su caso, centro educativo o rol (alumno, docente,
            familia).
          </li>
          <li>
            <strong className="text-gray-900">Datos de cuenta y autenticación:</strong> credenciales
            y datos asociados al inicio de sesión (incluido el acceso mediante terceros como Google,
            si lo utilizas).
          </li>
          <li>
            <strong className="text-gray-900">Contenido de aprendizaje:</strong> las conversaciones,
            respuestas, textos manuscritos y demás contenido que generes al usar Socratic o Vera, así
            como los informes y métricas derivados de ellos.
          </li>
          <li>
            <strong className="text-gray-900">Datos de uso y técnicos:</strong> dirección IP,
            identificadores de dispositivo, datos de navegación y registros de actividad.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Finalidades y base jurídica">
        <ul className="space-y-1.5 list-disc pl-5">
          <li>
            <strong className="text-gray-900">Prestar el servicio</strong> (crear y gestionar tu
            cuenta, mantener los diálogos socráticos y generar informes): ejecución de un contrato.
          </li>
          <li>
            <strong className="text-gray-900">Procesar el contenido mediante inteligencia
            artificial</strong> para ofrecer respuestas, reconocimiento de escritura y análisis:
            ejecución del contrato y, cuando proceda, consentimiento.
          </li>
          <li>
            <strong className="text-gray-900">Atender consultas y solicitudes</strong> recibidas a
            través de formularios o correo: consentimiento o interés legítimo.
          </li>
          <li>
            <strong className="text-gray-900">Gestionar la lista de espera y comunicaciones</strong>{' '}
            sobre Vera u otros productos: consentimiento, revocable en cualquier momento.
          </li>
          <li>
            <strong className="text-gray-900">Mejorar y velar por la seguridad del servicio:</strong>{' '}
            interés legítimo. No utilizamos el contenido de los alumnos para entrenar modelos de IA
            de uso general.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Menores de edad">
        <p>
          De acuerdo con la LOPDGDD, el tratamiento de datos de menores de catorce (14) años basado
          en el consentimiento solo es lícito si lo otorgan los titulares de la patria potestad o
          tutela. Cuando Shearn se utiliza en un contexto educativo, el centro o el docente actúa
          como responsable o, en su caso, recaba las autorizaciones necesarias de las familias.
        </p>
        <p>
          Aplicamos los principios de minimización y proporcionalidad y prestamos especial atención a
          los servicios dirigidos a menores. Si crees que hemos tratado datos de un menor sin la
          autorización adecuada, contáctanos y los suprimiremos.
        </p>
      </LegalSection>

      <LegalSection title="5. Plazo de conservación">
        <p>
          Conservamos los datos mientras se mantenga la relación con el usuario o el centro y,
          finalizada esta, durante los plazos legalmente exigibles para atender posibles
          responsabilidades (con carácter general, hasta 5 años conforme a la normativa civil y
          mercantil aplicable). Con mayor concreción:
        </p>
        <ul className="space-y-1.5 list-disc pl-5">
          <li>
            <strong className="text-gray-900">Datos de cuenta y contenido de aprendizaje:</strong>{' '}
            mientras la cuenta esté activa y hasta 12 meses después de su cancelación.
          </li>
          <li>
            <strong className="text-gray-900">Datos de la lista de espera y de contacto:</strong>{' '}
            hasta que retires tu consentimiento o solicites su supresión.
          </li>
          <li>
            <strong className="text-gray-900">Registros técnicos y de seguridad:</strong> hasta 12
            meses.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="6. Transferencias internacionales">
        <p>
          Algunos de nuestros proveedores pueden tratar datos fuera del Espacio Económico Europeo. En
          tal caso, garantizamos que dichas transferencias cuentan con las garantías adecuadas
          previstas en el RGPD, como una decisión de adecuación o las cláusulas contractuales tipo de
          la Comisión Europea.
        </p>
      </LegalSection>

      <LegalSection title="7. Tus derechos">
        <p>
          Puedes ejercer en cualquier momento tus derechos de acceso, rectificación, supresión,
          oposición, limitación del tratamiento y portabilidad de los datos, así como retirar el
          consentimiento prestado. Para ello, escribe a{' '}
          <a
            href="mailto:mateobodenlle@weshearn.com"
            className="text-[#5fd91f] font-medium hover:text-[#6ce600]"
          >
            mateobodenlle@weshearn.com
          </a>
          , indicando el derecho que deseas ejercer y adjuntando copia de un documento
          identificativo.
        </p>
        <p>
          Si consideras que el tratamiento no se ajusta a la normativa, tienes derecho a presentar
          una reclamación ante la Agencia Española de Protección de Datos (AEPD), C/ Jorge Juan 6,
          28001 Madrid (www.aepd.es).
        </p>
      </LegalSection>

      <LegalSection title="8. Medidas de seguridad">
        <p>
          Aplicamos medidas técnicas y organizativas apropiadas para proteger los datos personales
          frente a su pérdida, mal uso, acceso no autorizado, divulgación o alteración, teniendo en
          cuenta el estado de la técnica y la naturaleza de los datos tratados.
        </p>
      </LegalSection>

      <LegalSection title="9. Cookies">
        <p>
          El Sitio utiliza las cookies estrictamente necesarias para su funcionamiento y, en su caso,
          cookies analíticas o de terceros previo consentimiento.
        </p>
      </LegalSection>

      <LegalSection title="10. Cambios en esta política">
        <p>
          Podemos actualizar esta política para reflejar cambios legales o en nuestros servicios.
          Publicaremos la versión vigente en el Sitio con su fecha de actualización. Consulta también
          nuestro{' '}
          <Link
            to="/aviso-legal"
            className="text-[#5fd91f] font-medium underline underline-offset-2 hover:text-[#6ce600]"
          >
            Aviso legal
          </Link>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  );
};

export default Privacidad;
