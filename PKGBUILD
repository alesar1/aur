# Maintainer: jmcb <joelsgp@protonmail.com>
pkgname=idle
pkgver=3.10.5
pkgrel=2
epoch=
pkgdesc="Python Integrated Development and Learning Environment (desktop entry)"
arch=('any')
url="https://packages.debian.org/stable/python/idle"
license=("Python")
groups=()
depends=('python')
makedepends=()
checkdepends=()
optdepends=()
provides=()
conflicts=()
replaces=('idle3'
          'python-idle')
backup=()
options=()
install=
changelog=
source=('idle.desktop')
noextract=()
sha256sums=('8bbde2b6be32cd47bc4547fb941466fc89d13f2538a2c30594e5e21d83ca0800')
validpgpkeys=()


package() {
    install -Dm755 idle.desktop "${pkgdir}/usr/share/applications/idle.desktop"
    _icons_dir="${pkgdir}/usr/share/pixmaps"
    install -dm755 "${_icons_dir}"
    ln -s /usr/lib/python3.10/idlelib/Icons/idle_256.png "${_icons_dir}/idle.png"
}
