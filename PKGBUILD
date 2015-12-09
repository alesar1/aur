# Maintainer: Sam S. <smls75@gmail.com>
# Contributor: Nuno Araujo <nuno.araujo@russo79.com>

pkgname=mnemosyne
pkgver=2.3.5
pkgrel=1
pkgdesc="A flash-card tool with a sophisticated card review algorithm"
arch=('i686' 'x86_64')
url='http://www.mnemosyne-proj.org'
license=('GPL')
depends=('python2-pyqt4' 'python2-matplotlib' 'python2-cherrypy' 'python2-webob')
makedepends=('python2-setuptools')
optdepends=('texlive-core: support for mathematical formulae in cards')
conflicts=('mnemosyne-bzr')
install='mnemosyne.install'

source=("http://downloads.sourceforge.net/mnemosyne-proj/Mnemosyne-${pkgver}.tar.gz")
md5sums=('fca826a5b59183ff5e50f44f617382e2')

build() {
  cd "${srcdir}/Mnemosyne-${pkgver}/"
  python2 setup.py build
}

package() {
  cd "${srcdir}/Mnemosyne-${pkgver}/"
  python2 setup.py install --root="${pkgdir}"
}
