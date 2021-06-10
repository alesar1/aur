# Maintainer: Pi-Yueh Chuang <pychuang@pm.me>
pkgname=offlineimap3-git
pkgver=r2746.fe443e6
pkgrel=1
pkgdesc="Read/sync your IMAP mailboxes (python3)"
arch=("any")
url="https://github.com/OfflineIMAP/offlineimap3"
license=("GPL2")
depends=(
    "python-imaplib2"
    "python-rfc6555"
    "python-distro"
)
makedepends=("asciidoc")
optdepends=(
    "python-gssapi: for Kerberos authentication"
    "python-portalocker: if you need to run offlineimap in Cygwin for Windows"
)
provides=("offlineimap")
conflicts=("offlineimap" "offlineimap-git")
source=(
    "${pkgname}::git+https://github.com/OfflineIMAP/offlineimap3.git"
    "imaplib2_version.patch"
)
md5sums=(
    "SKIP"
    "0ad5ba88285b4604fc6e77472892fe23"
)

pkgver() {
    cd "${srcdir}/${pkgname}"
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
    cd "${srcdir}/${pkgname}"

    # apply patches
    patch -p1 -i "${srcdir}/imaplib2_version.patch"
}

build() {
    cd "${srcdir}/${pkgname}"
    make clean
    python setup.py build

    cd "${srcdir}/${pkgname}/docs"
    make man
}

package() {
    cd "${srcdir}/${pkgname}"
    python setup.py install --root="${pkgdir}" --optimize=1 --skip-build

    # install README
    install -Dm644 "README.md" -t "${pkgdir}/usr/share/doc/${pkgname}"

    # install documentation
    install -Dm644 "docs/offlineimap.1" "${pkgdir}/usr/share/man/man1/offlineimap.1"
    install -Dm644 "docs/offlineimapui.7" "${pkgdir}/usr/share/man/man7/offlineimapui.7"
    install -Dm644 "offlineimap.conf" "${pkgdir}/usr/share/offlineimap/offlineimap.conf"
    install -Dm644 "offlineimap.conf.minimal" "${pkgdir}/usr/share/offlineimap/offlineimap.conf.minimal"

    #systemd files
    install -Dm644 "contrib/systemd/offlineimap.service" "${pkgdir}/usr/lib/systemd/user/offlineimap.service"
    install -Dm644 "contrib/systemd/offlineimap@.service" "${pkgdir}/usr/lib/systemd/user/offlineimap@.service"
    install -Dm644 "contrib/systemd/offlineimap-oneshot.service" "${pkgdir}/usr/lib/systemd/user/offlineimap-oneshot.service"
    install -Dm644 "contrib/systemd/offlineimap-oneshot.timer" "${pkgdir}/usr/lib/systemd/user/offlineimap-oneshot.timer"
    install -Dm644 "contrib/systemd/offlineimap-oneshot@.service" "${pkgdir}/usr/lib/systemd/user/offlineimap-oneshot@.service"
    install -Dm644 "contrib/systemd/offlineimap-oneshot@.timer" "${pkgdir}/usr/lib/systemd/user/offlineimap-oneshot@.timer"
}
