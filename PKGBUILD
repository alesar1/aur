# Maintainer: Andrea Giammarchi <andrea.giammarchi@gmail.com>
pkgname=cairo-glesv2-aarch64
pkgver=1.17.2
arch=(aarch64)
pkgrel=1
pkgdesc='Cairo vector graphics library (glesv2 version)'
url='http://cairographics.org/'
license=('LGPL' 'MPL')
provides=('cairo=1.17.2' 'cairo-gl=1.17.2' 'cairo-xcb=1.17.2')
conflicts=('cairo' 'cairo-gl' 'cairo-xcb')
depends=('libpng' 'libxrender' 'libxext' 'fontconfig' 'pixman>=0.28.0' 'glib2' 'mesa' 'libgl' 'lzo')
source=('https://webreflection.github.io/aur/cairo-glesv2-aarch64-1.17.2.tar.gz')
md5sums=('afb90f6193ae12d4081ad1bca9afa497')
sha1sums=('33013ba7d3840c9d451d6585168b7a716f785dbd')
sha256sums=('648268057ab56d806af1674e466ed546b5af48107428e693aeaab6fe5dbaa83d')
sha512sums=('ea8ee3179edc87697aef37a40d630298916c978618591571d72e3aae4ff3b03ffcac6edf332562867cea2fd8b5f254b35f5aca32cfb0786b07c0f00f2ea03da0')

package () {
    cp -R "${srcdir}/usr" "${pkgdir}"
}
