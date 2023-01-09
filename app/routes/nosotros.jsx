import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export function meta() {
  return {
    title: 'GuitarLA - Sobre Nosotros',
    description: 'Venta de guitaras, bog de música'
  }
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}
function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img src={imagen} alt="imagen sobre nosotros" />
        <div>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer 
          ornare neque ut urna tempus, eget rhoncus libero feugiat. Morbi id 
          egestas quam. Sed sollicitudin accumsan lectus imperdiet iaculis. 
          Mauris luctus tempor ipsum at vehicula
          </p>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer 
          ornare neque ut urna tempus, eget rhoncus libero feugiat. Morbi id 
          egestas quam. Sed sollicitudin accumsan lectus imperdiet iaculis. 
          Mauris luctus tempor ipsum at vehicula
          </p>
        </div>

      </div>
    </main>
  )
}

export default Nosotros
