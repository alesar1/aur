# Maintainer: Jeff Henson <jeff@henson.io>

pkgname=mobsh
pkgver=4.1.1
pkgrel=1
pkgdesc="Tool for smooth git handover"
arch=('x86_64' 'i686')
url="https://github.com/remotemobprogramming/mob"
license=('MIT')
depends=('glibc' 'git')
optdepends=('espeak-ng-espeak: Multi-lingual software speech synthesizer'
            'mbrola-voices-us1: An American English female voice for the MBROLA synthesizer')
makedepends=('go')
conflicts=('mob')
source=("$pkgname-$pkgver.tar.gz::${url}/archive/v${pkgver}.tar.gz")
sha256sums=('211b480ab2ac822839258311b4029c2b758825799afc50294ba878ce652cde09')

build() {
	cd "mob-${pkgver}"
	export CGO_CPPFLAGS="${CPPFLAGS}"
	export CGO_CFLAGS="${CFLAGS}"
	export CGO_CXXFLAGS="${CXXFLAGS}"
	export CGO_LDFLAGS="${LDFLAGS}"
	export GOFLAGS="-buildmode=pie -trimpath -ldflags=-linkmode=external -mod=readonly -modcacherw"
	go build -o mob
}

package() {
	cd "mob-${pkgver}"
	install -vDm 755 mob -t "${pkgdir}/usr/bin/"
	install -vDm 644 README.md -t "${pkgdir}/usr/share/doc/${pkgname}/"
	install -vDm 644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}/"
}
