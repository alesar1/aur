# Maintainer: Yardena Cohen <yardenack at gmail dot com>
# Contributor: Max Roder <maxroder@web.de>
# Contributor: Sebastian Jug <seb AT stianj DOT ug>

# To port this PKGBUILD to another language of tor-browser you 
# have to change $pkgname, $_language, $pkgdesc and $url in PKGBUILD
# AND (!) the first line in the .install file!

pkgname='tor-browser-en'
pkgver='6.0.4'
_language='en-US'
pkgrel=2
pkgdesc='Tor Browser Bundle: Anonymous browsing using firefox and tor'
url='https://www.torproject.org/projects/torbrowser.html.en'
arch=('x86_64' 'i686')
license=('GPL')
depends=('gtk2' 'mozilla-common' 'libxt' 'startup-notification' 'mime-types'
         'dbus-glib' 'alsa-lib' 'desktop-file-utils' 'hicolor-icon-theme'
         'libvpx' 'icu' 'libevent' 'nss' 'hunspell' 'sqlite')
optdepends=('zenity: simple dialog boxes'
            'kdebase-kdialog: KDE dialog boxes'
            'gst-plugins-good: h.264 video'
            'gst-libav: h.264 video'
            'libpulse: PulseAudio audio driver'
            'libnotify: Gnome dialog boxes')
install="${pkgname}.install"

validpgpkeys=('8738A680B84B3031A630F2DB416F061063FEE659'
              'EF6E286DDA85EA2A4BA7DE684E2C6E8793298290')
source_x86_64=("https://dist.torproject.org/torbrowser/${pkgver}/tor-browser-linux64-${pkgver}_${_language}.tar.xz"{,.asc})
source_i686=("https://dist.torproject.org/torbrowser/${pkgver}/tor-browser-linux32-${pkgver}_${_language}.tar.xz"{,.asc})
source+=("${pkgname}.desktop"
         "${pkgname}.png"
         "${pkgname}.sh")

sha256sums_x86_64=('187984a2133faa559b91b89a789c0069da98993863b1086a5c90bc995d1aba91' 'SKIP')
sha256sums_i686=(  '65137a21905d7f3e5851448eb787c70acd3f368d007f4e0b34c197d70c7955b4' 'SKIP')
sha256sums+=('3d5fc01f2cfbae0a00b7117b0b0a24028d1686e6f81a347809f74de2d8522ff7'
             '17fc2f5784d080233aca16e788d62ab6fe3e57cf781b123cfe32767de97d6d3b'
             '89ed1cda6611abcbfdafef9aec78ada146643455d6675b22b72319ae286ea67e')

noextract_x86_64=("tor-browser-linux64-${pkgver}_${_language}.tar.xz")
noextract_i686=("tor-browser-linux32-${pkgver}_${_language}.tar.xz")

package() {
   cd "${srcdir}"

   sed -i "s/REPL_NAME/${pkgname}/g"       ${pkgname}.sh
   sed -i "s/REPL_VERSION/${pkgver}/g"	    ${pkgname}.sh
   sed -i "s/REPL_LANGUAGE/${_language}/g" ${pkgname}.sh

   sed -i "s/REPL_NAME/${pkgname}/g"       ${pkgname}.desktop
   sed -i "s/REPL_LANGUAGE/${_language}/g" ${pkgname}.desktop
   sed -i "s/REPL_COMMENT/${pkgdesc}/g"    ${pkgname}.desktop

   install -Dm 644 ${pkgname}.desktop      ${pkgdir}/usr/share/applications/${pkgname}.desktop
   install -Dm 644 ${pkgname}.png          ${pkgdir}/usr/share/pixmaps/${pkgname}.png
   install -Dm 755 ${pkgname}.sh           ${pkgdir}/usr/bin/${pkgname}

   if [[ "$CARCH" == 'i686' ]]; then
      install -Dm 644 tor-browser-linux32-${pkgver}_${_language}.tar.xz ${pkgdir}/opt/${pkgname}/tor-browser-linux32-${pkgver}_${_language}.tar.xz
   else
      install -Dm 644 tor-browser-linux64-${pkgver}_${_language}.tar.xz ${pkgdir}/opt/${pkgname}/tor-browser-linux64-${pkgver}_${_language}.tar.xz
   fi
}
