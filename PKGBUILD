pkgname=brainworkshop
pkgver=5.0
pkgrel=1
pkgdesc="Brain Workshop is a free open-source version of the Dual N-Back mental exercise"
arch=('any')
url="https://github.com/samcv/brainworkshop"
license=('GPL')
depends=('python-pyglet' 'openal' 'ffmpeg')
install='brainworkshop.install'
source=("https://github.com/samcv/brainworkshop/archive/v${pkgver}.tar.gz"
        brainworkshop.sh
        brainworkshop.desktop)
sha256sums=('06844b8dbfc56ddfe4271457e78b915d2d30828a6047738666760684da7dbbfa'
            '13b70c017b98586e32e14b498bbe56e36ee067b4904030d1fcdd7f4a6779db29'
            '1e645c18ce0648f82285da25a5bbbad1e63e282bfe9d5c31329eb9d04c23f21c')
prepare () {
  cd "${srcdir}/brainworkshop-${pkgver}"
}

package() {
  #Data
  _datadir="${pkgdir}/usr/share/brainworkshop"
  install -d ${_datadir}
  cp -a ${srcdir}/brainworkshop-${pkgver}/{brainworkshop.pyw,res,data} ${_datadir}

  #Docs
  _docdir=${pkgdir}/usr/share/doc/brainworkshop
  install -d "${_docdir}"
  install -D -m644 "${srcdir}/brainworkshop-${pkgver}/Readme.md" "${_docdir}"

  #Launcher and Icon
  install -Dm75 "${srcdir}/brainworkshop.sh" "${pkgdir}/usr/bin/brainworkshop"
  install -D -m644 "${srcdir}/brainworkshop.desktop" "${pkgdir}/usr/share/applications/brainworkshop.desktop"
  install -D -m644 "${srcdir}/brainworkshop-${pkgver}/res/misc/brain/brain.png" "${pkgdir}/usr/share/pixmaps/brainworkshop.png"
}
