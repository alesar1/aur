# Maintainer: py_crash <agustin.ferrario@hotmail.com.ar>
# Based on kang's thunderbird-aurora
pkgname=thunderbird-earlybird
_name=thunderbird
_channel=earlybird
_milestone=51.0a2
pkgver=51.0a2.20161105004019
pkgrel=1
pkgdesc="Standalone Mail/News reader - Earlybird channel"
arch=('i686' 'x86_64')
license=('MPL' 'GPL' 'LGPL')
url="http://www.mozilla.org/${_name}/channel"
depends=('alsa-lib' 'cairo' 'dbus-glib' 'desktop-file-utils' 'fontconfig' 
          'freetype2' 'gtk3' 'hicolor-icon-theme' 'hunspell' 'libevent'
          'libjpeg' 'libmng' 'libpng' 'libvpx' 'libxt' 'mozilla-common'
          'nspr' 'nss' 'shared-mime-info' 'sqlite3' 'startup-notification')
optdepends=('libcanberra: for sound support')
replaces=("${_name}-aurora")
install="${pkgname}.install"

source=("${pkgname}.desktop")

source_i686=('https://ftp.mozilla.org/pub/thunderbird/nightly/latest-comm-aurora/thunderbird-51.0a2.en-US.linux-i686.tar.bz2')
source_x86_64=('https://ftp.mozilla.org/pub/thunderbird/nightly/latest-comm-aurora/thunderbird-51.0a2.en-US.linux-x86_64.tar.bz2')

sha512sums=('a36bb5710b9cd6637cf6f538808e2fba8c99fdd1d486446ff9ee8094ca30b5592c17b3e808cae1da7ff2b28123f54902ed4ee1501585a8dcfc54d581588638d3')
sha512sums_i686=('52791fc343cb4e15d84d55c3fd1695564ad1d49505cb36941d3b42ea4a6d18c4ec1ca5e79cb8401893431d916edf1c6ef20e0a02b8af28fcc58cdfeacf15b5bf')
sha512sums_x86_64=('9e9e2d125249166758cf1b9acdafa92b982d6cccdf532cc577b4763af4e3815b4f478f749dd7a87ae6c0f428efd263cd8311b687909dee8f739c20537743acc2')

pkgver() {
    cd "${_name}"
    echo "${_milestone}.$(cat platform.ini|grep BuildID|cut -d "=" -f2 )"
}

package() {
  install -d "${pkgdir}"/{usr/bin,opt}
  cp -a ${_name} "${pkgdir}/opt/${pkgname}"
  ln -s /opt/${pkgname}/${_name} "${pkgdir}/usr/bin/${pkgname}"
  for i in 16x16 22x22 24x24 32x32 48x48 256x256; do
    install -Dm644 ${_name}/chrome/icons/default/default${i/x*/}.png "${pkgdir}/usr/share/icons/hicolor/${i}/apps/${pkgname}.png"
  done
  install -Dm644 ${pkgname}.desktop "${pkgdir}/usr/share/applications/${pkgname}.desktop"
  rm -rf "${pkgdir}/opt/${pkgname}/dictionaries"
  ln -sf /usr/share/hunspell "${pkgdir}/opt/${pkgname}/dictionaries"
}
