# Maintainer: Christoph Scholz <christoph.scholz@gmail.com>

pkgname=simg-tools
pkgver=7.1.2_r11
pkgrel=1
pkgdesc="Tools to handle/convert Android sparse image file (simg2img, append2simg img2simg simg2simg)"
arch=('i686' 'x86_64')
url="https://android.googlesource.com/platform/system/core"
license=('Apache')
depends=('zlib')
makedepends=('git')
source=(git+https://android.googlesource.com/platform/system/core#tag=android-${pkgver})
md5sums=('SKIP')

build() {
	cd "${srcdir}/core/libsparse"
	gcc -o simg2img -Iinclude simg2img.c sparse_crc32.c backed_block.c output_file.c sparse.c sparse_err.c sparse_read.c -lz
	gcc -o append2simg -Iinclude append2simg.c sparse_crc32.c backed_block.c output_file.c sparse.c sparse_err.c sparse_read.c -lz
	gcc -o img2simg -Iinclude img2simg.c sparse_crc32.c backed_block.c output_file.c sparse.c sparse_err.c sparse_read.c -lz
	gcc -o simg2simg -Iinclude simg2simg.c sparse_crc32.c backed_block.c output_file.c sparse.c sparse_err.c sparse_read.c -lz
}

package() {
	cd "${srcdir}/core/libsparse"
	install -D -m 755 -t "${pkgdir}/usr/bin/" simg2img append2simg img2simg simg2simg 
}
