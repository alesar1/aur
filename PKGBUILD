# Maintainer: David Rodriguez <dissonant.tech@gmail.com>
# Contributor: Zachary Elliott <contact@zell.io>
# https://github.com/zellio/pkgbuild

pkgname=kops
pkgver=1.15.2
pkgrel=1
pkgdesc="Kubernetes Operations (kops) - Production Grade K8s Installation, Upgrades, and Management"
arch=('x86_64')
url="https://github.com/kubernetes/kops"
license=('Apache')
makedepends=()

source=("kops-linux-amd64-$pkgver::https://github.com/kubernetes/kops/releases/download/${pkgver}/kops-linux-amd64")
sha1sums=('3c0ee3a75659f4654b87122709596965afca280b')

package() {
	install -D -g root -m 0755 -o root "$srcdir/kops-linux-amd64-$pkgver" "$pkgdir/usr/bin/kops"
}
