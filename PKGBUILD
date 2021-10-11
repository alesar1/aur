# Maintainer: Stefan Husmann <stefan-husmann@t-online.de>
# Contributor: jfperini <@jfperini>

pkgname=veusz-git
pkgver=3.3.99.r0.g3605b232
pkgrel=1
pkgdesc="A scientific plotting and graphing package, designed to create publication-ready Postscript or PDF output."
url="https://github.com/veusz/veusz"
arch=('x86_64')
license=('GPL2')
depends=('python-pyqt5' 'python-numpy' 'hicolor-icon-theme' 'cblas')
makedepends=('git' 'sip')
optdepends=('ghostscript: for EPS/PS output'
            'python-pyfits: for reading files in FITS format'
            'python-dbus: for dbus interface'
            'python-iminuit: improved fitting'
            'python-astropy: for VO table import')
conflicts=('veusz')
provides=('veusz')
source=('git+https://github.com/veusz/veusz')
sha256sums=('SKIP')

pkgver() {
  cd ${pkgname%-git}
  git describe --tags --long|cut -c7- |sed 's+-+.r+'|tr - .
}

build() {
  cd ${pkgname%-git}
  python setup.py build
}

package() {
  cd ${pkgname%-git}
  python setup.py install --root="$pkgdir" --prefix=/usr
  for _i in 16 32 48 64 128; do
    install -Dm644 "icons/veusz_${_i}.png" "$pkgdir"/usr/share/icons/hicolor/${_i}x${_i}/apps/veusz.png
  done
  install -D -m644 "support/veusz.desktop"  "${pkgdir}/usr/share/applications/veusz.desktop"
}
