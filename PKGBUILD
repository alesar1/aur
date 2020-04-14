# Maintainer: Michał Lisowski <lisu@riseup.net>

pkgname=kaf
pkgver=0.1.35
pkgrel=1
pkgdesc="Kafka CLI inspired by kubectl & docker"
arch=('x86_64')
license=('Apache')
url="https://github.com/birdayz/kaf"
source=("$pkgname"::"https://github.com/birdayz/${pkgname}/archive/v${pkgver}.tar.gz")
md5sums=('b337b6ee83bb07ccc9539ff09b5d0e5c')

prepare() {
  cd "$pkgname-$pkgver"
}

build() {
  cd "$pkgname-$pkgver"
  make
}

package() {
  cd "$pkgname-$pkgver"
  install -D -m755 kaf "${pkgdir}/usr/bin/${pkgname}"

  # Generate bash completion script
  mkdir -p "${pkgdir}/etc/bash_completion.d"
  ./kaf completion bash > "${pkgdir}/etc/bash_completion.d/kaf"
}

