# Maintainer: Simao Gomes Viana <xdevs23@outlook.com>

pkgbase=linux-nitrous-headers
pkgname=linux-nitrous-headers
pkgver=5.4.15
pkgrel=1
_tar_pkgrel=1
pkgdesc="Headers for linux-nitrous"
arch=('x86_64')
url="https://gitlab.com/xdevs23/linux-nitrous"
license=('GPL2')
groups=()
depends=()
provides=('linux')
conflicts=('linux-nitrous-git-headers')
makedepends=('tar')
options=('!strip')
source=("https://github.com/xdevs23/linux-nitrous/releases/download/v$pkgver-$_tar_pkgrel/linux-nitrous-git-headers-$pkgver-$_tar_pkgrel-x86_64.pkg.tar.xz")
sha256sums=('1907953e9b6f5f0d0a4f310265d74507c34ac076930ab01e9752411654ef2d53')

build() {
    echo "No need to build anything"
}

package() {
    cd "$srcdir"
    cp -R "$srcdir/." "$pkgdir/."
    if [ -f "$srcdir/.INSTALL" ]; then
      mv "$srcdir/.INSTALL" "${startdir}/linux-nitrous-headers.install"
      install="linux-nitrous-headers.install"
    fi
    for f in .BUILDINFO .INSTALL .MTREE .PKGINFO; do
      rm -f "$pkgdir/$f"
    done
    rm -f "$pkgdir/*.tar.*"
}
