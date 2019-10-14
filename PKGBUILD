# Maintainer: David Rodriguez <dissonant.tech@gmail.com>
# Contributor: Zachary Elliott <contact@zell.io>
# https://github.com/zellio/pkgbuild

pkgname=kops
pkgver=1.14.0
pkgrel=1
pkgdesc="Kubernetes Operations (kops) - Production Grade K8s Installation, Upgrades, and Management"
arch=('x86_64')
url="https://github.com/kubernetes/kops"
license=('Apache')
makedepends=()

source=("kops-linux-amd64-$pkgver::https://github.com/kubernetes/kops/releases/download/${pkgver}/kops-linux-amd64")
sha1sums=('a78c9a5f336f42aae5c51106454275ef41e5f32d')

package() {
	install -D -g root -m 0755 -o root "$srcdir/kops-linux-amd64-$pkgver" "$pkgdir/usr/bin/kops"
}
