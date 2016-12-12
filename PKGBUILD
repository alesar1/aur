# Maintainer: Sam S. <smls75@gmail.com>
# Contributor: Nuno Araujo <nuno.araujo@russo79.com>

pkgname=mnemosyne
pkgver=2.4
pkgrel=1
pkgdesc="A flash-card tool with a sophisticated card review algorithm"
arch=('i686' 'x86_64')
url='http://www.mnemosyne-proj.org'
license=('GPL')
depends=('python-pyqt5' 'python-matplotlib' 'python-cherrypy' 'python-webob')
makedepends=('python2-setuptools')
optdepends=('texlive-core: support for mathematical formulae in cards'
            'ttf-ms-fonts: support for non-latin labels on statistic plots')
conflicts=('mnemosyne-bzr')
install='mnemosyne.install'

source=("http://downloads.sourceforge.net/mnemosyne-proj/Mnemosyne-${pkgver}.tar.gz")
md5sums=('b89ef0de414dd351f77f5c17c6f54376')

build() {
  cd "Mnemosyne-${pkgver}/"
  python setup.py build
}

package() {
  cd "Mnemosyne-${pkgver}/"
  python setup.py install --root="${pkgdir}"
}
