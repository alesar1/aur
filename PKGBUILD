# Maintainer: Miguel Revilla <yo at miguelrevilla dot com>
# Contributor: Yardena Cohen <yardenack at gmail dot com>
# Contributor: Max Roder <maxroder@web.de>
# Contributor: Sebastian Jug <seb AT stianj DOT ug>

# To port this PKGBUILD to another language of tor-browser you 
# have to change $pkgname, $_language, $pkgdesc and $url in PKGBUILD
# AND (!) the first line in the .install file!

pkgname='tor-browser-es'
pkgver='7.0.11'
_language='es-ES'
pkgrel=1
pkgdesc="Tor Browser Bundle: Anonymous browsing using firefox and tor (${_language})"
url='https://www.torproject.org/projects/torbrowser.html'
arch=('x86_64')
license=('GPL')
depends=('gtk2' 'mozilla-common' 'libxt' 'startup-notification' 'mime-types'
         'dbus-glib' 'alsa-lib' 'desktop-file-utils' 'hicolor-icon-theme'
         'libvpx' 'icu' 'libevent' 'nss' 'hunspell' 'sqlite')
optdepends=('zenity: simple dialog boxes'
            'kdialog: KDE dialog boxes'
            'gst-plugins-good: h.264 video'
            'gst-libav: h.264 video'
            'libpulse: PulseAudio audio driver'
            'libnotify: Gnome dialog boxes')
install="${pkgname}.install"
validpgpkeys=('EF6E286DDA85EA2A4BA7DE684E2C6E8793298290')
source=("https://dist.torproject.org/torbrowser/${pkgver}/tor-browser-linux64-${pkgver}_${_language}.tar.xz"{,.asc}
        "${pkgname}.desktop"
        "${pkgname}.png"
        "${pkgname}.sh")
md5sums=('defc24b3ab39d276107ce86c33a5b88e'
         'SKIP'
         '85d9e6237025b9e76a656342168140b6'
         '494afbfa60fb4ce21840244cc3f7208c'
         '3ef08aff0e2afebb1a2a7ffbf8f65897')
sha256sums=('333d3222a640c60472b7964e38a0b7b6b256326773954c8c411c61f9411ab6f8'
            'SKIP'
            '871f856dc8f0a7f273cbb9ba286fd744897ffcaf7308d15d58f2c8ec8baa981b'
            '17fc2f5784d080233aca16e788d62ab6fe3e57cf781b123cfe32767de97d6d3b'
            '1bca06dc844f000fd5aae91a082f0cc0f8ca3397dfbf88b0adc847a4e43e1f16')
sha512sums=('34f520b6f6190445f432b88fe6913913f9414fd1bb0a0b44ca4da55d74cea9812a31af4bd8e24f67c7c93c2e9127983fbb90a60c1dd520d265fbf5d4c4664326'
            'SKIP'
            'c476a7efe7114cf4edbfc8eeeb08ba7a2cfbcc6df09db8ca40db2a8a124ddece8bd07c575c5d0fb80ded6a74d3d8a66e3dbd9a85bb9f3488fc2f023ec10fc233'
            '0a68a0a8cfeea630a91036d86b167cf640ab378e64e0d8ab55e9f99cde3c9d6a2d762ea0f5528f8a8e1579600fcc59eaa72ba499d95daeb4334e81ab644bfb02'
            '87ceaa0fc03e43bd5cd591514ca9f5ad583982a80607180c8e3633ceb76de8a39e49fe37eb7f407e1e4c24ac4e6954b328699cbd714884bd80b6a0ef243e0946')
noextract=("tor-browser-linux64-${pkgver}_${_language}.tar.xz")

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

   install -Dm 644 tor-browser-linux64-${pkgver}_${_language}.tar.xz ${pkgdir}/opt/${pkgname}/tor-browser-linux64-${pkgver}_${_language}.tar.xz
}
