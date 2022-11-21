# Maintainer: xeruf <27jf at pm dot me>
# Creator: Matthias De Bie <mattydebie@gmail.com>

_pkgname='invoiceninja-desktop'
_repo='admin-portal'
pkgname="${_pkgname}"
pkgdesc="Desktop version for Invoice Ninja"
pkgver=5.0.100
pkgrel=1
url="https://github.com/invoiceninja/$_repo"
source=("${url}/archive/refs/tags/v${pkgver}.tar.gz" "invoiceninja-desktop.desktop")
provides=("${_pkgname}")
makedepends=(flutter)
arch=('i686' 'x86_64')
license=('unknown')
sha256sums=('cb1c92b63c528471d7804d3a2fc1bb2590ba184b35841ac21fc4e40d5632b9c2'
            'beb5d95b727169634e0ee42bf4d4f556ac1fa2d2f73a9d9a61c29820c13dc1c6')

package() {
  mkdir -p "${pkgdir}/usr/share/applications"
  install -m 655 invoiceninja-desktop.desktop "${pkgdir}/usr/share/applications/"

  cd "${srcdir}/${_repo}-${pkgver}"
  # See Repo Readme
  cp lib/.env.dart.example lib/.env.dart
  flutter build linux
  # TODO pass -Wno-dev to make

  cd build/linux/x64/release
  dest="${pkgdir}/opt/${pkgname}"
  mkdir -p "$dest" "${pkgdir}/usr/bin/"
  cp -r bundle/data "$dest"
  cp -r bundle/lib "$dest"
  install -m 755 bundle/invoiceninja "$dest"
  install -m 755 bundle/invoiceninja "${pkgdir}/usr/bin/"
}
