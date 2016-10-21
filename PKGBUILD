# Maintainer: Matt Harrison <matt@mistbyte.com>
# This PKGBUILD is maintained at https://github.com/matt-h/aur-pkgbuilds/tree/master/screamingfrogseospider

pkgname=screamingfrogseospider
pkgver=6.2
pkgrel=1
pkgdesc="A small desktop program you can install on your PC or Mac which spiders websites’ links, images, CSS, script and apps from an SEO perspective."
arch=('any')
url="http://www.screamingfrog.co.uk/seo-spider/"
license=('custom')
depends=('java-environment' 'java-openjfx')
makedepends=()
source=(
  "http://www.screamingfrog.co.uk/products/seo-spider/screamingfrogseospider_${pkgver}_all.deb"
  "LICENSE"
)
sha256sums=('eb489a5c2b72e3122d9f82a192886538a0711664646f400c8f39ba39af813cd1'
            '5f32a7baef326d88754c6581883800a8d68a753bec846a1d0c190460ab7a2424')

build() {
  cd "$srcdir"
  msg "Extracting..."
  tar xf data.tar.xz
  msg2 "Done extracting!"
}

package() {
  cp -dpr --no-preserve=ownership "$srcdir/usr" "$pkgdir"
  install -Dm644 "$srcdir/LICENSE" "$pkgdir/usr/share/licenses/${pkgname}/LICENSE"
}

# vim:set ts=2 sw=2 et:
