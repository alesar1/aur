# Maintainer: Firas Zaidan <firas@zaidan.de>

pkgbase=pywand
pkgname=('python2-wand' 'python-wand')
pkgver=0.4.4.380068e
pkgrel=1
arch=('i686' 'x86_64')
makedepends=('python2' 'python' 'imagemagick')
url="https://github.com/dahlia/wand"
license=('MIT')
#source=(https://github.com/dahlia/${pkgbase}/archive/${pkgver}.tar.gz)
#sha512sums=('6083f69e539d8b95774c2b3b27f51ac3642fa81dbdf25170141cc3da2fa640b57ba26cf92d16768be4ae345f26a10d289cfc598c2a9bb99625b105a99feba438')
source=(https://github.com/dahlia/wand/archive/380068e9cc1268a8c20e2fa13621058a68d55cb3.zip)
sha512sums=('168d8e9b96188d1a12286692c7d2e89b2b5c4415187411c42caa53c29528a2e49476bd33d73d7e5cf11e4acc91d9b106de4c60cf1da2188ad987929a22e274f8')

prepare() {
  mv wand-380068e9cc1268a8c20e2fa13621058a68d55cb3 ${pkgbase}-${pkgver}
  cp -r ${pkgbase}-${pkgver} ${pkgbase}-${pkgver}-py3
}

build() {
  cd ${pkgbase}-${pkgver}
  python2 setup.py build

  cd ../${pkgbase}-${pkgver}-py3
  python setup.py build
}

package_python2-wand() {
  pkgdesc="Python interface for ImageMagick library (Python 2 build)"
  depends=('python2' 'imagemagick')
  replaces=('pywand')
  conflicts=('pywand')
  provides=("pywand=${pkgver}")

  cd ${pkgbase}-${pkgver}
  python2 setup.py install --root="${pkgdir}" --optimize=1
  mkdir -p "${pkgdir}/usr/share/${pkgname}/"
  install -m644 LICENSE "${pkgdir}/usr/share/${pkgname}/"
  mv "${pkgdir}/usr/README.rst" "${pkgdir}/usr/share/${pkgname}/"
}

package_python-wand() {
  pkgdesc="Python interface for ImageMagick library (Python 3 build)"
  depends=('python' 'imagemagick')

  cd ${pkgbase}-${pkgver}-py3
  python setup.py install --root="${pkgdir}" --optimize=1
  mkdir -p "${pkgdir}/usr/share/${pkgname}/"
  install -m644 LICENSE "${pkgdir}/usr/share/${pkgname}/"
  mv "${pkgdir}/usr/README.rst" "${pkgdir}/usr/share/${pkgname}/"
}

# See https://github.com/dahlia/wand/issues/201
#check() {
#  cd ${pkgbase}-${pkgver}
#  python2 setup.py test
#
#  cd ../${pkgbase}-${pkgver}-py3
#  python setup.py test
#}
