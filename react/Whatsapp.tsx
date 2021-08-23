import React from 'react'
import { useCssHandles } from 'vtex.css-handles'

interface WhatsappProps {}



const Whatsapp: StorefrontFunctionComponent<WhatsappProps> = ({}) => {

  const CSS_HANDLES = ['whatsapp','container','botaowhats','logowhats','linkwhatsapp','homepage']

  const handles = useCssHandles(CSS_HANDLES)

    return (

      

      <div className={`${handles.container} flex mt8 mb0 pt0 pb0    justify-start  vtex-flex-layout-0-x-flexRowContent items-stretch w-100`}>
        <div className={`${handles.whatsapp} pr0 items-stretch vtex-flex-layout-0-x-stretchChildrenWidth   flex`}>
          <a className={`${handles.linkwhatsapp}`} href="https://upmedalthiagoteberga--hiringcoders2021.myvtex.com/">
            <h1 className={`${handles.homepage} c-muted-1 db tc`}>Página Inicial</h1>
          </a>
        </div>
        <div className={`${handles.whatsapp} pr0 items-stretch vtex-flex-layout-0-x-stretchChildrenWidth   flex`}>
          <a className={`${handles.linkwhatsapp}`} target="_blank" href="https://api.whatsapp.com/send?phone=5512992450865&text=Bom%20dia%20Thiago%2C%20parab%C3%A9ns%20voc%C3%AA%20foi%20selecionado%20para%20a%20%C3%BAltima%20fase%20do%20programa%20Hiring%20Coders.">
            <h1 className={`${handles.botaowhats}`}>Suporte WhatsApp 
              <img src="https://logospng.org/download/whatsapp/logo-whatsapp-verde-icone-ios-android-256.png" className={`${handles.logowhats}`}/>
            </h1>
          </a>
        </div>
      </div>
    )
}

Whatsapp.schema = {
  title: 'editor.whatsapp.title',
  description: 'editor.whatsapp.description',
  type: 'object',
  properties: {},
}

export default Whatsapp
