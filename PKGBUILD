# Maintainer: Daniel Bermond < yahoo-com: danielbermond >

# ImageMagick compiled with all features and delegate libraries.
# Using quantum depth 32 (Q32) and HDRI.
# NOTE: DPS (Display PostScript) feature is obsolete and thus not enabled.
# For more information about DPS being obsolete please visit:
# http://www.x.org/releases/X11R7.7/doc/xorg-docs/graphics/dps.html

# NOTE:
# Change font directories bellow to match yours.
# DeJaVu and GhostScript font directories provided bellow are the default ones.
# Windows font directory provided bellow is set according to the example in Arch Linux Wiki.

_dejavu_font_dir="/usr/share/fonts/TTF"
_gs_font_dir="/usr/share/fonts/Type1"
_windows_font_dir="/usr/share/fonts/WindowsFonts"
pkgname=imagemagick-full-git
pkgver=7.0.0.0.r10577.g0ff89d1
pkgrel=1
pkgdesc="An image viewing/manipulation program (Q32 HDRI with all libs and features, Git version)"
arch=('i686' 'x86_64')
url="http://www.imagemagick.org/"
license=('custom')
depends=('jemalloc' 'bzip2' 'libx11' 'libxext' 'libxt' 'libsm' 'zlib' 'autotrace-nomagick' 'fftw'
         'libfpx' 'djvulibre' 'fontconfig' 'freetype2' 'libraqm' 'ghostscript' 'gsfonts' 'graphviz'
         'jbigkit' 'libjpeg-turbo' 'lcms' 'lcms2' 'openjpeg2' 'liblqr' 'xz' 'openexr' 'pango' 'libpng' 
         'librsvg' 'libtiff' 'libwebp' 'libwmf' 'libxml2' 'libmpeg2' 'opencl-headers' 'ocl-icd')
provides=('imagemagick' 'imagemagick-full' 'imagemagick-git' 'imagemagick-fftw'
          'libMagickCore-7.Q32HDRI.so' 'libMagickWand-7.Q32HDRI.so' 'libMagick++-7.Q32HDRI.so')
conflicts=('imagemagick' 'imagemagick-full' 'imagemagick-git' 'imagemagick-fftw' 'imagemagick-no-hdri')
backup=("etc/ImageMagick-${pkgver%%.*}/coder.xml"
        "etc/ImageMagick-${pkgver%%.*}/colors.xml"
        "etc/ImageMagick-${pkgver%%.*}/delegates.xml"
        "etc/ImageMagick-${pkgver%%.*}/log.xml"
        "etc/ImageMagick-${pkgver%%.*}/magic.xml"
        "etc/ImageMagick-${pkgver%%.*}/mime.xml"
        "etc/ImageMagick-${pkgver%%.*}/policy.xml"
        "etc/ImageMagick-${pkgver%%.*}/quantization-table.xml"
        "etc/ImageMagick-${pkgver%%.*}/thresholds.xml"
        "etc/ImageMagick-${pkgver%%.*}/type.xml"
        "etc/ImageMagick-${pkgver%%.*}/type-dejavu.xml"
        "etc/ImageMagick-${pkgver%%.*}/type-ghostscript.xml"
        "etc/ImageMagick-${pkgver%%.*}/type-windows.xml")
options=('!docs' 'libtool' '!emptydirs')
source=("$pkgname"::'git+http://git.imagemagick.org/repos/ImageMagick.git')
sha256sums=('SKIP')

pkgver() {
	cd "${srcdir}/${pkgname}"
	
	# Git, no tags available
	
	local _version="$(grep "PACKAGE_VERSION=" version.sh | grep -o '[0-9.]*')"
	local _release="$(grep "PACKAGE_RELEASE=" version.sh | grep -o '[0-9]')"
	local _revision="$(printf "r%s.g%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)")"
	
	printf "%s.%s.%s" "$_version" "$_release" "$_revision"
}

build() {
	cd "${srcdir}/${pkgname}"
	
	./configure \
	        --prefix=/usr \
	        --sysconfdir=/etc \
	        --enable-static=no \
	        --enable-shared=yes \
	        --enable-fast-install=yes \
	        --enable-openmp \
	        --enable-opencl \
	        --enable-largefile \
	        --enable-cipher \
	        --enable-hdri \
	        --enable-hugepages \
	        --enable-docs \
	        --disable-delegate-build \
	        --with-threads \
	        --with-modules \
	        --with-quantum-depth=32 \
	        --with-magick-plus-plus \
	        --with-perl \
	        --with-perl-options="INSTALLDIRS=vendor" \
	        --with-jemalloc \
	        --with-umem \
	        --with-bzlib \
	        --with-x \
	        --with-zlib \
	        --with-autotrace \
	        --without-dps \
	        --with-fftw \
	        --with-fpx \
	        --with-djvu \
	        --with-fontconfig \
	        --with-freetype \
	        --with-raqm \
	        --with-gslib \
	        --with-gvc \
	        --with-jbig \
	        --with-jpeg \
	        --with-lcms \
	        --with-openjp2 \
	        --with-lqr \
	        --with-lzma \
	        --with-openexr \
	        --with-pango \
	        --with-png \
	        --with-rsvg \
	        --with-tiff \
	        --with-webp \
	        --with-wmf \
	        --with-xml \
	        --with-dejavu-font-dir="$_dejavu_font_dir" \
	        --with-gs-font-dir="$_gs_font_dir" \
	        --with-windows-font-dir="$_windows_font_dir"
	        
	        make
}

package() {
	cd "${srcdir}/${pkgname}"
	
	make -j1 DESTDIR="$pkgdir/" install
	
	install -D -m644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
	install -D -m644 NOTICE "${pkgdir}/usr/share/licenses/${pkgname}/NOTICE"
}
