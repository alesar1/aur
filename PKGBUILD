# Maintainer: hamki <hamki.do2000@gmail.com>
pkgname=nordic-bluish-accent-theme
_pkgname=Nordic-bluish-accent
pkgver=2.0.0
pkgrel=1
epoch=
pkgdesc="Nordic is a Gtk3.20+ theme created using the awesome Nord color pallete."
arch=('i686' 'x86_64')
url="https://github.com/EliverLara/Nordic"
license=('GPL3')
groups=()
depends=()
makedepends=()
checkdepends=()
optdepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=
changelog=
source=("https://github.com/EliverLara/Nordic/releases/download/$pkgver/$_pkgname.tar.xz"
)
noextract=()
sha256sums=(ce6f4b582a256502662ef9d939b6dd4d8eb43301555ffa038c0ee54545f87e86)

package() {
  cd "${_pkgname}"
  mkdir -p "${pkgdir}/usr/share/themes/$_pkgname"
  cp -a "${srcdir}/${_pkgname}/"* "${pkgdir}/usr/share/themes/${_pkgname}/"
}
