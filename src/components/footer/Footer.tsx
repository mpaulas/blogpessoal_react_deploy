// Atalho para criar componente: rfce | Pode apagar o import

import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {
 
  let data = new Date().getFullYear() //Metodo getFullYear só pega o ano da data

  return (
    <>
        <div className="flex justify-center bg-blue-900 text-white">
          <div className="container flex flex-col items-center py-4">
            <p className='text-xl font-bold'>Blog pessoal Paula Silva | Copyright: {data} </p>
            <p className='text-lg'>Acesse nossas redes sociais</p>
            <div className='flex gap-2'>
              <a href="https://www.linkedin.com/in/mpaulas/" target='_blank'>
                <LinkedinLogo size={48} weight='bold' />
              </a>
              <a href="https://www.instagram.com/" target='_blank'>
              <InstagramLogo size={48} weight='bold' />
              </a>
              <a href="https://www.facebook.com/" target='_blank'>
              <FacebookLogo size={48} weight='bold' />
              </a>
            </div>
          </div>
        </div>
      </>
  )
}

export default Footer