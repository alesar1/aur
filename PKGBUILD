# Maintainer: Proton Technologies AG <opensource at proton dot me>
# Co-Maintainer: Alexandru Cheltutior <acrandom at pm dot me>
pkgname=python-protonvpn-nm-lib
_gitpkgname=protonvpn-nm-lib
pkgver=3.3.1
pkgrel=2
pkgdesc="ProtonVPN NetworkManager library."
arch=("any")
url="https://github.com/ProtonVPN"
license=("GPL3")
groups=("ProtonVPN")
depends=("python-proton-client>=0.5.0" "python-proton-client<0.6.0" "networkmanager" "networkmanager-openvpn" "openvpn" "libnm" "dbus" "libsecret" "python-pyxdg" "python-keyring" "python-jinja" "python-distro" "python-dbus" "python-systemd" "xdg-utils")
makedepends=("python-setuptools")
source=("https://github.com/ProtonVPN/protonvpn-nm-lib/archive/refs/tags/$pkgver.tar.gz")
sha256sums=('4401fb14f0c6c1a64b0092c434839270b203c7033a523113f229c460093dfb24')
validpgpkeys=("A884 41BD 4864 F95B EE08  E63A 71EB 4740 1994 0E11")

build() {
    cd "$_gitpkgname-$pkgver"
    python setup.py build
}

package() {
    cd "$_gitpkgname-$pkgver"
    python setup.py install --root="$pkgdir" --optimize=1
}
