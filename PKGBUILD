# Maintainer: Johan Brandhorst <jbrandhorst@buf.build>
# Contributor: William Turner <willtur.will@gmail.com>
pkgname=buf-bin
pkgver=0.42.1
pkgrel=1
pkgdesc="A new way of working with Protocol Buffers."
arch=('x86_64')
url="https://buf.build"
license=('Apache')
provides=('buf')
conflicts=('buf')
source=("https://github.com/bufbuild/buf/releases/download/v$pkgver/buf-Linux-x86_64.tar.gz")
sha256sums=('8c46befdc8d0da55813aabf9bc287d083e32333f921cf6d9d7b32facad5aa240')

package() {
  install -D -m755 "$srcdir/buf/bin/buf" "$pkgdir/usr/bin/buf"
  install -D -m755 "$srcdir/buf/bin/protoc-gen-buf-check-breaking" "$pkgdir/usr/bin/protoc-gen-buf-check-breaking"
  install -D -m755 "$srcdir/buf/bin/protoc-gen-buf-check-lint" "$pkgdir/usr/bin/protoc-gen-buf-check-lint"
  install -D -m644 "$srcdir/buf/etc/bash_completion.d/buf" "$pkgdir/etc/bash_completion.d/buf"
  install -D -m644 "$srcdir/buf/share/zsh/site-functions/_buf" "$pkgdir/usr/share/zsh/site-functions/_buf"
}
