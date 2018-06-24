# Maintainer: Daniel Peukert <dan.peukert@gmail.com>

_pkgname=qr-filetransfer
_gourl="github.com/claudiodangelis/$_pkgname"
pkgname="$_pkgname-git"
pkgver=r89.2df55ab
pkgrel=1
pkgdesc="Transfer files over wifi from your computer to your mobile device by scanning a QR code without leaving the terminal."
arch=('any')
url="https://$_gourl"
license=('MIT')
makedepends=('go>=1.8' 'git')
provides=("$_pkgname")
options=('!strip' '!emptydirs')

pkgver() {
	git clone -n "$url.git" "$srcdir/pkgver"
	cd "$srcdir/pkgver"
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
	GOPATH="$srcdir" go get -fix -v -x "$_gourl"
}

package() {
	install -Dpm755 "$srcdir/bin/$_pkgname" "$pkgdir/usr/bin/$_pkgname"
	install -Dm644 "$srcdir/src/$_gourl/LICENSE" "$pkgdir/usr/share/licenses/$_pkgname/LICENSE"
}
