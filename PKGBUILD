# Maintainer: Jordan J Klassen <forivall@gmail.com>
# Upstream URL: https://github.com/atom/atom

pkgname=shopify-themekit-bin
pkgver=0.3.5
pkgrel=1
pkgdesc="A cross-platform tool for building Shopify Themes"
arch=('i686' 'x86_64')

url="https://github.com/Shopify/themekit"
license=('MIT')
depends=()
conflicts=('shopify-themekit')

source_i686=("shopify-themekit-v${pkgver}-i686.zip::https://github.com/Shopify/themekit/releases/download/${pkgver}/linux-386.zip")
source_x86_64=("shopify-themekit-v${pkgver}-x86_64.zip::https://github.com/Shopify/themekit/releases/download/${pkgver}/linux-amd64.zip")
md5sums_i686=('8eb7ce88880ebcf304150e4bc3586c94')
md5sums_x86_64=('f40ed3f64e6e76fd3fb81e293703b6a9')

package() {
  local subdir
  if [ "$CARCH" = "i686" ]; then
    subdir="linux-386"
  else
    subdir="linux-amd64"
  fi
  install -Dm0755 "${srcdir}/${subdir}/theme" "${pkgdir}/usr/bin/theme"
}
