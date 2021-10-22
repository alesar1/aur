# Contributor: Andrzej Giniewicz <gginiu@gmail.com>
# Contributor: G_Syme <demichan(at)mail(dot)upb(dot)de>
# Contributor: Ray Kohler <ataraxia937@gmail.com>
# Contributor: Stefan Husmann <stefan-husmann@t-online.de>
# Contributor: moostik <mooostik_at_gmail.com>

pkgname=veusz
pkgver=3.4
pkgrel=1
pkgdesc="A 2D and 3D scientific plotting package, designed to create publication-ready PDF or SVG output"
arch=('x86_64')
url="https://veusz.github.io/"
license=('GPL2')
depends=('python-pyqt5' 'python-numpy' 'hicolor-icon-theme')
makedepends=('sip>=5.0')
optdepends=('python-h5py:  HDF5 support'
#             'pyemf >= 2.0.0: EMF export   https://github.com/jeremysanders/pyemf (Python 3 port in development) - package missing
            'python-dbus: dbus interface'
            'python-iminuit: improved fitting'
            'python-astropy: VO table import and FITS import'
            'ghostscript: for EPS/PS output')
source=("https://github.com/veusz/veusz/releases/download/veusz-${pkgver}/veusz-${pkgver}.tar.gz")
sha256sums=('cd9fb0a7df1cfcdb671883435de968b52dffe11145613e42459a8979efd9cc5c')


build() {
  cd "${pkgname}-${pkgver}"
  python setup.py build
}

package() {
  cd "${pkgname}-${pkgver}"

  python setup.py install --root="${pkgdir}" --prefix=/usr
  for _i in 16 32 48 64 128; do
    install -D -m644 "icons/veusz_${_i}.png" \
        "${pkgdir}/usr/share/icons/hicolor/${_i}x${_i}/apps/veusz.png"
  done
  install -D -m644 "support/veusz.desktop" \
      "${pkgdir}/usr/share/applications/veusz.desktop"
}

