# Maintainer: Michael Duell <aur@akurei.me>
# Contributor: Danilo Bargen <aur at dbrgn dot ch>
pkgname=otii
pkgver=2.7.0
pkgrel=1
pkgdesc="Energy consumption analysis software by Qoitech"
arch=('x86_64')
url="https://www.qoitech.com/download"
license=('custom')
depends=('qt5-serialport' 'qt5-quickcontrols2' 'qt5-svg'
         'gcc-libs-multilib' 'hicolor-icon-theme')
source=("https://www.qoitech.com/downloads/${pkgname}_${pkgver}.deb"
        "LICENSE")

validpgpkeys=()

prepare() {
    tar xf data.tar.xz
}

package() {
    cp -a usr "$pkgdir/"
    cp -a lib "$pkgdir/usr/"
    install -Dm644 LICENSE "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
}
sha384sums=('d20c314e67e72c146abe0d1c32e9499046e7f349b59865316f7558bc0ca4e62217e41d61e3d5bed5e36f6fdb45030e65'
            'd3817ebaebb1737f4a2b32b3f6d10484c7f1b0d83da818b03cbb71077dd7e2cbae7dbf02a963e1d8f679a8cfa8d00ed4')
