# Maintainer: Hugo Osvaldo Barrera <hugo@barrera.io>

pkgname=caffeine-ng
pkgver=3.3.4
pkgrel=1
pkgdesc="Status bar application able to temporarily inhibit the screensaver and sleep mode."
arch=(any)
url="https://gitlab.com/hobarrera/caffeine-ng"
license=(GPL3)
depends=(python-gobject python-xdg python-dbus python-docopt python-ewmh gtk3
         libnotify python-setproctitle python-setuptools)
optdepends=("libindicator-gtk3: AppIndictor support.")
conflicts=(caffeine caffeine-bzr caffeine-oneclick caffeine-systray)
provides=(caffeine caffeine-bzr caffeine-oneclick caffeine-systray)
replaces=(caffeine-oneclick caffeine-systray)
options=(!emptydirs !libtool)
install=$pkgname.install
source=("https://pypi.io/packages/source/c/${pkgname}/${pkgname}-${pkgver}.tar.gz")

md5sums=('af7bbeb371cca29a9d58b45aa086e58b')

build() {
  cd "$srcdir"/caffeine-ng-${pkgver}
  python setup.py build
}

package() {
  cd "$srcdir"/caffeine-ng-${pkgver}
  python setup.py install --root="$pkgdir"
}
