# Maintainer: Simon Weald <simon[at]simonweald[dot]com>

pkgname=kompose-bin
_srcname=kompose
pkgver=0.2.0
pkgrel=1
pkgdesc="Takes a Docker Compose file and translates it into Kubernetes resources"
url="http://kompose.io/"
license=('Apache')
arch=('x86_64')
[ "$CARCH" = 'x86_64' ] && _arch='linux-amd64'

source_x86_64=("https://github.com/kubernetes-incubator/kompose/releases/download/v$pkgver/kompose-linux-amd64")
md5sums_x86_64=('a4039136b79c2073177e5d9d2ca12516')

package() {
	install -Dm755 "$srcdir/$_srcname-$_arch" "$pkgdir/usr/bin/$pkgname"
}
