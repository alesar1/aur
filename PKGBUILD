# Maintainer: Trizen <echo dHJpemVuQHByb3Rvbm1haWwuY29tCg== | base64 -d>

pkgname=trizen
pkgver=1.25
pkgrel=1
epoch=1
pkgdesc="Trizen's AUR Package Manager: A lightweight wrapper for AUR."
arch=('any')
url="https://github.com/trizen/trizen"
license=('GPL3');

depends=(
         'git'
         'diffutils'
         'perl>=5.14.0'
         'perl-libwww'
         'perl-term-ui'
         'pacman'
         'perl-json'
         'perl-data-dump'
         'perl-lwp-protocol-https'
        )

optdepends=(
            'perl-json-xs: faster JSON deserialization'
            'perl-term-readline-gnu: for better STDIN support'
           )

source=("${pkgname}-${pkgver}.tar.gz::https://github.com/trizen/${pkgname}/archive/${pkgver}.tar.gz")
sha256sums=('dec6d5d05974422147c9ea4e21dc17b1c06f877e3e29ed71348bf7bcdc73e437')

package() {
  cd "$pkgname-$pkgver"
  install -m 755 -D $pkgname "$pkgdir/usr/bin/$pkgname"
}
