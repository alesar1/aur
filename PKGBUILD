# Maintainer: Daniel Maslowski <info@orangecms.org>

pkgname=fisherman
pkgver=2.2.0
pkgrel=2
pkgdesc="A blazing fast, modern plugin manager for fish"
arch=('any')
url="http://fisherman.sh/"
license=('MIT')
depends=('fish>=2.2.0' 'git')
optdepends=()
makedepends=('git')
conflicts=('fisherman-git')
install=fisherman.install
source=(
  "https://github.com/$pkgname/$pkgname/archive/$pkgver.tar.gz"
  "https://git.io/fisher-up-me"
  "fisher-up-me.patch"
)
sha512sums=('bc2e7534917591bcfcab2f0e04e8395fa9a6273ab14003c8729e448767fd5f92b63651bb789dbbb30c045230ef4bc75df3030c018a82e53d1b29d5e214f10bee'
            '38d44600caf4a4cb06866eaf5ce136b4174a47fe7d9accff86d2a9464bfc2a0ddea88143fb356541188c5db4be0f5c90d11beef555c6c3857b4555f82343727e'
            '6b1a1f38d5f182c796e8eb3f8e3d1d908092c523f968975c9789cf3fb8ea315567f51742b3a84bc721719534912f4fd632ce5b9d941750a88890264943112ffe')

prepare() {
  cp fisher-up-me fisher-up
  patch fisher-up "$srcdir/fisher-up-me.patch"
}

package() {
  sharepath="${pkgdir}/usr/share"
  fishpath="${sharepath}/fish"
  fisherpath="${sharepath}/fisherman"
  install -Dm 755 fisher-up "${pkgdir}/usr/bin/fisher-up-me"
  # install Fisherman the global fish directory
  cd "${pkgname}-${pkgver}"
  install -Dm 644 fisher.fish "${fishpath}/functions/fisher.fish"
  # README and LICENSE
  install -Dm 644 LICENSE "${sharepath}/licenses/${pkgname}/LICENSE"
  install -Dm 644 README.md "${sharepath}/doc/${pkgname}/README"
}
