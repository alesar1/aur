# Maintainer: kpcyrd <git@rxv.cc>

_gitname=snail
pkgname=snail-git
pkgver=0.1.0.r11.g78491b4
pkgrel=1
pkgdesc="Parasitic network manager"
url="https://github.com/kpcyrd/snail"
depends=('zeromq' 'libseccomp' 'dbus')
makedepends=('cargo' 'git')
provides=('snail')
conflicts=('snail')
arch=('i686' 'x86_64' 'armv6h' 'aarch64')
license=('GPL3')
backup=('etc/snail/snail.conf')
source=("git+https://github.com/kpcyrd/$_gitname.git")
sha512sums=('SKIP')

pkgver() {
  cd "$_gitname"
  git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd "$_gitname"
  cargo build --release --locked
}

check() {
  cd "$_gitname"
  cargo test --release --locked
}

package() {
  cd "$_gitname"
  install -Dm755 target/release/snaild \
                 target/release/snailctl \
                 -t "$pkgdir/usr/bin"
  install -Dm644 scripts/* -t "$pkgdir/usr/lib/snaild/scripts"

  install -d "$pkgdir/etc/snail/scripts"
  install -Dm644 contrib/snail.conf -t "$pkgdir/etc/snail"
  install -Dm644 contrib/snail@.service -t "$pkgdir/usr/lib/systemd/system"

  install -Dm644 README.md -t "$pkgdir/usr/share/doc/$pkgname"
  install -Dm644 docs/snail.7 \
                 -t "$pkgdir/usr/share/man/man7"
  install -Dm644 docs/snaild.8 \
                 docs/snailctl.8 \
                 -t "$pkgdir/usr/share/man/man8"

  install -Dm644 LICENSE -t "$pkgdir/usr/share/licenses/$_gitname"
}

# vim:set ts=2 sw=2 et:
