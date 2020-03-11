# Maintainer: Lukas Grossar <lukas.grossar@gmail.com>
# Contributor: Ivan Shapovalov <intelfx@intelfx.name>

pkgname=kubernetes-helm2
pkgver=2.16.3
pkgrel=2
pkgdesc="A tool to manage Kubernetes charts"
arch=('i686' 'x86_64' 'arm' 'aarch64')
url="https://github.com/helm/helm"
makedepends=('git' 'glide' 'go')
depends=('kubectl' 'socat')
install="kubernetes-helm2.install"
conflicts=(
  'kubernetes-helm-bin'
  'kubernetes-helm'
  'kubernetes-helm-git'
)
license=('Apache')
source=("git+https://github.com/helm/helm#tag=v${pkgver}")
md5sums=('SKIP')

prepare() {
  mkdir -p "$srcdir/src/k8s.io"
  mv -T "$srcdir/helm" "$srcdir/src/k8s.io/helm"
}

build() {
  export GOPATH="$srcdir"
  cd "$GOPATH/src/k8s.io/helm"
  make bootstrap
  make build
}

package() {
  install -Dm755 "$srcdir/src/k8s.io/helm/bin/helm" -t "$pkgdir/usr/bin"
  install -Dm755 "$srcdir/src/k8s.io/helm/bin/tiller" -t "$pkgdir/usr/bin"
  install -dm755 "$pkgdir/usr/share/man"
  cp -r "$srcdir/src/k8s.io/helm/docs/man"/* "$pkgdir/usr/share/man/"
  gzip "$pkgdir/usr/share/man"/*/*

  "$pkgdir/usr/bin/helm" completion bash | install -Dm644 /dev/stdin "$pkgdir/usr/share/bash-completion/completions/helm"
  "$pkgdir/usr/bin/helm" completion zsh | install -Dm644 /dev/stdin "$pkgdir/usr/share/zsh/site-functions/_helm"
}
