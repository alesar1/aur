pkgname=jitsi-meet
pkgver=4039
pkgrel=2
pkgdesc="WebRTC JavaScript video conferences"
arch=("x86_64")
url="https://github.com/jitsi/jitsi-meet"
license=("Apache")
makedepends=("git" "npm")
optdepends=("jicofo"
            "jitsi-videobridge"
            "nginx"
            "prosody")
backup=("opt/jitsi-meet/config.js"
        "opt/jitsi-meet/interface_config.js"
        "opt/jitsi-meet/logging_config.js")
options=("!strip")
source=($pkgname-$pkgver.tar.gz::https://github.com/jitsi/jitsi-meet/archive/$pkgver.tar.gz)
md5sums=('8c8e92686254a711122478b1bdad8fd3')

build() {
    cd "${srcdir}/${pkgname}-${pkgver}"
    npm install -g --user root --prefix "$pkgdir/usr"
    # fix as many vulns as possible
    npm audit fix
    # Make fails with more than one thread
    make -j1
}

package() {
    install -d "${pkgdir}/opt"
    cp -R "${srcdir}/${pkgname}-${pkgver}/" "${pkgdir}/opt/jitsi-meet"

    # get rid of all local references
    find "${pkgdir}" -type f -execdir sed -i "s#$srcdir##g" "{}" \;

    # Non-deterministic race in npm gives 777 permissions to random directories.
    # See https://github.com/npm/npm/issues/9359 for details.
    find "${pkgdir}" -type d -exec chmod 755 {} +

    # npm gives ownership of ALL FILES to build user
    # https://bugs.archlinux.org/task/63396
    chown -R root:root "${pkgdir}"
}
