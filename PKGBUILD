# Maintainer: Silvio Ankermann < silvio at booq dot org >

pkgname=prosody-filer
pkgver=1.0.0
pkgrel=1
pkgdesc='Golang mod_http_upload_external server for Prosody'
url='https://github.com/ThomasLeister/prosody-filer'
license=('MIT')
arch=('any')
depends=()
makedepends=()
install=prosody-filer.install
source=("https://github.com/ThomasLeister/${pkgname}/releases/download/v${pkgver}/${pkgname}"
	"https://github.com/ThomasLeister/${pkgname}/archive/v${pkgver}.tar.gz"
	"prosody-filer.service")
sha256sums=('08a9b511af012b7290835ae537a39468c5f17a7a5b6a184d4ee8257249e82477'
            '10c43fd2ef2e923653ca1467ea02c1af4f9bc738d1657c6ca3a0a58600872033'
            'ff0b2d4ee0e96817d2a95f44c7878726784e947aacbbf3674c30b11955ffcae8')



package() {
    cd "${srcdir}"
    install -D -m755 prosody-filer "${pkgdir}/usr/bin/prosody-filer"
    install -D -m644 "prosody-filer-${pkgver}/config.example.toml" "${pkgdir}/etc/prosody-filer.toml"
    install -D -m644 prosody-filer.service "${pkgdir}/usr/lib/systemd/system/prosody-filer.service"
}
