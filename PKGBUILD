# Maintainer: Dimitris Kiziridis <ragouel at outlook dot com>

pkgname=flowgger-git
pkgver=0.2.11.r539.1e4a52d
pkgrel=1
pkgdesc="Flowgger is a fast, simple and lightweight data collector written in Rust"
url="https://github.com/awslabs/flowgger"
provides=('flowgger')
makedepends=('git' 'cargo' 'pkgconf' 'snappy' 'capnproto')
arch=('x86_64')
license=('BSD-2-Clause')
source=("git+${url}")
md5sums=('SKIP')

pkgver() {
  cd "${srcdir}/flowgger"
  _version=$(sed '4,4!d' Cargo.toml |  egrep -o "([0-9]{1,}\.)+[0-9]{1,}")
  printf "$_version.r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd "flowgger"
  cargo build --release --features="syslog kafka-output file redis tls gelf ltsv"
}

package() {
  cd "flowgger"
  install -Dm644 flowgger.toml "$pkgdir/etc/conf.d/flowgger.toml"
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/flowgger/LICENSE"
  cd target/release
  install -Dm755 flowgger "$pkgdir/usr/bin/flowgger"
}