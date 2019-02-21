# Maintainer: Pierre-Alain TORET <pierre-alain.toret@protonmail.com>
pkgname=commento
pkgver=1.6.2
pkgrel=1
pkgdesc="A privacy-focused and bloat-free Disqus alternative"
arch=("x86_64")
makedepends=("go" "npm" "dep" "yarn")
url="https://commento.io/"
license=("MIT")
source=("https://gitlab.com/commento/commento/-/archive/v$pkgver/commento-v$pkgver.tar.gz"
        "commento.sysusers")

sha256sums=('28728b24c6b5c19dce492cc751f48193129ec1160472abcdaac599719362fa61'
            'ea958a8d23c2a0a10165662a938a085fae475fcedc768617c9b60511a1f71370')

prepare() {
	cd "$srcdir"
	rm -rf src/gitlab.com/commento
	mkdir -p src/gitlab.com/commento
	mv $pkgname-v$pkgver src/gitlab.com/commento/$pkgname
}

build() {
	export GOPATH="$srcdir"
	export PATH="${PATH}:${srcdir}/bin"
	cd "${GOPATH}/src/gitlab.com/commento/${pkgname}"
	make prod
}

package() {
	install -Dm644 "$pkgname.sysusers"  "$pkgdir/usr/lib/sysusers.d/$pkgname.conf"

	cd "${GOPATH}/src/gitlab.com/commento/${pkgname}"
	install -Dm644 etc/linux-systemd/${pkgname}.service "$pkgdir/usr/lib/systemd/system/${pkgname}.service"

	install -Dm755 build/prod/${pkgname} "$pkgdir/usr/bin/${pkgname}"

	mkdir -p "$pkgdir/usr/share"
	mv build/prod "$pkgdir/usr/share/${pkgname}"

	install -Dm644 LICENSE "$pkgdir/usr/share/licenses/${pkgname}/LICENSE"
}
