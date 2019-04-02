# Maintainer: Marcel Schramm <marcelschr@protonmail.com>

pkgname=cordless-git
pkgver=2019.03.26
pkgrel=1
pkgdesc='A Discord TUI client.'
arch=('x86_64')
url="https://github.com/Bios-Marcel/cordless"
license=('BSD-3')
source=("$pkgname::git+https://github.com/Bios-Marcel/cordless.git")
depends=('glibc')
md5sums=('SKIP')

pkgver() {
    cd "$pkgname"
    git describe --abbrev=0 | sed 's/-/./g'
}

build() {
  cd "$pkgname"
  go build \
    -gcflags "all=-trimpath=$PWD" \
    -asmflags "all=-trimpath=$PWD" \
    -ldflags "-extldflags $LDFLAGS" \
    -o $pkgname .
}

package() {
  cd $pkgname
  install -Dm755 $pkgname "$pkgdir"/usr/bin/cordless
}
