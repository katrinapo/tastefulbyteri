import React from 'react';


function Header() {
    return (
        <div>
        <header class="sans-serif">
          <div class="cover bg-left bg-center-l header">
            <div class="bg-white-40 pb0 pb2-m pb7-l pt6">
              <div class="tc-l mt2 mt2-m mt4-l ph3">
                <h1 class="f10 f1-l fw3 black-100 mb0 lh-title main-header">Tasteful by Teri</h1>
                <h2 class="fw3 f3 black-80 mt3 mb4">Authentic Handmade Filipino Empanadas ready to order!</h2>
                <a class="f6 no-underline grow dib v-mid bg-black white ba b--black ph3 pv2 mb3" href="/">Order Online</a>
                <span class="dib v-mid ph3 black-70 mb3">or</span>
                <a class="f6 no-underline grow dib v-mid black ba b--black ph3 pv2 mb3" href="">Call us now!</a>
              </div>
            </div>
          </div> 
        </header>
        </div>
    )
}

export default Header;
