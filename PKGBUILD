# Maintainer: Proton Technologies AG <opensource at proton dot me>
# Maintainer: Alexandru Cheltutior <acrandom at pm dot me>
pkgname=protonvpn-cli
_gitpkgname=linux-cli
pkgver=3.10.0
pkgrel=1
pkgdesc="Official ProtonVPN Command Line Interface, maintained by the ProtonVPN team."
arch=("any")
url="https://github.com/ProtonVPN/"
license=("GPL3")
groups=("ProtonVPN")
depends=("python-protonvpn-nm-lib" "python-pythondialog")
makedepends=("python-setuptools")
source=("https://github.com/ProtonVPN/linux-cli/archive/refs/tags/$pkgver.tar.gz")
sha256sums=('617d9738ec4ab42c80de95bf6dcf205735a07b22c2d7659d2d689a03ea763b8a')
validpgpkeys=("A884 41BD 4864 F95B EE08  E63A 71EB 4740 1994 0E11")

build() {
    cd "$_gitpkgname-$pkgver"
    python setup.py build
}

package() {
    cd "$_gitpkgname-$pkgver"
    python setup.py install --root="$pkgdir" --optimize=1
}
