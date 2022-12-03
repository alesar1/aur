# Maintainer: howeyc <chris@howey.me>
# Maintainer: aksr <aksr at t-com dot me>
pkgname=ivy-calc
_srcname=ivy
_binname=ivyc
pkgver=0.2.10
pkgrel=1
pkgdesc='An APL-like calculator.'
arch=('i686' 'x86_64')
url='https://github.com/robpike/ivy'
license=('BSD')
depents=('glibc')
makedepends=('go')
provides=("${_binname}=${pkgver}")
conflicts=("${_binname}" 'ivy-git<1')
source=("${_srcname}-${pkgver}.tar.gz::${url}/archive/v${pkgver}.tar.gz")
b2sums=('cb35246259d43680416f82842fd55408a911d7160efb0a8552c96d99e12a97781783ea561c59eb741ea0b91bee6e8beb511a5c2a66c5e12908415a032f4058b8')

prepare() {
	cp "$startdir/genmanpage.sh" "$srcdir/${_srcname}-${pkgver}"
}

build() {
	cd "$srcdir/${_srcname}-${pkgver}"
	export CGO_CPPFLAGS="${CPPFLAGS}"
	export CGO_CFLAGS="${CFLAGS}"
	export CGO_CXXFLAGS="${CXXFLAGS}"
	go build \
        -o "${_binname}" \
        -trimpath \
        -buildmode='pie' \
        -mod='readonly' \
        -modcacherw \
        -ldflags "-linkmode external -extldflags \"${LDFLAGS}\"" \
        .
	sh genmanpage.sh
}

package() {
	cd "$srcdir/${_srcname}-${pkgver}"
	install -D -m755 ${_binname} "$pkgdir/usr/bin/${_binname}"
	install -D -m644 LICENSE $pkgdir/usr/share/licenses/${pkgname}/LICENSE
	sed '11,375!d' doc.go > README
	install -Dm644 README $pkgdir/usr/share/doc/${pkgname}/README
    install -Dm644 ivyc.1 "${pkgdir}/usr/share/man/man1/ivyc.1"
}
