// import React, { useState, useEffect } from 'react';

// function ShowImages() {
//   const [images, setImages] = useState();

//   useEffect(() => {
//     // Realiza la solicitud fetch para obtener el JSON desde el servidor
//     fetch("http://localhost:8080/images")
//       .then(response => response.json())
//       console.log(response)
//       .then(data => setImages(data))
//       .catch(error => console.error('Error:', error));
//   }, []);

//   return (
//     <div>
//       {images && (
//         <div>
//           {/* Accede al valor de 'url' en el JSON y asígnalo como 'src' en la etiqueta <img> */}
//           <img src={images.url} alt="Imagen" />
//         </div>
//       )}
//     </div>
//   );
// }

// export default ShowImages;
