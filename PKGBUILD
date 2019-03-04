# Maintainer: David Rodriguez <dissonant.tech@gmail.com>

pkgname=kops-git
pkgver=1.11.1.r0.g0f2aa8d30
pkgrel=1
pkgdesc="Kubernetes Operations (kops) - Production Grade K8s Installation, Upgrades, and Management. (git version)"
arch=('x86_64')
url="https://github.com/kubernetes/kops"
license=('Apache')
makedepends=('go' 'git')
provides=('kops')
conflicts=('kops' 'kops-bin')
source=("${pkgname}-${pkgver}::git+https://github.com/kubernetes/kops")
md5sums=('SKIP')

prepare(){
  export GOPATH=$srcdir
  mkdir -p "$GOPATH/src/k8s.io"
  mv $pkgname-$pkgver $GOPATH/src/k8s.io/kops
}

pkgver() {
  cd $GOPATH/src/k8s.io/kops
  git describe --long --tags `git rev-list --tags --max-count=1` | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  export GOPATH=$srcdir
  export GOBIN=$srcdir/bin
  cd $GOPATH/src/k8s.io/kops
  make
}

package() {
  install -Dm755 "$GOPATH/bin/kops" "$pkgdir/usr/bin/kops"
}
