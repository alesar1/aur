# Maintainer: Alexander Björk <bjorkalx@protonmail.com>

pkgname="redact-bin"
pkgdesc="Customize Redact to remove the content you'd like. Remove old tweets, images, discord messages, and much more."
pkgver="0.12.6"
pkgrel=3
arch=('x86_64')
url="https://redact.dev/"
license=('custom')
provides=('redact')
conflicts=('redact')
source=("https://electron-release.redact.dev/build/Redact-${pkgver}.zip"
	"redact.desktop")
sha256sums=('ec153a933dc3d728209cd7696cdab7e53e7cac7b76199fa343934e02504ee9ec'
    '9316d86af16819bd94452e0184830e92fbb497e123fa3f8df00811e4b9861e41')


package() {
    install -d ${pkgdir}/opt/${pkgname}
    cp -r $srcdir/* ${pkgdir}/opt/${pkgname}/
    install -d ${pkgdir}/usr/bin
    ln -s /opt/${pkgname}/redact ${pkgdir}/usr/bin/redact
    install -Dm644 "${srcdir}/redact.desktop" "${pkgdir}/usr/share/applications/redact.desktop"
}
