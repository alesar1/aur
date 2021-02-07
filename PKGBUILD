# Maintainer: Jack O'Sullivan <j@ckos.ie>

pkgname=netsoc
pkgdesc="Netsoc CLI"
pkgver=0.4.0
pkgrel=1
arch=('x86_64')
url="https://netsoc.ie"
license=('GPL-3')
depends=('glibc')
makedepends=('go' 'rsync' 'git')
source=(https://github.com/netsoc/cli/archive/v${pkgver}/v${pkgver}.tar.gz)
sha512sums=('07a6c676e0088e26dcbf63dfd70ee74365d48709edff5a74a349ee7156cbda88ac2c927ef0417b531b26b0b64e3e169d381022e37ebbe33dca11649cd8cf4f0c')

build() {
  cd cli-${pkgver}
  export CGO_CPPFLAGS="${CPPFLAGS}"
  export CGO_CFLAGS="${CFLAGS}"
  export CGO_CXXFLAGS="${CXXFLAGS}"
  export CGO_LDFLAGS="${LDFLAGS}"
  export GOFLAGS="-buildmode=pie -ldflags=-linkmode=external -trimpath -mod=readonly -modcacherw"
  export GOLDFLAGS="-linkmode=external"

  make VERSION="$pkgver" bin/netsoc
}

package() {
  cd cli-${pkgver}
  install -Dm755 bin/netsoc -t "$pkgdir/usr/bin"

  "$pkgdir/usr/bin/netsoc" docs -t man -o docs/
  gzip docs/man1/*
  install -Dm644 docs/man1/* -t "$pkgdir/usr/share/man/man1"

  "$pkgdir/usr/bin/netsoc" completion bash | install -Dm644 /dev/stdin "$pkgdir/usr/share/bash-completion/completions/netsoc"
  "$pkgdir/usr/bin/netsoc" completion zsh | install -Dm644 /dev/stdin "$pkgdir/usr/share/zsh/site-functions/_netsoc"
}

# vim: ts=2 sw=2 et:
