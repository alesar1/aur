pkgname=tabby
pkgver=1.0.181
pkgrel=1
pkgdesc="A terminal for a modern age"
arch=("x86_64")
url="https://github.com/Eugeny/tabby#readme"
license=("MIT")
provides=("tabby")
depends=(
    "gnome-keyring"
    "libsecret"
)
source=(
    "tabby-${pkgver}-linux.pacman::https://github.com/Eugeny/tabby/releases/download/v${pkgver}/tabby-${pkgver}-linux-x64.pacman"
)
sha256sums=(
    "7e4feec0ee596957c0e4fc5621cd6e0978440b581e856d8e1f3ffcae806cd59d"
)

package() {
    cd ${srcdir}
    tar -xvf tabby-${pkgver}-linux.pacman -C ${pkgdir}
    # Remove exsiting files
    rm -f ${pkgdir}/.PKGINFO ${pkgdir}/.MTREE ${pkgdir}/.INSTALL
}
