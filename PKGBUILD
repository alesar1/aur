# Maintainer: wedjat <wedjat@protonmail.com>
pkgname=dcm2niix
pkgver=1.0.20190410
pkgrel=1
pkgdesc="A tool for converting images from the complicated formats used by scanner manufacturers (DICOM, PAR/REC) to the simple NIfTI format"
arch=(x86_64)
url="https://www.nitrc.org/projects/dcm2nii/"
license=('MIT' 'public domain')
depends=('zlib')
makedepends=('cmake' 'yaml-cpp' 'python-sphinx')
optdepends=('pigz')
install=
changelog=
source=("$pkgname-$pkgver.tar.gz::https://github.com/rordenlab/dcm2niix/archive/v${pkgver}.tar.gz")
md5sums=('9a55b6de6c672a62b18f3f05bc8708c7')


build() 
{
	cd "$srcdir/$pkgname-$pkgver"
	mkdir build
	cd build

	cmake -DCMAKE_INSTALL_PREFIX=/usr -DBATCH_VERSION=ON -DUSE_SYSTEM_ZLIB=ON -DBUILD_DOCS=ON ..
	make
}



package() 
{
	cd "$srcdir/$pkgname-$pkgver"
	cd build
	make DESTDIR="$pkgdir" install
}
