# Maintainer: Hoàng Văn Khải <hvksmr1996@gmail.com>

# This file is automatically generated. Do not edit.

pkgname=sane-fmt-bin
pkgver=0.2.11
source=(sane-fmt-27cc11a9f45bf7e7640af221c4220141a43e7014::https://github.com/KSXGitHub/sane-fmt/releases/download/0.2.11/sane-fmt-x86_64-unknown-linux-gnu https://raw.githubusercontent.com/KSXGitHub/sane-fmt/master/LICENSE.md)
_checksum=27cc11a9f45bf7e7640af221c4220141a43e7014
# This PKGBUILD is not a full PKGBUILD
# pkgname, pkgver, source, and sha1sums are to be generated
pkgdesc='Opinionated code formatter for TypeScript and JavaScript'
pkgrel=0
arch=(x86_64)
license=(MIT)
url='https://github.com/KSXGitHub/sane-fmt'
conflicts=(sane-fmt)
sha1sums=($_checksum SKIP)

package() {
  install -Dm755 sane-fmt-$_checksum "$pkgdir"/usr/bin/sane-fmt
  install -Dm644 LICENSE.md "$pkgdir"/usr/share/"$pkgname"/LICENSE.md
}

