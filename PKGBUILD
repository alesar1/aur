# Maintainer :  Kr1ss  $(tr +- .@ <<<'<kr1ss+x-yandex+com>')


pkgname=blackeye-git

pkgver() { git -C "${pkgname%-git}" log -n1 --format=%cs.g%h | tr - .; }
pkgver=2020.10.07.g2304100
pkgrel=2

pkgdesc='The most complete phishing tool - 38 website templates, updated version with ngrok'
arch=('any')
url="https://github.com/x3rz/${pkgname%-git}"
license=('GPL3')

makedepends=('git')
depends=('php')
optdepends=('ngrok: if not installed, the binary will be downloaded into the user cache'
            'wget: used to download the ngrok binary if none is found')

provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")

install="${pkgname%-git}.install"
source=("git+$url.git" "${pkgname%-git}.patch" "${pkgname%-git}.patch.sig")
sha256sums=('SKIP' 'b520c32fdb2a053b2c5c9c7a13452ba360a48f6c66aeaac87b47b6d293b2e167' 'SKIP')
validpgpkeys=('7A194E3F7A8F867BEA8A5339023F078862ACFE50')


prepare() {
    cd "${pkgname%-git}"
    patch -Np1 <"../${pkgname%-git}.patch"
}

package() {
    cd "${pkgname%-git}"
    install -Dm755 "${pkgname%-git}.sh" -t"$pkgdir/usr/share/${pkgname%-git}/"
    cp -a --no-preserve=o sites "$pkgdir/usr/share/${pkgname%-git}/"
    install -Dm644 README.md -t"$pkgdir/usr/share/doc/${pkgname%-git}/"
    install -Dm755 /dev/stdin "$pkgdir/usr/bin/${pkgname%-git}" <<-EOF
		#!/bin/sh

		cp -sufr /usr/share/${pkgname%-git} "\${XDG_CACHE_HOME:-\$HOME/.cache}/"
		cd "\${XDG_CACHE_HOME:-\$HOME/.cache}/${pkgname%-git}"
		./${pkgname%-git}.sh
	EOF
}


# vim: ts=4 sw=4 et ft=PKGBUILD:
