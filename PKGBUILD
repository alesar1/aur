# Maintainer: Johan Brandhorst <jbrandhorst@buf.build>
# Contributor: William Turner <willtur.will@gmail.com>
pkgname=buf-bin
pkgver=1.0.0rc6
pkgrel=1
pkgdesc="A new way of working with Protocol Buffers."
arch=('x86_64')
url="https://buf.build"
license=('Apache')
provides=('buf')
conflicts=('buf')
source=("https://github.com/bufbuild/buf/releases/download/v1.0.0-rc6/buf-Linux-x86_64.tar.gz")
sha256sums=('bdb4eadf001c57a4467cb066ac52f24c95e7688cbb2f5a8884ad0897985cd643')

package() {
  install -D -m755 "$srcdir/buf/bin/buf" "$pkgdir/usr/bin/buf"
  install -D -m755 "$srcdir/buf/bin/protoc-gen-buf-breaking" "$pkgdir/usr/bin/protoc-gen-buf-breaking"
  install -D -m755 "$srcdir/buf/bin/protoc-gen-buf-lint" "$pkgdir/usr/bin/protoc-gen-buf-lint"
  install -D -m644 "$srcdir/buf/etc/bash_completion.d/buf" "$pkgdir/etc/bash_completion.d/buf"
  install -D -m644 "$srcdir/buf/share/zsh/site-functions/_buf" "$pkgdir/usr/share/zsh/site-functions/_buf"
}
