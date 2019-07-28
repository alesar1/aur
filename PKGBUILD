# on the base of Gentoo gwyddion ebuild
# http://packages.gentoo.org/package/sci-visualization/gwyddion

pkgname=gwyddion
pkgver=2.53
pkgrel=1
pkgdesc="A data visualization and processing tool for scanning probe miscroscopy (SPM, i.e. AFM, STM, MFM, SNOM/NSOM, ...) and profilometry, useful also for general image and 2D data analysis"
url="http://gwyddion.net/"
license=("GPL")
arch=('i686' 'x86_64')
depends=(gtkglext pygtk fftw libunique minizip)
makedepends=('pkgconf' 'gconf')
optdepends=('libxml2: import of SPML and APE DAX data files'
            'zlib: import of SPML data files and import of gzip-compressed data from other file formats (Createc, NRRD, RHK SM4 PRM metadata)'
            'perl: development of plug-in'
            'ruby: development of plug-in'
            'fpc: development of plug-in'
            'gtksourceview2: Pygwy console syntax highlighting'
            'bzip2: import of bzip2-compressed data from NRRD'
            'libpng: export of height fields to 16bit greyscale PNG images and import from 16bit PNG images'
            'libwebp: WebP format support for the image export'
            'libzip: import of APE DAX, NanoObserver, NanoScanTech, OpenGPS and Sensofar PLUX data files'
            'cfitsio: import of Flexible Image Transport System (FITS) files'
            'openexr: import and export of OpenEXR HDR images')
source=(http://downloads.sourceforge.net/sourceforge/gwyddion/$pkgname-$pkgver.tar.xz \
        http://gwyddion.net/download/2.53/gwyddion-2.53-gcc9-openmp-shared-const.patch)
sha256sums=('bc7fdea79b180a5c3f4ac18abea103e72ee99eb4d77d7d7f66ee8b72a68b8b80'
            'aa5ad7c9557aafbeebc1f0e323bd58aa7746ba008d311740f490763821d993b7')

prepare() {
  cd $pkgname-$pkgver

  patch -Np1 -i "${srcdir}/gwyddion-2.53-gcc9-openmp-shared-const.patch"

  # python2 fix
  for file in $(find . -name '*.py' -print); do
      sed -i 's_#!.*/usr/bin/python_#!/usr/bin/python2_' $file
      sed -i 's_#!.*/usr/bin/env.*python_#!/usr/bin/env python2_' $file
  done


}

build() {
  cd $pkgname-$pkgver

#  ./configure --prefix=/usr --disable-desktop-file-update \
#		--disable-rpath \
#		--enable-library-bloat \
#		--enable-plugin-proxy \
#              --disable-updater --disable-schemas-compile \


  ./configure --prefix=/usr --sysconfdir=/etc \
              --localstatedir=/var --libexecdir=/usr/lib \
              PYTHON=python2
  make PYTHON=python2
}

package() {
  cd $pkgname-$pkgver

  make DESTDIR="$pkgdir" GCONF_DISABLE_MAKEFILE_SCHEMA_INSTALL=1 PYTHON=python2 install

  install -m755 -d "${pkgdir}/usr/share/gconf/schemas"

  gconf-merge-schema "${pkgdir}/usr/share/gconf/schemas/${pkgname}.schemas" --domain gwyddion ${pkgdir}/etc/gconf/schemas/*.schemas
  rm -f ${pkgdir}/etc/gconf/schemas/*.schemas
}




