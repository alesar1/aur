# Maintainer: "Amhairghin" Oscar Garcia Amor (https://ogarcia.me)

pkgname=mongodb-compass
pkgver=1.31.1
pkgrel=1
pkgdesc="The MongoDB GUI"
arch=('x86_64')
url="https://www.mongodb.com/products/compass"
license=('custom')
depends=('alsa-lib' 'gtk3' 'libsecret' 'libxss' 'libxtst' 'nss')
optdepends=('org.freedesktop.secrets')
source=("https://downloads.mongodb.com/compass/${pkgname}_${pkgver}_amd64.deb")
noextract=("${pkgname}_${pkgver}_amd64.deb")
b2sums=('6a975ae235ab2f4a5765e2ce77cce2c3eaf5dd6de259842f882dd33b353513354fdc7c2311e3cbcb2e4cfcf70537832b7c0d9bb1adb7a03d6a605a7d818e9a9a')

package() {
    bsdtar -O -xf "${pkgname}_${pkgver}"*.deb data.tar.xz | bsdtar -C "$pkgdir" -xJf -

    # Permission fix
    find "${pkgdir}" -type d -exec chmod 755 {} +
    find "${pkgdir}" -type f -exec chmod 644 {} +
    chmod +x "${pkgdir}"/usr/lib/mongodb-compass/"MongoDB Compass"

    # Remove all unnecessary stuff
    rm -rf "${pkgdir}/usr/share/lintian"
    rm -rf "${pkgdir}/usr/share/doc"

    # Install license
    install -dm755 ${pkgdir}/usr/share/licenses/${pkgname}
    ln -s /usr/share/${pkgname}/LICENSE ${pkgdir}/usr/share/licenses/${pkgname}
}
