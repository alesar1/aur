# Maintainer: Alex Dewar <alex.dewar@gmx.co.uk>
# Contributor: Marcin Mielniczuk <marmistrz dot dev at zoho dot eu>
# Contributor: Sam S. <smls75@gmail.com>
# Contributor: Nuno Araujo <nuno.araujo@russo79.com>

pkgname=mnemosyne
pkgver=2.8
pkgrel=1
pkgdesc="A flash-card tool with a sophisticated card review algorithm"
arch=('any')
url='http://www.mnemosyne-proj.org'
license=('GPL')
depends=('python-pyqt5' 'qt5-webengine' 'python-argon2_cffi'
         'python-pillow' 'python-matplotlib' 'python-cherrypy' 'python-webob'
         'python-pyqtwebengine' 'python-googletrans' 'python-google_trans_new' 'python-gtts')
makedepends=('python-setuptools')
optdepends=('texlive-core: support for mathematical formulae in cards'
            'ttf-ms-fonts: support for non-latin labels on statistic plots'
            'python-cheroot: support for starting a sync server'
            'python-opengl: mentioned in a non-fatal warning'
	    'mplayer: for playing audio and video externally')
conflicts=('mnemosyne-bzr')
install='mnemosyne.install'

source=("http://downloads.sourceforge.net/mnemosyne-proj/Mnemosyne-${pkgver}.tar.gz")
sha256sums=('63949ad4b44188501915a0465f32d3ca066698c58f86c46cf3196f9d601f6900')

prepare() {
  cd "Mnemosyne-${pkgver}/"

  # Fix windows line endings
  sed -i "s/\r//g" mnemosyne/pyqt_ui/mnemosyne
}

build() {
  cd "Mnemosyne-${pkgver}/"

  python setup.py build
}

package() {
  cd "Mnemosyne-${pkgver}/"
  python setup.py install --root="${pkgdir}" --optimize=1
}

