# Maintainer: Stefano Marsili <efanomars@gmx.ch>

pkgname=stmm-input-bt
pkgver=0.4
pkgrel=1
pkgdesc="Device input event library - keyboards over bluetooth"
url='https://www.efanomars.com/libraries/stmm-input-bt'
arch=('x86_64')
license=('GPL3')

depends=('stmm-input' 'bluez' 'gtkmm' 'gconfmm')
makedepends=('cmake' 'gcc' 'doxygen' 'graphviz' 'python')
optdepends=()

#provides=("stmm-input-bt")
#replaces=("stmm-input-bt")
#conflicts=("stmm-input-bt")

source=('git+https://gitlab.com/efanomars/stmm-input-bt.git#commit=b77c0918a6e048c8ba4f16daca6fd5bdbb2ae205')
sha512sums=('SKIP')

build() {
  cd "${srcdir}/stmm-input-bt"

  ./scripts/install_stmm-input-bt-all.py -b=Release -s=Off -t=Off -d=Off --installdir="/usr" --no-install --no-sudo
}

package() {
  cd "${srcdir}/stmm-input-bt"

  ./scripts/priv/dd_install_stmm-input-bt-all.py -b=Release -s=Off -t=Off -d=Off --installdir="/usr" --destdir="${pkgdir}" --no-configure --no-make --no-sudo
}
