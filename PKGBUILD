# Maintainer: Mario Ray Mahardhika <leledumbo_cool@yahoo.co.id>
pkgname=webkitgtk2-bin
epoch=3
pkgver=2.4.11
pkgrel=26
pkgdesc="Legacy Web content engine for GTK+ 3 (precompiled)."
provides=("webkitgtk2=${epoch}:${pkgver}")
conflicts=("webkitgtk2")
arch=("x86_64")
url="https://webkitgtk.org/"
license=("custom")
depends=("enchant>=2.2" "geoclue2" "gst-plugins-base-libs" "gtk2" "harfbuzz-icu" "libgl" "libsecret" "libwebp" "libxslt" "libxt")
optdepends=(
  "gst-libav: nonfree media decoding"
  "gst-plugins-base: free media decoding"
  "gst-plugins-good: media decoding"
)
options=(!emptydirs)
source=("https://github.com/frealgagu/archlinux.webkitgtk2/releases/download/${epoch}_${pkgver}-${pkgrel}/webkitgtk2-${epoch}.${pkgver}-${pkgrel}-x86_64.pkg.tar.zst")
sha256sums=("5ad70724992f26882b33ce0f3fcc6365805813d59aa1aaca1b87537a20d34481")

package() {
  cp -Rfp $srcdir/usr $pkgdir/
}
