# Maintainer: Stefano Marsili <efanomars@gmx.ch>

pkgname=stmm-input-bt
pkgver=0.11
pkgrel=1
pkgdesc="Device input event library - keyboards over bluetooth"
url='https://www.efanomars.com/libraries/stmm-input-bt'
arch=('x86_64')
license=('GPL3' 'LGPL3')

depends=('stmm-input' 'bluez' 'bluez-libs' 'dconf')
makedepends=('cmake' 'gcc' 'doxygen' 'graphviz' 'python')
optdepends=()

#provides=("stmm-input-bt")
#replaces=("stmm-input-bt")
#conflicts=("stmm-input-bt")

source=('https://efanomars.com/sources/stmm-input-bt-0.11.tar.gz')
sha256sums=('20c818d83ee0c1e68067c434309939b9102f9c0433597a4e64eca65c9fb64ae9')

build() {
  cd "${srcdir}/stmm-input-bt"

  ./scripts/install_stmm-input-bt-all.py -b=Release -s=Off -t=Off -d=Off --installdir="/usr" --no-install --no-compile-schemas --no-sudo
}

package() {
  cd "${srcdir}/stmm-input-bt"

  ./scripts/priv/dd_install_stmm-input-bt-all.py -b=Release -s=Off -t=Off -d=Off --installdir="/usr" --destdir="${pkgdir}" --no-configure --no-make --no-compile-schemas --no-sudo
}

post_install() {
  glib-compile-schemas "/usr/share/glib-2.0/schemas"
}

post_upgrade() {
  glib-compile-schemas "/usr/share/glib-2.0/schemas"
}

post_remove() {
  glib-compile-schemas "/usr/share/glib-2.0/schemas"
}

