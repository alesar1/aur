# Maintainer: Proton Technologies AG <opensource at proton dot me>
# Maintainer: Alexandru Cheltutior <acrandom at pm dot me>
pkgname=protonvpn-gui
_gitpkgname=linux-app
pkgver=1.0.1
pkgrel=1
pkgdesc="ProtonVPN Graphical User Interface"
arch=("any")
url="https://github.com/ProtonVPN/"
license=("GPL3")
groups=("ProtonVPN")
depends=("python-protonvpn-nm-lib>=3.3.0" "python-protonvpn-nm-lib<3.4.0" "python-gobject" "python-psutil" "gtk3" "python-cairo")
optdepends=("libappindicator-gtk3")
makedepends=("python-setuptools")
source=("https://github.com/ProtonVPN/linux-app/archive/refs/tags/$pkgver.tar.gz")
sha256sums=('3f6a316be07cbe0652c4c6c1db6d21e3a56a35427a8ae8ada5af340f27cc948e')
validpgpkeys=("A884 41BD 4864 F95B EE08  E63A 71EB 4740 1994 0E11")

build() {
    cd "$_gitpkgname-$pkgver"
    python setup.py build
}

package() {
    cd "$_gitpkgname-$pkgver"
    install -d -m755 "${pkgdir}/usr/share/applications"
    install -d -m755 "${pkgdir}/usr/share/icons/hicolor/scalable/apps/"

    cp protonvpn.desktop "${pkgdir}/usr/share/applications/protonvpn.desktop"
    cp ./protonvpn_gui/assets/icons/protonvpn-logo.png "${pkgdir}/usr/share/icons/hicolor/scalable/apps/"
    
    python setup.py install --root="$pkgdir" --optimize=1
}
