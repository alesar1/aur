# Contributor: Keerthan Jaic <jckeerthan at gmail dot com>
pkgname=brainworkshop
pkgver=4.8.4
pkgrel=7
pkgdesc="Brain Workshop is a free open-source version of the Dual N-Back mental exercise"
arch=('any')
url="http://brainworkshop.sourceforge.net/"
license=('GPL')
depends=('python2' 'python2-pyglet' 'avbin7' 'openal')
install='brainworkshop.install'
source=(http://downloads.sourceforge.net/brainworkshop/$pkgname-$pkgver.zip
        brainworkshop.sh
        brainworkshop.desktop)
sha256sums=('bb1f259eda90e945a803524eedbc0087283e3fb9ae2ab4c16ded88c8c4e95b15'
            '6b11101f516bf5d7479b2f9c1bb43f7764ed4ace41ae2272aaea37a18c5b4a53'
            '1e645c18ce0648f82285da25a5bbbad1e63e282bfe9d5c31329eb9d04c23f21c')

prepare () {
  cd "${srcdir}/${pkgname}"
  sed -i "s|halign='middle'|align='center'|g" brainworkshop.pyw

  # ManagedSoundPlayer was deprecated
  sed -i "s|ManagedSoundPlayer|Player|g" brainworkshop.pyw

  # avbin moved
  sed -i "s|from pyglet.media import avbin|from pyglet.media.sources import avbin|g" brainworkshop.pyw

  # set_position was deprecated
  sed -i "s|.set_position|.position = |g" brainworkshop.pyw
}

package() {

  #Data
  _datadir="${pkgdir}/usr/share/${pkgname}"
  install -d ${_datadir}
  cp -a ${srcdir}/${pkgname}/{brainworkshop.pyw,res,data} ${_datadir}

  #Docs
  _docdir=${pkgdir}/usr/share/doc/${pkgname}
  install -d "${_docdir}"
  install -D -m644 "${srcdir}/${pkgname}/Readme.txt" "${_docdir}"

  #Launcher and Icon
  install -Dm75 "${srcdir}/${pkgname}.sh" "${pkgdir}/usr/bin/${pkgname}"
  install -D -m644 "${srcdir}/${pkgname}.desktop" "${pkgdir}/usr/share/applications/${pkgname}.desktop"
  install -D -m644 "${srcdir}/${pkgname}/res/misc/brain/brain.png" "${pkgdir}/usr/share/pixmaps/${pkgname}.png"
}
