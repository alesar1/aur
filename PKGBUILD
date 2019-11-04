# on the base of Gentoo gwyddion ebuild
# http://packages.gentoo.org/package/sci-visualization/gwyddion

pkgname=gwyddion
pkgver=2.55
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
source=(http://downloads.sourceforge.net/sourceforge/gwyddion/$pkgname-$pkgver.tar.xz gwyddion-2.55-xml.patch)
sha256sums=('b1f1fe5ade7d667d005078f25c1b8b1523d18307ac451176ccd7c6b7bffe0050'
            'b6e70a95d999e6c9eb419b91695f0e31f43f4248f08e40aa178662e203a5b445')

prepare() {
  cd $pkgname-$pkgver

  patch -Np2 -i "${srcdir}/gwyddion-2.55-xml.patch"

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




