# Maintainer: Adam Tazul (SimPilotAadamT) <adam_tazul@outlook.com>

pkgname=python-fildem
pkgver=0.6.7
pkgrel=2
pkgdesc="This project is a fork of gnomehud with the adition of a global menu bar"
arch=('i686' 'x86_64')
url="https://github.com/gonzaarcr/fildem"
depends=('bamf'
         'appmenu-gtk-module'
         'libkeybinder3'
         'libdbusmenu-gtk2'
         'libdbusmenu-gtk3'
         'python-fuzzysearch'
         'python-future'
         'dbus-python')
makedepends=('git')
provides=("python3-fildem=$pkgver"
          "python-fildem=$pkgver")
conflicts=("python3-fildem"
           "python-fildem-git")
source=("git+https://github.com/gonzaarcr/fildem.git#tag=$pkgver")
md5sums=('SKIP')

pkgver() {
    cd "$srcdir/fildem"
    python3 -c "import fildem; print(fildem.__version__)"
}

build() {
    cd "$srcdir/fildem"
    python3 setup.py build
}

check() {
    cd "$srcdir/fildem"
    python3 setup.py test
}

package() {
    cd "$srcdir/fildem"
    python3 setup.py install --skip-build --root=$pkgdir --optimize=1
}
