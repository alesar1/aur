# Maintainer: Lars Grüter <lagru+pacautomation@mailbox.org>

pkgname="pacautomation"
pkgver="0.15.0"
pkgrel="1"
pkgdesc="Background download of package upgrades and cache cleaning."
arch=("any")
url="https://gitlab.com/lagru/pacautomation"
license=("GPL")
depends=("python>=3.9" "hicolor-icon-theme")
optdepends=("breeze-icons: icons for desktop notifications")
backup=("etc/pacautomation.conf")
install="INSTALL.sh"
changelog="CHANGELOG.md"
source=("https://gitlab.com/lagru/pacautomation/-/archive/v${pkgver}/${pkgname}-v${pkgver}.tar.gz")
# Update with updpkgsums
sha256sums=('c126070f9aeeaee520f49f9deec653e2aef18862197795daaf1bc76b28e8298b')

build() {
    cd "pacautomation-v${pkgver}/src"
    # Prepare byte-code file for installation (not sure if this works)
    python -O -m compileall *.py
}

package() {
    cd "pacautomation-v${pkgver}/src"
    install -Dm 644 "pacautomation.conf" -t "${pkgdir}/etc/"
    install -Dm 644 "pacautomation.service" -t "${pkgdir}/usr/lib/systemd/system/"
    install -Dm 644 "pacautomation.timer" -t "${pkgdir}/usr/lib/systemd/system/"
    install -Dm 644 "pacautomation.notifyrc" -t "${pkgdir}/usr/share/knotifications5/"
    install -Dm 644 "pacautomation.svg" -t "${pkgdir}/usr/share/icons/hicolor/scalable/apps/"
    install -Dm 755 "pacautomation.py" -t "${pkgdir}/usr/lib/pacautomation/"
    cp -a "__pycache__" "${pkgdir}/usr/lib/pacautomation/"

    install -dm 755 "${pkgdir}/usr/bin"
    ln -s "/usr/lib/${pkgname}/pacautomation.py" "${pkgdir}/usr/bin/pacautomation"
}
